import Link from 'next/link';
import React from 'react';
import Menuitem from './Menuitem';
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';


export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <Menuitem address="/" Icon={AiFillHome} title="Home"/>
            <Menuitem address="/about/" Icon={BsFillInfoCircleFill} title="About"/>
        </div>
        <Link href={'/'} className='flex gap-2 items-center'>
            <span className='text-2xl font-bold bg-amber-500 px-2 py-1 rounded '>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
    </div>
  )
}
