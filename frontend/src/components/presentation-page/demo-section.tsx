import React from 'react'

export const DemoSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10 bg-green-500'>
        <h1 className='text-7xl font-bold'>Demo</h1>
        <div className="flex flex-col gap-10 w-[80vw]">
            <div className="flex flex-col gap-4">
                <h2 className='text-4xl font-bold'>Demo</h2>
                <p className='text-2xl'>A modern and intuitive tool for visualizing, managing, and developing your databases without writing code. Perfect for developers and analysts.</p>
            </div>
        </div>
    </div>
  )
}
