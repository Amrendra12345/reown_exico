'use client'
import Breadcrumd from '@/components/breadcrumd'
import '../../styles/productList.scss'
import { useState } from 'react'
import Image from 'next/image'
import { FaRupeeSign, FaStar } from 'react-icons/fa'
import Link from 'next/link'
const src = '/img/10.jpg'

const data = [
    {
      url:'/img/5.jpg',
      alt:"img"
     },
     {
         url:'/img/apple.png',
         alt:"img"
      },
      {
         url:'/img/3.jpg',
         alt:"img"
      },
      {
         url:'/img/4.jpg',
         alt:"img"
      }
     
 ]
const ProductList = () => {
    const [position, setPosition] = useState('0% 0%');
   const [imgUrl, setImgUrl] = useState(src);
    const handleMouseMove = (e)=>{
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setPosition(`${x}% ${y}%`)        
    }
    const onMouseEnter = ()=>{
        setImgUrl(src)
    }
   const onMouseLeave =()=>{
    setImgUrl('')
    }
    console.log(position)
  return (
     <>
     <Breadcrumd pageName={'Product list'}/>
     
     <section className='productl-list'>
         <div className='container-fluid px-lg-5'>
             <div className='row'>
                <div className='col-md-4'>
                    <div className='figure' onMouseMove={handleMouseMove} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{backgroundPosition: position, backgroundImage:`url(${imgUrl})`}}>
                       <Image src={src}  width={300} height={250} className='img-fluid' alt='img' />
                 </div>
                 <div className='small-img'>
                    {data.map((el, i)=>{
                        return(
                            <div className='imgSmall' key={i}>
                               <Image src={el.url} alt={el.alt} width={100} height={100} className='img-fluid'/>
                            </div>
                        )
                    })}
                     
                </div>                    
                </div>
                <div className='col-md-8'>
                   <div className='wrapper'>
                       <div className='reviews_star'>
                          <div className='star'>
                           <FaStar/>
                           <FaStar/>
                           <FaStar/>
                           <FaStar/>
                           <FaStar/>                          
                           </div>
                           <div className='reviews'>
                             <p>4 Reviews </p>  
                           </div>
                       </div>
                       <div className='model'>
                          <p>Apple MacBook Air | 8GB | 128GB </p>
                       </div>
                       <div className='prices'>
                           <p><FaRupeeSign/>45000 </p>
                           <del>60000</del>
                           <p>-16%</p>
                       </div>
                       
                       <p className='availabity'><span>Availability</span>: In stock</p>
                       <div className='quantity'>
                         <p>Quantity</p>
                         <div className='additions'>
                            <span> + </span>
                            <span> 1 </span>
                            <span> - </span>
                         </div>
                       </div>

                        <div className='buttons'>
                            <Link href={'/cart'} className='btn btn-primary'>Add to cart</Link>
                            <Link href={'/checkout'} className='btn btn-success'>BUY NOW</Link>
                        </div>
                        
                   </div>
                </div>
             </div>
         </div>
     </section>
     </>
  )
}

export default ProductList