// components/ProductCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const price = product.variants.edges[0].node.priceV2;
  return (
    <div className="product-card">
      <Link href={`/products/${product.handle}`}>
        <Image
          src={product.images.edges[0]?.node.originalSrc}
          alt={product.images.edges[0]?.node.altText || product.title}
          width={200}
          height={200}
        />
      </Link>
      <h3>{product.title}</h3>
      <p>
        Price: {price.currencyCode} {price.amount}
      </p>
    </div>
  );
}