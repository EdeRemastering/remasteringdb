import React from 'react'
import { Badge } from '../ui/badge'
import {User2} from 'lucide-react'

export const IndexSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10'>
        <Badge className='bg-blue-50 border border-blue-500 font-bold text-blue-500 px-4 py-2 rounded-full'><User2 /> Used by 1000+ developers</Badge>
        <div className="flex flex-col gap-10 w-[80vw]">
        <h1 className='text-center text-7xl font-bold'>Manage your databases visually with ease using 
            <span className='bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text'> Remastering</span><span>DB</span></h1>
        <p className='text-center text-2xl'>A modern and intuitive tool for visualizing, managing, and developing your databases without writing code. Perfect for developers and analysts.</p>
        </div>
        <div className='flex items-center gap-4'>
            <button className='bg-gradient-to-r from-blue-500 to-blue-700  font-bold text-white px-4 py-2 rounded-md'>Get Started</button>
            <button className='font-bold px-4 py-2 rounded-md border border-gray-400'>Demo</button>
        </div>
    </div>
  )
}
