// app/collections/[handle]/page.js
import { getCollection, getCollectionProducts } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';

export default async function CollectionPage({ params }) {
  const { handle } = await params;
  const collection = await getCollection(handle);
  const products = await getCollectionProducts(handle);

  return (
    <main className="container">
      <h1>{collection.title}</h1>
      <p>{collection.description}</p>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}