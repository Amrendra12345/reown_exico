 "use client" 
import Image from 'next/image';
import '../../styles/featureProduct.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaRupeeSign, FaStar } from 'react-icons/fa';
import { BsCart2, BsEye } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { useState } from 'react';
import Cart from './cart';
import Quickview from '../modals/quickview';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const data = [
   {
     url:'/img/2.png',
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
     },
     {
        url:'/img/5.jpg',
        alt:"img"
     },
     {
        url:'/img/7.jpg',
        alt:"img"
     },
     {
        url:'/img/9.jpg',
        alt:"img"
     },
     {
        url:'/img/10.jpg',
        alt:"img"
     },
    
]
const FeatureProduct = () => {    
    const router = useRouter()
    const handleClose = (e) => setShow(false);
    
    const [show, setShow] = useState(false);
    //const handleIsactive = (e) => setActive(false);
    //const handleActive = (e) => setActive(true);
    const [active, setActive] = useState(false);
    
    const clickHandelerLink = (e)=>{
        e.stopPropagation();
        router.push('/product')
    }
    const handleShow = (e) => {
        e.stopPropagation();
        setShow(true)
    }
    const handleActive = (e) =>{ 
        e.stopPropagation();
        setActive(true)
    }
    const handleIsactive = (e) =>{ 
        e.stopPropagation();
        setActive(false)
    }
    
   
    return (
        <>     
        <section className='featureProduct'>
            <div className='container-fluid p-lg-5'>
                <div className='heading'>
                    <h3>Feature Product</h3>
                </div>
                <Tabs
                    defaultActiveKey="newProducts"
                    transition={false}
                    id="featureProduct"
                    className="mb-3"
                    >
                     <Tab eventKey="newProducts" title="New products">
                         <div className='wprapper'>
                            {data.map((el, index)=>{
                                return(
                            <div className='items'  key={index} onClick={(e)=>clickHandelerLink(e)}>
                                <div className='img-figure'>
                                    <div className='img-contener'>
                                        <Image src={el.url} alt='el.alt'fill  sizes='400' style={{objectFit: 'contain' }}/>
                                    </div>
                                    
                                   <div className='social'>
                                   
                                    <div className='social_icon'>
                                        <span onClick={(e)=>handleActive(e)}><BsCart2/></span>
                                        <span onClick={(e)=> handleShow(e)}><BsEye/></span>
                                        <span><Link href='/wishlist-product'><FiHeart/> </Link></span>
                                      </div>
                                    
                                   </div>
                                 
                                </div>
                                <div className='caption'>
                                   <div className='stars_icons'>
                                        <span> <FaStar/> </span> 
                                        <span> <FaStar/> </span> 
                                        <span> <FaStar/> </span> 
                                        <span> <FaStar/> </span> 
                                        <span> <FaStar/> </span>
                                   </div>
                                   <p>Apple</p>
                                   <div className='prices'>
                                     <span> 
                                        <FaRupeeSign/> 
                                        20000.00
                                        <del>15000.00</del>
                                     </span>

                                   </div>
                                </div>
                            </div>
                            )})
                           }
                         </div>
                      </Tab>
                      <Tab eventKey="featureProducts" title="Feature products">
                       Tab content for Home featureProductsfeatureProducts
                      </Tab>
                      <Tab eventKey="bestProducts" title="Best products">
                       Tab content for Home bestProductsbestProducts
                      </Tab>

                </Tabs>
            </div>
        </section>
       {active && <Cart  handleIsactive={handleIsactive} active={active}/>}
      {show && <Quickview handleShow={handleShow} handleClose={handleClose} />}
     </>
    )
}

export default FeatureProduct