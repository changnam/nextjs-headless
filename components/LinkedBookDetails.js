import Link from 'next/link';
import BookDetails from './BookDetails';

export default function LinkedBookDetails({ index, book }) {
    // BookDetails 컴포넌트에 링크 부여
    return (
    <Link href={`/edit/${book.id}`}>
        <div className="hover:bg-green-50">
            <BookDetails index={index} book={book} />
        </div>
    </Link>
    );
}