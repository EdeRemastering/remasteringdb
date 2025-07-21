import Link from 'next/link'
import React from 'react'

export const PresentationNavbar = () => {
  return (
    <div className='flex justify-around items-center bg-white w-full h-[60px] fixed top-0 z-50 shadow-md'>
        <div className="icon">
            <p className='font-bold'>
                <span className='bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text'>Remastering</span> 
            <span className='text-black'>DB</span></p>
        </div>
        <div className="flex items-center text-[15px] gap-4">
            <ul className='flex items-center gap-6'>
                <li>
                    <Link href="/">Features</Link>
                </li>
                <li>
                    <Link href="/">Demo</Link>
                </li>
                <li>
                    <Link href="/">Pricing</Link>
                </li>
                <li>
                    <Link href="/">Docs</Link>
                </li>
                <li>
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="buttons flex items-center gap-4">
            <button className='font-bold'>Login</button>
            <button className='font-bold bg-gradient-to-r from-blue-400 to-blue-800  text-white px-4 py-2 rounded-md'>Start for free</button>
        </div>
    </div>
  )
}
