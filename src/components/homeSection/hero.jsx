"use client"
import { useState } from 'react'
import styles from '@/styles/hero.module.css'
import Image from 'next/image'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
const data = [
    {
       src:'/img/sider3.jpg',
       alt:'slide-1',
       txt:"Reown Refurbished ",
       txt1:"Laptops & Mobile"
    },
    {
       src:'/img/sider4.jpg',
       alt:'slide-1',
        txt:"Reown Refurbished ",
        txt1:"Laptops & Mobile"
    },
    {
       src:'/img/sider5.jpg',
       alt:'slide-1',
        txt:"Reown Refurbished ",
        txt1:"Laptops & Mobile"
    }
]
const Hero = () => { 
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
      };
    
      const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
      };
   
  return (
    <>   
    <div className='container relative'> 
     
        {data.map((img, idx)=>{
             return(                    
                <div key={idx} className={`hero_content flex justify-center w-full h-[620px] bg-orange-400 relative ${slide === idx ? 'block':'hidden'}`}>
                   <Image src={img.src} fill  alt={`ima${idx}`} className={` object-cover `}/>
                   <h2>{img.txt}</h2>
                   <h3>{img.txt1}</h3>
                </div>
              )
            }) 
        } 
        </div>       
        <BsArrowLeftShort onClick={prevSlide} className='text-white'/>
        <BsArrowRightShort onClick={nextSlide} className='text-white'/>
        
        <div className={styles.indicater}>
            { data.map((_, idx)=>{
                  return(
                    <span key={idx} className={` ${styles.dotwrp} ${slide === idx ? 'active-dotted':''} `} onClick={() => setSlide(idx)}>
                    <span  className={` ${styles.doted} ${slide === idx ? 'bg-orange-500': 'bg-gray-500'}`}></span>
                    </span>
                  )

              })
            }
        </div>
      
        
   
   </>
  )
}

export default Hero