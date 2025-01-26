// components/CollectionCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function CollectionCard({ collection }) {
    console.log("collection", collection);
  return (
    <div className="collection-card">
      <Link href={`/collections/${collection.handle}`}>
        <Image
          src={collection.image?.originalSrc}
          alt={collection.image?.altText || collection.title}
          width={200}
          height={200}
        />
      </Link>
      <h3>{collection.title}</h3>
    </div>
  );
}