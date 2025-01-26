// app/products/page.js
import { getProducts } from '@/lib/shopify';
import ProductCard from '@/components/ProductCard';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="container">
      <h1>All Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}