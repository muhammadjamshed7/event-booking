
'use client'
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const links=[
  {
    title:'Home',
    url:'/'
  },
  {
    title:'Book Events',
    url:'/booked-event'
  },
  {
    title:'New Booking',
    url:'/new-event'
  },
]
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between p-6 flex-wrap gap-4 ">
      <div className="font-bold hidden md:block">Event Booking and Creation</div>
      <nav>
        <ul className="flex justify-center item-center gap-4 flex-wrap">
        {links.map((link) => (
          <Link className={`${pathname===link.url ? "font-bold opacity-100":"font-normal opacity-50"} transition
            }`} href={link.url}> {link.title} </Link>

          
        ))}

        </ul>
      </nav>
      <div className=" font-bold hidden md:block">Welcome</div>
    </header>
  );
};

export default Header;
