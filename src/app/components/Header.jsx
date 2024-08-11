import Link from 'next/link';
import React from 'react';
import Menuitem from './Menuitem';
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import DarkModeSwitch from './DarkModeSwitch';


export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto lg:text-lg'>
        <div className='flex gap-4'>
            <Menuitem address="/" Icon={AiFillHome} title="Home"/>
            <Menuitem address="/About/" Icon={BsFillInfoCircleFill} title="About"/>
        </div>
        <div className='flex items-center gap-4'>
        <DarkModeSwitch/>
        <Link href={'/'} className='flex gap-2 items-center'>
            <span className='text-2xl font-bold bg-amber-500 px-2 py-1 rounded '>IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
        </div>
        
    </div>
  )
}
