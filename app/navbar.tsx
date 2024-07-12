"use client"
import React from 'react'
import Link from "next/link"
import { FaBug } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import classnames from 'classnames';


const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath)
  const links =[
    {label : "Dashboard", href : "/"},
    {label : "Issues", href : "/issues"}
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"> <FaBug/> </Link>
      <ul className='flex space-x-6'>
        {links.map(items=>(
          <Link 
            key={items.href} 
            href={items.href} 
            className={classnames({
              "text-zinc-900" : items.href === currentPath,
              "text-zinc-500" : items.href !== currentPath,
              "text-zinc-800 transition-colors" : true

            })}>
              {items.label}
          </Link>))}
        
      </ul>
    </nav>
  )
}

export default NavBar
