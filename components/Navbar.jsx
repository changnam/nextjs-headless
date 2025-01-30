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
    <nav className="flex items-center justify-between p-5 bg-gray-800 text-white">
      <Link href="/" className="flex-none items-center gap-2">
        {/*<Image src="/images/logo.png" alt="Logo" width={100} height={50} />*/}
        <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="gray" />
          <circle cx="75" cy="50" r="40" fill="white" />
          <text x="75" y="60" fontSize="30" textAnchor="middle" fill="black">BlackMotiv</text>
        </svg>
      </Link>
      <div className="flex flex-wrap items-center gap-5">
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