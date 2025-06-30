import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-[8vh] bg-purple-700 flex justify-between px-3 md:px-6 items-center text-white'>
      <div className="logo font-bold text-xl md:text-2xl"> 
        <Link href="/">linkShortener</Link>
      </div>
      <ul className='flex justify-center gap-3 md:gap-4 items-center'>
        <Link href="/"><li className='text-sm md:text-base'>Home</li></Link>
        <Link href="/shorten"><li className='text-sm md:text-base'>Shorten</li></Link>
        <li className='flex gap-2 md:gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-20 py-1 font-bold text-white'>Try Now</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar