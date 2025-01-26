// app/page.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="container">
      <h1>Welcome to Our Store</h1>
      <p>Your one-stop shop for exclusive products.</p>
      <div className="button-group">
        <Link href="/products">
          <button className="btn-primary">Shop Products</button>
        </Link>
        <Link href="/collections">
          <button className="btn-secondary">Browse Collections</button>
        </Link>
      </div>
    </main>
  );
}