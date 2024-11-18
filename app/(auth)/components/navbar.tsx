import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white text-black w-full h-auto p-0'>
        <Image
        src="/logo.png"
        width={200}
        height={200}
        alt='Redytable'
        className=''
        />
    </div>
  )
}

export default Navbar