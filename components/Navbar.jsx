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
    <nav className="flex items-center justify-between ">
      <div>
      <Link href="/" className="hidden md:block">
        <Image 
          className="w-[100px]" src="/blackmotiv.svg" alt="Logo" width={100} height={50} priority>
        </Image>
      </Link>
      <Link href="#" className="block sm:hidden">
      <Image
          className="w-[50px]"
          src="/hamburger-md-svgrepo-com.svg"
          alt="Hamburger menu"
          width={50}
          height={38}
          priority
        />
        </Link>
        <Link href="#" className="hidden sm:block md:hidden">
      <Image
          className="w-[50px]"
          src="/hamburger-md-svgrepo-com.svg"
          alt="Hamburger menu"
          width={50}
          height={38}
          priority
        />
        </Link>
        </div>
        <div className="block sm:hidden ">
        <Link href="/popover" >Popover</Link>
        <Link href="/navbar" >ReactNavbar</Link>
        <Link href="/headless-ui" >HeadlessUI</Link>
      </div>
      <div className="hidden sm:block md:hidden">
        <Link href="/provider">Provider</Link>
        <Link href="/mui">Mui</Link>
        <Link href="/theme">Theme</Link>
        <Link href="/popover" >Popover</Link>
        <Link href="/navbar" >ReactNavbar</Link>
        <Link href="/headless-ui" >HeadlessUI</Link>
      </div>
      <div className="hidden md:block ">
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
      </div>
      <div className="block ">
        <Link href="#" ><SearchIcon></SearchIcon></Link>
        <Link href="#" ><PersonOutlineIcon></PersonOutlineIcon></Link>
        <Link href="#" ><ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Link>
      </div>
    </nav>
  );
}