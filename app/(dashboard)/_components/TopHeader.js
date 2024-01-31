import { UserButton } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopHeader() {
  return (
    <div className='flex p-6 border-b items-center justify-between md:justify-end'>
        <AlignJustify className='md:hidden'/>
        {/* <Image src='/logo.svg' width={150} height={100} alt='logo'
        className='hidden md:block'
        /> */}
        <UserButton/>
    </div>
  )
}

export default TopHeader