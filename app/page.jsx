'use client';

// app/page.js
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main style={{ backgroundColor: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
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
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </main>
  );
}