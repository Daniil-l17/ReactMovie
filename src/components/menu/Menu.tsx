'use client'

import { LayoutGrid, MoonStar, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

  const menu = [{title: 'Главная',icon: <LayoutGrid />, href: '/'},{title: 'Актеры',icon: <Users />, href: '/'},{title: 'MoonStar',icon: <MoonStar />, href: '/'},]

export const Menu = () => {
  const pathname = usePathname()
  return (
    <main style={{borderRight: `3px solid #1d1e23`}} className=" py-9 px-7 ">
      <h1 className="text-[34px] uppercase font-semibold text-[white]">Кинопоиск</h1>
      <ul className=' text-[#a6a3a3] flex flex-col gap-9 py-7 text-[18px] font-medium'>
      <h1 className='cursor-pointer font-semibold text-[24px] mb-5'>Меню</h1>
    {menu.map(el => 
            <Link key={el.title} className='text-[#a6a3a3]' href={el.href}>
            <li className={`flex ${pathname === el.href && 'text-[#ffffff]'} cursor-pointer items-center gap-3`}>
                {el.icon}
                <h1 className=''>{el.title}</h1>
              </li>
            </Link>
      )}
      </ul>
    </main>
  );
};
