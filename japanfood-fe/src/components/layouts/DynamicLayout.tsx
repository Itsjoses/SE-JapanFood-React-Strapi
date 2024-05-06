import React from 'react'
interface children {
  border: boolean,
  children: React.ReactNode
}

export default function DynamicLayout({border,children}: children) {
  return (
    <div className={`max-w-screen ${border ? `border-b border-[#e1d5d5]` : ``} flex overflow-hidden`}>
      <div className='w-full px-4 sm:px-0 flex justify-center'>

      <div className='w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] overflow-hidden'>
        {children}
      </div>
      </div>
    </div>
  )
}
