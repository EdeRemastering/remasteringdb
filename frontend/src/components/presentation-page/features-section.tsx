import React from 'react'

export const FeaturesSection = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10 bg-blue-500'>
        <h1 className='text-5xl font-bold'>Powerful Features</h1>
        <div className="flex flex-col gap-10 w-[80vw]">
            <div className="flex flex-col gap-4">
                <p className='text-lg'>All you need to manage  your databases</p>
            </div>
        </div>
    </div>
  )
}
