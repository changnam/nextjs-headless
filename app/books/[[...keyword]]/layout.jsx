'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

// "/books/keyword" 아래에 적용되는 레이아웃
export default function BooksLayout({ children }) {
  const router = useRouter();
  const txtKeyword = useRef(null);
  // [검색] 버튼 클릭 시 '/books/keyword'로 리디렉션된다.
  const handleSearch = () => {
    router.push(`/books/${txtKeyword.current.value}`);
  };

  return (
    <>
    <form className="mt-2 mb-4">
      <input type="text" ref={txtKeyword}
        className="bg-gray-100 text-black border border-gray-600 rounded mr-2 px-2 py-2 focus:bg-white focus:outline-none focus:border-red-500" />
      <button type="button" onClick={handleSearch}
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-500">
        검색</button>
    </form>
    <hr />
    {children}
    </>
  );
}