// components/Navbar.js
'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useState, useEffect } from 'react';
import Hamburger from '@/components/Hamburger';
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
    <nav className="flex items-center justify-between p-0 md:p-2 bg-[#333] text-white">
      <Link href="/" className="flex-none items-start gap-2 hidden md:block bg-transparent">
        {/*<Image src="/images/logo.png" alt="Logo" width={100} height={50} />*/}
        <Image 
          className="w-full h-auto " src="/blackmotiv.svg" alt="Logo" width={100} height={50} priority>
        </Image>
      </Link>
      <Link href="#" className="block md:hidden">
      <Image
          className="invert dark:invert "
          src="/hamburger-md-svgrepo-com.svg"
          alt="Hamburger menu"
          width={50}
          height={38}
          priority
        />
        </Link>
      <div className="hidden md:block md:mx-auto">
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
        <Link href="/headless-ui" >HeadlessUI</Link>
        {/*<Link href="#" ></Link>*/}
        <Link href="#" ><SearchIcon></SearchIcon></Link>
        <Link href="#" ><PersonOutlineIcon></PersonOutlineIcon></Link>
        <Link href="#" ><ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Link>
      </div>
    </nav>
  );
}