import LinkedBookDetails from '@/components/LinkedBookDetails';
import { getBooksByKeyword } from '@/lib/getter';

// 루트 매개변수 키워드 가져오기(기본값은 리액트)
export default async function BookResult({ params: { keyword = '리액트' } }) {
  // 주어진 키워드로 도서 정보 검색
  const books = await getBooksByKeyword(keyword);
  return (
    <>
    {/* 획득한 도서 목록 보기 */}
    {books.map((b,i) => (
      <LinkedBookDetails book={b} index={i + 1} key={b.id} />
    ))}
    </>
  );
}
