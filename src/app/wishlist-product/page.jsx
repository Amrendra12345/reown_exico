import Link from 'next/link'
import '../../styles/wishlist.scss'
import Image from 'next/image'
import { FaHeart, FaRupeeSign } from 'react-icons/fa'
import Breadcrumd from '@/components/breadcrumd'
const data = [    
     {
         url:'/img/apple.png',
         alt:"img",
         offPrice:60000,
         price:34000
      },
      {
         url:'/img/3.jpg',
         alt:"img",
         offPrice:50000,
         price:30000
      },
      {
         url:'/img/4.jpg',
         alt:"img",
         offPrice:45000,
         price:24000
      },
      {
         url:'/img/5.jpg',
         alt:"img",
         offPrice:50000,
         price:34000
      },
     
 ]
const WishlistProduct = () => {
  return (
    <>
    <Breadcrumd pageName ={'Wishlist'} />
    <div className='container-fluid px-lg-5 my-5'>
        <div className='bg-lights p-4'>
         <div className='row'>
            <div className='col'>
                <div className='heading'>
                 <p>  My wishlist:</p>
                 <p>5 Item</p>
                </div>                
            </div>
        </div>
        {data.map((el, i)=>{
              return(
                <div className='row' key={i}>
                <div className='col'>
                    <div className='items'>
                        <div className='item_item'>
                            <Image src={el.url}  width={300} height={300} style={{width:'30%', height:'auto'}} alt={el.alt}/>
                        </div>
                        <divad className='item_addcart'>
                            <button type='button' className='btn btn-link-dark'>Add to Cart</button>
                            <button type='button' className='btn btn-link-dark'> Buy Now</button>
                        </divad>
                        <div className='item_price'>
                            <p><FaRupeeSign/> {el.price} <del>{el.offPrice}</del></p>
                           <p className='text-center'>  <FaHeart/> </p>
                        </div>
                    </div>
                </div>
             </div>
              )
        })}
        
        <div className='row'>
            <div className='col '>
                <div className='heading py-4'>
                   <button type='button' className='btn btn-primary'>CONTUNUE SHOPPING</button>
                   <button type='button' className='btn btn-primary'>CLEAR WISHLIST</button>
                </div>                
            </div>
        </div>
         </div>
    </div>
   </>
  )
}

export default WishlistProduct