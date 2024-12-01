import Breadcrumd from '@/components/breadcrumd'
import '../../styles/myCart.scss'
import Image from 'next/image'
import { FaRupeeSign } from 'react-icons/fa'
import Link from 'next/link'
const data = [
    {
        url:'/img/3.jpg',
        name:'Apple mac book',
        price:45000
    },
    {
        url:'/img/4.jpg',
        name:'Hp',
        price:35000
    },
    {
        url:'/img/5.jpg',
        name:'Dell',
        price:40000
    },
]
const Cart = () => {
  return (
    <>
    <Breadcrumd pageName={'My Cart'} /> 
    <section className='cart'>
        <div className='container-fluid px-lg-5'>
            <div className='row'>
                <div className='col-md-9'>
                     <div className='heading'>
                        <p className='title'>My Cart</p>
                        <p>3 Items</p>
                     </div>
                     {data.map((el, i)=>{
                        return(
                            <div className='items' key={i}>
                            <div className='item'>
                                <div className='figure'>
                                    <Image src={el.url} width={150} height={100} className='img-fluid' alt="img"/>
                                </div>
                                <div className='content'>
                                    <p>{el.name}</p>
                                    <p className='price'><FaRupeeSign/>45000</p>
                                </div>
                            </div>
                            <div className='removeItem'>
                                <div>
                                    <span>+</span>
                                    <span>1</span>
                                    <span>-</span>
                                </div>
                                <p>Remove</p>
                            </div>
                            <div className='price'>
                                <p><FaRupeeSign/>{el.price}</p>
                            </div>
                         </div>
                        )
                     })}   
                     <div className='button_cart'>
                        <Link href={'/checkout'} className='btn btn-primary' type='button'>CONTINUE SHOPPING</Link>
                        <button className='btn btn-primary' type='button'>CLEAR CART</button>
                    </div>                  
                </div>
                <div className='col-md-3'>
                    <div className='shipping_card mb-4'>
                        <p>Shipping Info</p>
                        <div className='form-group mb-3'>
                            <label>Country</label>
                            <select className='form-select'>
                                <option value={"india"}>India</option>
                                <option value={"Nepal"}>Nepal</option>
                                <option value={"Us"}>Us</option>
                                <option value={"UK"}>Uk</option>                                
                            </select>
                        </div>
                        <div className='form-group mb-3'>
                            <label>State</label>
                            <select className='form-select'>
                                <option value={"india"}>India</option>
                                <option value={"Nepal"}>Nepal</option>
                                <option value={"Us"}>Us</option>
                                <option value={"UK"}>Uk</option>                                
                            </select>
                        </div>
                        <div className='form-group mb-3'>
                            <label>Postal Code</label>
                            <input type='text' className='form-control'/>
                        </div>
                        <div className='form-group mb-3 text-center'>
                            <button type='button' className='btn btn-primary'>CALCULATE</button>
                        </div>
                    </div>
                    <div className='shipping_card'>
                        <div className='total mb-3'>
                            <p className='title'>Total</p>
                            <p className='title'><FaRupeeSign/> 56000</p>
                        </div>
                        <div className='form-group mb-4'>
                            <input type='text' placeholder='Discount code' className='form-control'/>
                        </div>
                        <div className='form-group mb-3 text-center'>
                            <Link href={'/checkout'} className='btn btn-primary'>CHECKOUT</Link>
                        </div>
                        <div className='form-group mb-3 text-center'>
                            <Image src={'/img/secure-stripe-payment.png'} className='img-fluid'width={250} height={80} alt='pay'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>   
    </>
  )
}

export default Cart