import Link from 'next/link';
import React from 'react';
import MenuCard from './Menu/Menu';
import Image from 'next/image';

const MobileNav = () => {
  return (
    // Small screen logo
    <div className='md:hidden lg:hidden xl:hidden 2xl:hidden flex items-center justify-between w-full py-5'>
      <Link href="/">
        <div className="w-10 h-auto"> {/* Adjust width and keep height auto */}
          <Image
            src="/images/logo svg/logo.svg"
            alt="Logo"
            width={50}  
            height={50} 
            style={{ objectFit: 'contain' }} // Use style to set objectFit
            className="w-auto h-auto"
          />
        </div>
      </Link>
      <MenuCard />
    </div>
  );
};

export default MobileNav;
