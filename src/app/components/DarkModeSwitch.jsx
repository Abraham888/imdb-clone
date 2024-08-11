"use client";
import { useTheme } from "next-themes";
import {MdLightMode, MdDarkMode} from 'react-icons/md';
//import { useState,useEffect } from "react";

export default function DarkModeSwitch() {
    const {theme,setTheme,systemTheme} = useTheme("light");
    //const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    //useEffect(() =>setMounted(true),[])
    
  return (
    <div>
       {currentTheme === 'dark' ? 
       (<MdDarkMode className=" text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('light')}/>)
       :( <MdLightMode className=" text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme('dark')}/>)} 
    </div>
  )
}
