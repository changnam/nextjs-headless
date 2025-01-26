// app/products/[handle]/page.js
import { getProduct } from '@/lib/shopify';
import Image from 'next/image';

export default async function ProductPage({ params }) {
  const { handle } = await params;
  const product = await getProduct(handle);
  console.log("handle", handle);
  console.log("product", product);
  const price = product.variants.edges[0].node.priceV2;

  return (
    <main className="container">
      <h1>{product.title}</h1>
      <Image
        src={product.images.edges[0]?.node.originalSrc}
        alt={product.images.edges[0]?.node.altText || product.title}
        width={500}
        height={500}
      />
      <p>{product.description}</p>
      <p>
        Price: {price.currencyCode} {price.amount}
      </p>
      <button className="btn-primary">Add to Cart</button>
    </main>
  );
}
