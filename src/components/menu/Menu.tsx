'use client'

import { LayoutGrid, MoonStar, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

  const menu = [{title: 'Главная',icon: <LayoutGrid />, href: '/'},{title: 'Актеры',icon: <Users />, href: '/sas'},{title: 'MoonStar',icon: <MoonStar />, href: '/fd'},]

export const Menu = () => {
  const pathname = usePathname()

  return (
    <main style={{borderRight: `3px solid #1d1e23`,borderBottom: '3px solid #1d1e23'}} className=" h-[900px] sticky top-0 py-9 px-7 ">
      <h1 className="text-[34px] uppercase font-semibold text-[white]">Кинопоиск</h1>
      <ul className=' !text-[#929394] flex flex-col gap-9 py-7 text-[18px] font-medium'>
      <h1 className='cursor-pointer font-semibold text-[24px] mb-5'>Меню</h1>
    {menu.map(el => 
            <Link key={el.title} className={`${pathname === el?.href ? '!text-[#f5f5f5]' : '!text-[#929394]'}`} href={el.href}>
            <li className={`flex cursor-pointer items-center gap-3`}>
                  {el.icon}
                <h1 className={``}>{el.title}</h1>
              </li>
            </Link>
      )}
      </ul>
    </main>
  );
};
