import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='w-full bg-white border-b py-4'>
        <div className='container'>
            <div className='flex justify-between items-center'>
                <Link href={'/'}>
                   <Image src={'/img/recycledevice.svg'} width={100} height={30} 
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    style={{ width: '50%', height: 'auto' }} alt='recycledevice logo' />
                </Link>
                <ul className='flex gap-4 items-center'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Shop</Link>
                    <Link href={'/'}>Collection</Link>
                    <Link href={'/'}>Blog</Link>
                </ul>
                <ul className='flex justify-end items-center gap-4'>
                    <FaRegUserCircle/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar