"use client";

import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link 
          href="/" 
          className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm block ${
            pathname === '/' 
              ? 'bg-[#8bf500]/10 text-[#8bf500] font-semibold' 
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link 
          href="/my-plan" 
          className={`px-5 py-2 rounded-full font-medium transition-all duration-200 text-sm block ${
            pathname === '/my-plan'
              ? 'bg-[#8bf500]/10 text-[#8bf500] font-semibold' 
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#0b0c0e] border-b border-zinc-800/60 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="dropdown lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost p-1 text-zinc-300 min-h-0 h-auto hover:bg-transparent">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-[#121417] text-white rounded-xl z-50 mt-3 w-52 p-2 shadow-xl border border-zinc-800 gap-1">
                {links}
              </ul>
            </div>
            
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image src={logo} alt="FITLOG Logo" priority className="w-8 h-8 object-contain" />
              <span className="text-white font-bold tracking-wider text-lg uppercase">FITLOG</span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden lg:flex items-center justify-center">
            <ul className="flex items-center gap-1">
              {links}
            </ul>
          </div>

          {/* Right Section: Plan & Saved Badges */}
          <div className="flex items-center gap-5 text-sm font-medium shrink-0">
            <div className="flex items-center gap-2 text-zinc-300">
              <span>Plan</span>
              <span className="w-6 h-6 rounded-full bg-[#8bf500] text-black font-bold text-xs flex items-center justify-center">
                0
              </span>
            </div>

            <div className="flex items-center gap-2 text-zinc-300">
              <span>Saved</span>
              <span className="w-6 h-6 rounded-full border border-zinc-700 text-zinc-400 font-bold text-xs flex items-center justify-center">
                0
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;