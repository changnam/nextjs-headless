// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={100} height={50} />
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/collections">Collections</Link>
        <Link href="/about">About Us</Link>
        <Link href="/shadcn">shadcn</Link>
      </div>
    </nav>
  );
}