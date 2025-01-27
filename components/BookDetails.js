import Image from 'next/image';

export default function BookDetails({ index, book }) {
  return (
  <div className="flex w-full mb-4">
    <div>
      {/* 책 그림자 표시 */}
      <Image src={book.image} alt="" width={140} height={180} />
    </div>
    <div>
      {/* 도서 정보 목록 표시 (index 속성이 지정되면 연속 번호도 표시) */}
      <ul className="list-none text-black ml-4">
        <li>{index && index + '.'}</li>
        <li>{book.title}({book.price}원)</li>
        <li>{book.author} 지음</li>
        <li>{book.publisher} 출판</li>
        <li>{book.published} 출시</li>
      </ul>
    </div>
  </div>
  );
}

