// import { getAllReviews } from '@/lib/getter';
// import LinkedBookDetails from '@/components/LinkedBookDetails';

// // 항상 최신 정보 얻기
// export const dynamic = 'force-dynamic';
// export default async function Home() {
//   // 모든 리뷰 정보 얻기
//   const reviews = await getAllReviews();
//   return (
//   <>
//     {/* 획득한 리뷰 정보를 바탕으로 리스트 생성 */}
//     {reviews.map((b, i) => (
//       <LinkedBookDetails book={b} index={i + 1} key={b.id} />
//     ))}
//   </>
//   );
// }



// Code 11-4-7
import { getAllReviews } from '@/lib/getter';
import LinkedBookDetails from '@/components/LinkedBookDetails';

// 항상 최신 정보 얻기
export const dynamic = 'force-dynamic';
export default async function Home() {
  // 모든 리뷰 정보 얻기
  const reviews = await getAllReviews();
  console.log(reviews);
  return (
  <>
    {/* 획득한 리뷰 정보를 바탕으로 리스트 생성 */}
    {reviews.map((b, i) => (
      <LinkedBookDetails book={b} index={i + 1} key={b.id} />
    ))}
  </>
  );
}