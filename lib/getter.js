import prisma from './prisma';

// API를 통해 얻은 도서 정보에서 필요한 정보만을 객체로 재구성
export function createBook(book) {
  console.log("id: "+book.id+",authors: "+book.volumeInfo.authors);
  const authors = book.volumeInfo.authors;
  const price = book.saleInfo.listPrice;
  const img = book.volumeInfo.imageLinks;
  return {
    id: book.id,
    title: book.volumeInfo.title,
    author: authors ? authors.join(',') : '',
    price: price ? price.amount : 0,
    publisher: book.volumeInfo.publisher,
    published: book.volumeInfo.publishedDate,
    image: img ? img.smallThumbnail : '/vercel.svg',
  };
}

// 인수 keyword를 키워드로 Google Books API에서 책 검색하기
export async function getBooksByKeyword(keyword) {
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=ko&maxResults=20&printType=books`);
  const result = await res.json();
  const books = [];
  // 응답 내용을 객체 배열로 리필
  for (const b of result.items) {
    books.push(createBook(b));
  }
  return books;
}

// id값을 키로 하여 도서 정보를 가져옴
export async function getBookById(id) {
  
  console.log("검색 id: "+id);

  try {
   
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);

    if (!res.ok) {
      // Handle HTTP errors (e.g., 404, 500)
      console.log("HTTP error! status: "+res.status);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const result = await res.json();

    console.log("success: "+result.volumeInfo.title);
    return createBook(result);

  } catch (error) {
    // Handle fetch or parsing errors
    console.log('Fetch error:', error.message);
    throw new Error(`HTTP error! status: ${error.code}`);
  }
 

}

// id값을 키로 리뷰 정보 가져오기
export async function getReviewById(id) {
  return await prisma.reviews.findUnique({
    where: {
      id: id
    }
  });
}

export async function getAllReviews() {
  // 읽은 날짜(read) 내림차순으로 검색
  return await prisma.reviews.findMany({
    orderBy: {
      read: 'desc'
    }
  });
}