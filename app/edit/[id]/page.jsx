// export default function EditPage({ params }) {
//   return <p>No. {params.id}의 리뷰를 표시하고 있다.</p>;
// }



// Code 11-4-12
import BookDetails from '@/components/BookDetails';
import FormEdit from '@/components/FormEdit';
import { getBookById, getReviewById } from '@/lib/getter';

export default async function EditPage({ params }) {
  const book = await getBookById(params.id);
  const review = await getReviewById(params.id);
  // 'YYYY-MM-DD' 형식의 날짜 생성
  const read = (review?.read || new Date()).toLocaleDateString('sv-SE');

  // const read = (review?.read || new Date()).toLocaleDateString('ko-KR',
  //   { year: 'numeric', month: '2-digit', day: '2-digit' }
  // ).replaceAll('/', '-')

  return (
    <div id="form">
      <BookDetails book={book} />
      <hr />
      {/* 편집 양식 생성 */}
      <FormEdit src={{ id: book.id, read, memo: review?.memo }} />
    </div>
  );
}