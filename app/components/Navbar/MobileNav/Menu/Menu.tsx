'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import WomenMobCollection from './WomenMobCollection/WomenMobCollection';
import ManMobCollection from './ManMobCollection/ManMobCollection';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import TopSection from './WomenMobCollection/WomanSection/TopSection';
import BottomSection from './WomenMobCollection/WomanSection/BottomSection';
import EthnicSection from './WomenMobCollection/WomanSection/EthnicSection';
import DressJumpSection from './WomenMobCollection/WomanSection/Dress&JumpSection';
import ActivewearSection from './WomenMobCollection/WomanSection/ActivewearSection';
import OuterwearSection from './WomenMobCollection/WomanSection/OuterwearSection';
import TopSections from './ManMobCollection/ManSection/TopSection';
import BottomMenSections from './ManMobCollection/ManSection/BottomSection';
import Outerwears from './ManMobCollection/ManSection/Outerwears';
import Activewears from './ManMobCollection/ManSection/Activewears';

const MenuCard = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleBar = () => {
    setOpen(!open);
    setActiveSection(null);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navigateToSection = (section: string) => {
    setActiveSection(section);
  };

  const goBack = () => {
    setActiveSection(null);
  };

  return (
    <div className='md:hidden'>
      <button onClick={toggleBar} className="text-gray-800 focus:outline-none relative">
        {open ? (
          <IoClose className='w-10 h-10' />
        ) : (
          <IoMenu className='w-8 h-8' />
        )}
      </button>

      <div className={`flex flex-col items-start md:flex md:flex-row absolute bg-white text-black left-0 
        top-0 w-[85%] min-h-screen p-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ease-in-out duration-500 transition-transform z-10 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {activeSection ? (
          <div className={`w-full transition-transform ease-in-out duration-500 ${activeSection ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='w-full border-b-slate-400 border-b-2'>
              <button onClick={goBack} className="text-gray-800 focus:outline-none flex items-center mb-4">
                <GoArrowLeft className='w-6 h-6 font-bold' />
                <span className="ml-2 font-bold">{activeSection}</span>
              </button>
            </div>
            {activeSection === 'Woman' && <WomenMobCollection navigateToSection={navigateToSection}/>}
            {activeSection === 'Top' && <TopSection />}
            {activeSection === 'Bottom' && <BottomSection />}
            {activeSection === 'Ethnic wear' && <EthnicSection />}
            {activeSection === 'Dresses & Jumpsuits' && <DressJumpSection />}
            {activeSection === 'Activewear' && <ActivewearSection />}
            {activeSection === 'Outerwear' && <OuterwearSection />}
            

            {activeSection === 'Men' && <ManMobCollection navigateToSection={navigateToSection} />}
            {activeSection === 'Top-men' && <TopSections />}
            {activeSection === 'Bottom-men' && <BottomMenSections />}
            {activeSection === 'Outerwear-men' && <Outerwears />}
            {activeSection === 'Activewear-men' && <Activewears />}

          </div>
        ) : (
          <div className="w-full">
            <div className="w-full flex justify-between items-center mb-4">
              <Link href="/sale" className="text-red-500 font-bold text-xl">Sale</Link>
              <button onClick={toggleDropdown} className="text-gray-800 focus:outline-none">
                {isDropdownOpen ? (
                  <IoMdArrowDropup className='w-8 h-8' />
                ) : (
                  <IoMdArrowDropdown className='w-8 h-8' />
                )}
              </button>
            </div>
            {isDropdownOpen && (
              <div className="w-full">
                <ul className='flex flex-col gap-4'>
                  <li><Link href="" className='mb-5 hover:underline hover:text-red-500 hover:font-semibold'>Sale on woman fashion</Link></li>
                  <li><Link href="" className=' hover:underline hover:text-red-500 hover:font-semibold'>Exciting sale man fashion</Link></li>
                </ul>
              </div>
            )}
            <div className="w-full flex justify-between items-center mt-4">
              <div className="flex items-center">
                <Image
                  src="/images/Navbar image/Dress logo/women section/woman-profile.png"
                  alt="Women"
                  width={40}
                  height={40}
                  className="rounded-full"
                  style={{ height: 'auto', width: 'auto' }} 
                />
                <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Woman</Link>
              </div>
              <button onClick={() => navigateToSection('Woman')} className="text-gray-800 focus:outline-none">
                <GoArrowRight className='w-7 h-7' />
              </button>
            </div>

            <div className="w-full flex justify-between items-center mt-4">
              <div className="flex items-center">
                <Image
                  src="/images/Navbar image/Dress logo/men section/man-profile.png"
                  alt="Men"
                  width={40}
                  height={40}
                  className="rounded-full"
                  style={{ height: 'auto', width: 'auto' }} 
                />
                <Link href="#" className="ml-2 text-gray-800 font-bold text-xl">Men</Link>
              </div>
              <button onClick={() => navigateToSection('Men')} className="text-gray-800 focus:outline-none">
                <GoArrowRight className='w-7 h-7' />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
