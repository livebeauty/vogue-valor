import Link from 'next/link';
import React from 'react';
import SalePage from './Sale/SalePage';
import WomenPage from './Women/page';
import MenPage from './Men/page';
import CollectionCategory from './Collection-category/page';

const NavLinks = () => {
  return (
    <div className="hidden md:block w-full">
      <ul className="flex items-center justify-center  space-x-8 relative">
        <li><SalePage /></li>
        <li><WomenPage/></li>
        <li><MenPage/></li>
        <li><CollectionCategory/></li>
      </ul>
    </div>
  );
};

export default NavLinks;
