// components/Navbar.js
'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState, useEffect } from 'react';
export default function Navbar() {
  const [mounted, setMounted] = useState(false)

//  useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

   if (!mounted) {
    return null
  }

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
        <Link href="/provider">Provider</Link>
        <Link href="/mui">Mui</Link>
        <Link href="/theme">Theme</Link>
        <Link href="/books" className='hidden'>Books</Link>
        <Link href="/reviews" className='hidden'>Reviews</Link>
        <Link href="/popover" >Popover</Link>
        <Link href="/navbar" >ReactNavbar</Link>
        <Link href="#" ><SearchIcon></SearchIcon></Link>
        <Link href="#" ><PersonOutlineIcon></PersonOutlineIcon></Link>
        <Link href="#" ><ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Link>
      </div>
    </nav>
  );
}