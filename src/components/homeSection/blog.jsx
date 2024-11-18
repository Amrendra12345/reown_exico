import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const Blog = () => {
  return (
    <div className='container mt-[80px]'>
        <div className='w-full justify-center mb-12'>
                <h2 className='heading blog_heading'>Blog & events</h2>
        </div>
        <div className='flex justify-center items-center gap-10'>
            <div className='flex-1 bg-gray-50 blogImg'>
                <Image src={'/img/blog1.jpg'} width={400} height={300} alt='blog1'/>
                <h2 className='text-[16px] font-semibold text-gray-600 mt-2'>Aenean commodo ligula eget dolor</h2>
                <p className='flex justify-start gap-8 items-center text-sm text-gray-400'><span>18 Nov 2024</span> <span>Andrew Johns</span></p>
            </div>
            <div className='flex-1 bg-gray-50 blogImg'>
                <Image src={'/img/blog4.jpg'} width={400} height={300} alt='blog1'/>
                <h2 className='text-[16px] font-semibold text-gray-600 mt-2'>Aenean commodo ligula eget dolor</h2>
                <p className='flex justify-start gap-8 items-center text-sm text-gray-400'><span>18 Nov 2024</span> <span>Andrew Johns</span></p>
            </div>
            <div className='flex-1 bg-gray-50 blogImg '>
                <Image src={'/img/blog3.jpg'} width={400} height={300} alt='blog1'/>
                <h2 className='text-[16px] font-semibold text-gray-600 mt-2'>Aenean commodo ligula eget dolor</h2>
                <p className='flex justify-start gap-8 items-center text-sm text-gray-400'><span>18 Nov 2024</span> <span>Andrew Johns</span></p>
            </div>
            <div className='flex-1 bg-gray-50 blogImg'>
                <Image src={'/img/blog2.jpg'} width={400} height={300} alt='blog1'/>
                <h2 className='text-[16px] font-semibold text-gray-600 mt-2'>Aenean commodo ligula eget dolor</h2>
                <p className='flex justify-start gap-8 items-center text-sm text-gray-400'><span>18 Nov 2024</span> <span>Andrew Johns</span></p>
            </div>
        </div>
        <div className='flex justify-center items-center mt-12'>
            <Button className="px-6 rounded-full uppercase"> View All</Button>
        </div>
        <div className='w-full justify-center mt-16'>
                <h2 className='heading blog_logo'>Brand logo</h2>
        </div>
        <div className='flex justify-between items-center flex-wrap gap-10 blog_logoImage'>
            <Image src={'/img/home4-brand-logo2.png'} width={120} height={120} alt='logo'/>
            <Image src={'/img/home4-brand-logo3.png'} width={120} height={120} alt='logo'/>
            <Image src={'/img/home4-brand-logo4.png'} width={120} height={120} alt='logo'/>
            <Image src={'/img/home4-brand-logo5.png'} width={120} height={120} alt='logo'/>
            <Image src={'/img/home4-brand-logo1.png'} width={120} height={120} alt='logo'/>
            <Image src={'/img/home4-brand-logo7.png'} width={120} height={120} alt='logo'/>
        </div>
    </div>
  )
}

export default Blog