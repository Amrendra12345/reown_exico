"use client"
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/slider.scss'
import Image from 'next/image';
import Link from 'next/link';
 
const Hero = () => {
    const data = [
        { src: '/img/sider3.jpg',
           alt:'slide-1',          
        },
        {
           src:'/img/sider6.jpg',
           alt:'slide-1',          
        },
        {
           src:'/img/sider7.jpg',
           alt:'slide-1',           
        }
    ]




  return (
    <div className='container-fluid px-lg-5 mt-2'>
         <Carousel className={'slide'}>
            { data.map((el, i)=>{
                return(
            <Carousel.Item interval={12000} key={i}>
                <Image src={el.src} width={960} height={400} alt='slide-1'  style={{
                    width: '100%',
                    height: 'auto',
                    }}/>
                  <Carousel.Caption className="caption">   
                    <div className="captions_content">                
                      <h1> Reown Refurbished</h1>
                      <h2>Laptops & Mobile  </h2>
                  </div> 
                  <Link href={'/product'} className='btn btn-danger'>Shop Now</Link>
                  </Carousel.Caption>
            </Carousel.Item>
               )})}
         </Carousel>
    </div>
  )
}

export default Hero