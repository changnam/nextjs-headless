// components/Navbar.js
'use client'; 
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { Menu, MenuButton, MenuItems, MenuItem, MenuSeparator, MenuSection, MenuHeading } from '@headlessui/react';
import { useGlobalContext } from './GlobalContextProvider';

export default function Navbar() {
  const profileMenus = {
    'Profile': '/profile',
    'Settings': '/settings',
    'Sign out': '/sign-out'
  };

  const { globalContext, incrementCounter, decrementCounter } = useGlobalContext();
  const handleCartClick = () => {};

  // const person
  return (
    <nav className="relative flex w-full justify-between bg-gray-100 p-4">
      <div className='flex-none flex-start border border-red-500'>
        <Link href="#" className="block lg:hidden">
          <Image
              className="w-[30px]"
              src="/hamburger-md-svgrepo-com.svg"
              alt="Hamburger menu"
              width={50}
              height={38}
              priority
            />
        </Link>
        <Link href="/" className="hidden lg:block">
          <Image 
            className="w-[100px]" src="/blackmotiv.svg" alt="Logo" width={100} height={50} priority>
          </Image>
        </Link>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-1 border border-red-500 lg:hidden" >
        <Link href="/" className="text-center">
          <Image 
            className="w-[100px]" src="/blackmotiv.svg" alt="Logo" width={100} height={50} priority>
          </Image>
        </Link>
      </div>
      <div className="hidden lg:block flex-1 {/* bg-red-500*/}">
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
          <Link href="/headless-ui" className="hidden">HeadlessUI</Link>
          <Link href="/hello">hello</Link>
        </div>
      </div>
      <div className="flex flex-none flex-end md:hidden border border-red-900 space-x-2">
        <Link href="#" className="{/*border border-yellow-900*/}"><SearchIcon></SearchIcon></Link>
        <div>
          <button className="relative" onClick={() => handleCartClick()}>
            {/*<Image src="./cart.svg" width={40} height={40} alt="shopping cart icon" />*/}
            <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
            {globalContext.total > 0 && (<div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-5 h-5 -bottom-1 -right-2">
              {globalContext.total}
            </div>)}
          </button>
        </div>
      </div>
      <div className="hidden md:flex flex-none flex-end ml-2 border border-red-900 space-x-2">
        <Link href="#" className="border border-yellow-900"><SearchIcon></SearchIcon></Link>
        {/*<Link href="#" ><PersonOutlineIcon></PersonOutlineIcon></Link>*/}
        <Menu as="div" className="border border-green-900">
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
        {/*<Link href="#" ><ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Link>*/}
        <div>
          <button className="relative" onClick={() => handleCartClick()}>
            {/*<Image src="./cart.svg" width={40} height={40} alt="shopping cart icon" />*/}
            <ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon>
            {globalContext.total > 0 && (<div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-5 h-5 -bottom-1 -right-2">
              {globalContext.total}
            </div>)}
          </button>
        </div>
      </div>
    </nav>
  );
}