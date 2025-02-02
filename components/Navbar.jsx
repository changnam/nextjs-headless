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

  return (
    <nav className="flex items-center justify-between bg-[#333] p-4 text-white">
      <div className='flex-none'>
      <Link href="/" className="hidden md:block">
        <Image 
          className="w-[100px]" src="/blackmotiv.svg" alt="Logo" width={100} height={50} priority>
        </Image>
      </Link>
      <Link href="#" className="block sm:hidden">
      <Image
          className="invert w-[50px]"
          src="/hamburger-md-svgrepo-com.svg"
          alt="Hamburger menu"
          width={50}
          height={38}
          priority
        />
        </Link>
        <Link href="#" className="hidden sm:block md:hidden">
      <Image
          className="invert w-[50px]"
          src="/hamburger-md-svgrepo-com.svg"
          alt="Hamburger menu"
          width={50}
          height={38}
          priority
        />
        </Link>
        </div>
      <div className="block sm:hidden flex-1">
        <div className="flex justify-end space-x-1">
          <Link href="/theme">Theme</Link>
          <Link href="/books" className='hidden'>Books</Link>
          <Link href="/reviews" className='hidden'>Reviews</Link>
          <Link href="/popover" >Popover</Link>
          <Link href="/navbar" >ReactNavbar</Link>
          <Link href="/headless-ui" className='hidden'>HeadlessUI</Link>
        </div>
      </div>
      <div className="hidden sm:block md:hidden flex-1">
        <div className="flex justify-end space-x-1">
          <Link href="/about">AboutUs</Link>
          <Link href="/provider">Provider</Link>
          <Link href="/mui" className='hidden'>Mui</Link>
          <Link href="/theme">Theme</Link>
          <Link href="/books" className='hidden'>Books</Link>
          <Link href="/reviews" className='hidden'>Reviews</Link>
          <Link href="/popover" >Popover</Link>
          <Link href="/navbar" >ReactNavbar</Link>
          <Link href="/headless-ui" className='hidden'>HeadlessUI</Link>
        </div>
      </div>
      <div className="hidden md:block flex-1 {/* bg-red-500*/}">
        <div className="flex justify-end space-x-1">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">AboutUs</Link>
          <Link href="/provider">Provider</Link>
          <Link href="/mui" className='hidden'>Mui</Link>
          <Link href="/theme">Theme</Link>
          <Link href="/books" className='hidden'>Books</Link>
          <Link href="/reviews" className='hidden'>Reviews</Link>
          <Link href="/popover" >Popover</Link>
          <Link href="/navbar" >ReactNavbar</Link>
          <Link href="/headless-ui" className='hidden'>HeadlessUI</Link>
        </div>
      </div>
      <div className="block flex-none ml-2">
        <Link href="#" ><SearchIcon></SearchIcon></Link>
        <Link href="#" ><PersonOutlineIcon></PersonOutlineIcon></Link>
        <Link href="#" ><ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Link>
      </div>
    </nav>
  );
}