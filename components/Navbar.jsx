// components/Navbar.js
'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Menu, MenuButton, MenuItems, MenuItem, MenuSeparator, MenuSection, MenuHeading } from '@headlessui/react';

export default function Navbar() {
  const profileMenus = {
    'Profile': '/profile',
    'Settings': '/settings',
    'Sign out': '/sign-out'
  };
  // const person
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
        <div className="flex justify-end space-x-4">
          <Link href="/theme">Theme</Link>
          <Link href="/books" className='hidden'>Books</Link>
          <Link href="/reviews" className='hidden'>Reviews</Link>
          <Link href="/popover" >Popover</Link>
          <Link href="/navbar" >ReactNavbar</Link>
          <Link href="/headless-ui" className='hidden'>HeadlessUI</Link>
        </div>
      </div>
      <div className="hidden sm:block md:hidden flex-1">
        <div className="flex justify-end space-x-4">
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
        <div className="flex justify-end space-x-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/collections">Collections</Link>
          <Link href="/about">AboutUs</Link>
          <Link href="/provider">Provider</Link>
          <Link href="/mui" >Mui</Link>
          <Link href="/theme">Theme</Link>
          <Link href="/books" className='hidden'>Books</Link>
          <Link href="/reviews" className='hidden'>Reviews</Link>
          <Link href="/popover" >Popover</Link>
          <Link href="/navbar" >ReactNavbar</Link>
          <Link href="/headless-ui" >HeadlessUI</Link>
        </div>
      </div>
      <div className="block flex-none ml-2">
        <Link href="#" ><SearchIcon></SearchIcon></Link>
        {/*<Link href="#" ><PersonOutlineIcon></PersonOutlineIcon></Link>*/}
        <Menu>
          <MenuButton className="data-[active]:bg-blue-500"><PersonOutlineIcon></PersonOutlineIcon></MenuButton>
          <MenuItems anchor="bottom" className="bg-white">
            <MenuSection>
              <MenuHeading className="text-sm opacity-50">Settings</MenuHeading>
              <MenuItem>
                <a className="block data-[focus]:bg-blue-100" href="/profile">
                  My profile
                </a>
              </MenuItem>
              <MenuItem>
                <a className="block data-[focus]:bg-blue-100" href="/notifications">
                  Notifications
                </a>
              </MenuItem>
            </MenuSection>
          </MenuItems>
        </Menu>
        <Link href="#" ><ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Link>
      </div>
    </nav>
  );
}