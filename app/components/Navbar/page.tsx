'use client'

import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './MobileNav/page';
import SearchBar from './Searchbar/SearchBar';
// import NavIcons from './NavIcons/Navicons';
import NavLinks from './NavLinks/Navlinks';
import dynamic from 'next/dynamic';

const NavIcons = dynamic(() => import ("./NavIcons/Navicons"), {ssr: false})

const NavbarPage = () => {

  return (
    <nav className="shadow-md w-full top-0 fixed bg-white z-50">
      <div className="px-4 h-[12vh] xl:h-[16vh] md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <MobileNav />
        <div className="hidden md:flex items-center justify-between">
          <div className="w-1/3 lg:mt-2">
            <Link href="/">
              <Image
                src="/images/logo svg/logo.svg"
                alt="Logo"
                width={85}
                height={85}
              />
            </Link>
          </div>
          <div className="w-2/3 flex items-center justify-between gap-4">
            <SearchBar />
            <NavIcons />
          </div>
        </div>
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavbarPage;
