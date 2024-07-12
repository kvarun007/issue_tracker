import React from 'react'
import Link from "next/link"
import { FaBug } from "react-icons/fa";


const NavBar = () => {
  const links =[
    {label : "Dashboard", href : "/"},
    {label : "Issues", href : "/Issues"}
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"> <FaBug/> </Link>
      <ul className='flex space-x-6'>
        {links.map(items=>(<Link key={items.href} href={items.href}className='text-zinc-500 hover:text-zinc-800 transition-colors'>{items.label}</Link>))}
        
      </ul>
    </nav>
  )
}

export default NavBar
