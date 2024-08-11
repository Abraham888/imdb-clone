import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className='flex gap-4 dark:bg-gray-500  bg-amber-600 p-4 justify-center max-w-6xl m-auto'>
        <NavbarItem title="Trending" param="fetchTrending"/>
        <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
