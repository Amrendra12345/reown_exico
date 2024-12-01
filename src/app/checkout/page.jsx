import Breadcrumd from '@/components/breadcrumd'
import '../../styles/checkout.scss'
import Image from 'next/image'
import { FaRupeeSign } from 'react-icons/fa'
const data = [
    {
        url:"/img/apple.jpg",
        name:'Apple Mac Book',
        procode:"CA70051541B",
        price:30000
    },
    {
        url:"/img/3.jpg",
        name:'HP Pavilion',
        procode:"CA70051541B",
        price:30000
    }
]
const Checkout = () => {
  return (
    <>
      <Breadcrumd pageName= {'checkout'} />
      <div className='checkout'>
         <div className='container-fluid px-lg-5'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='border p-4 rounded'>
                         <p className='title'>Billing details</p>
                         <div className='row mb-3'>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>First Name</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>Last Name</label>
                                <input type='text' className='form-control' />
                            </div>
                         </div>
                         <div className='row mb-3'>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>Company name (Optional)</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>Country</label>
                                <input type='text' className='form-control' />
                            </div>
                         </div>
                         <div className='row mb-3'>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>Street address</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>Apartment,suite,unit etc. (Optional)</label>
                                <input type='text' className='form-control' />
                            </div>
                         </div>
                         <div className='row mb-3'>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>Town / City</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='fname'> State / Country</label>
                                <input type='text' className='form-control' />
                            </div>
                         </div>
                         <div className='row mb-3'>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>Town / City</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='fname'> Postcode / Zip</label>
                                <input type='text' className='form-control' />
                            </div>
                         </div>
                         <div className='row mb-3'>
                            <div className='col-md-6'>
                                <label htmlFor='fname'>TEmail address</label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='fname'> Phone number</label>
                                <input type='text' className='form-control' />
                            </div>
                         </div>
                         <hr />
                         <p className='title'>Shipping details</p>
                         <div className='row mb-3'>
                            <div className='col'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Ship to a different address?
                                </label>
                                </div>
                            </div>
                         </div>
                         <div className='row'>
                            <div className='col'>
                                <label>Order notes(Optional)</label>
                                <textarea rows="4" className='form-control'></textarea>
                            </div>
                         </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card'>
                        <div className='card-header'>
                        <p className='title mb-0'>In your cart (2) </p>
                        </div>
                        <div className='card-body'>
                            {data.map((el, i)=>{
                                return(
                                    <>
                                    <div className='d-flex gap-4 mb-3' key={i}>
                                    <div className='figure'>
                                        <Image src={el.url} width={300} height={275} className='img-fluid' alt='img'/>
                                    </div>
                                    <div className='content'>
                                        <p>{el.name}</p>
                                        <p>  Product code: {el.procode} </p>
                                        <p className='price'> <FaRupeeSign/>{el.price}</p>
                                    </div>
                                </div>
                                <hr />
                                </>
                                )
                            })}                            
                        </div>
                        <div className='card-header border'>
                            <p className='title mb-0'>Your order) </p>
                        </div>
                        <div className='card-body'>
                            <div className='order_item'>
                                <p>Product:</p>
                                <p className='title'>Total</p>
                            </div>
                            <div className='order_item py-3'>
                                <p>Apple Mac Book</p>
                                <p><FaRupeeSign/> 50000.00</p>
                            </div>
                            <div className='order_item py-3'>
                                <p> Dell latitude</p>
                                <p><FaRupeeSign/> 45000.00</p>
                            </div>
                            <div className='order_item py-3'>
                                <p> Subtotal</p>
                                <p><FaRupeeSign/> 95000.00</p>
                            </div>
                            <div className='order_item py-3'>
                                <p> Shipping Charge</p>
                                <p> Free shipping</p>
                            </div>
                            <div className='order_item py-3'>
                                <p className='title'> Total</p>
                                <p className='title'><FaRupeeSign/> 95000.00</p>
                            </div>
                            <div className='pt-4'>
                              <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label text-muted" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                                </div>
                                <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label text-muted" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                                </div>
                                <div class="form-check mb-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label text-muted" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                                </div>
                            </div>
                            <div className='py-3'>
                                <Image src={'/img/secure-stripe-payment.png'} width={200} height={80} className='img-fluid' alt='pay icon'/>
                            </div>
                            <div className='py-2'>
                                <button type='button' className='btn btn-primary'>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Checkout