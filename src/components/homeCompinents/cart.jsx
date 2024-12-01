"use client"
import React, { useState } from 'react'
import '../../styles/cart.scss'
import { IoMdClose } from "react-icons/io";
import { FaRegTrashAlt, FaRubleSign, FaRupeeSign } from "react-icons/fa";
import Image from 'next/image';
import { motion } from "motion/react"
const data = [
    {
      url:'/img/2.png',
      alt:"img",
      name:"HP",
      model:"Pavilion",
      price:24000
     },
     {
         url:'/img/apple.png',
         alt:"img",
         name:"Apple",
         model:"Mac Book",
         price:34000
      },
      {
         url:'/img/3.jpg',
         alt:"img",
         name:"Apple",
         model:"Mac Book",
         price:40000
      },
      {
         url:'/img/4.jpg',
         alt:"img",
         name:"Apple",
         model:"Mac Book",
         price:34000
      },
      {
         url:'/img/5.jpg',
         alt:"img",
         name:"Aasu",
         model:"Swift Go",
         price:34000
      },
     
 ]
const Cart = ({handleIsactive, active}) => {
   
  return (
    <div className='cart'>
        <motion.div className="wrapper"
        initial={{
            x: '100vw'
        }}
         animate={{
            x: '0'
         }}
         transition={{
            duration:0.1,
            type:"tween"
         }}

        >
            <div className='cart-header'>
               <p>cart</p>
               <span onClick={handleIsactive}><IoMdClose/></span>
            </div>
            <div className='cart_container'>
            {data.map((el, i)=>{
                return(               
                <div className='cart-items' key={i}>
                    <div className='cart-item'>
                        <div className='item'>
                            <Image src={el.url} fill sizes="100px"alt={el.alt} style={{objectFit: 'contain'}}/>
                        </div>
                        <div className='item-txt'>
                            <p>{el.name} </p>
                            <p>{el.model}</p>
                            <p><FaRupeeSign /> {el.price}</p>
                        </div>
                    </div>
                    <div className='remove-item'>
                        <div className='add_item'>
                            <span>+</span>
                            <span>1</span>
                            <span>-</span>
                        </div>
                        <div className='remove-icon'>
                            <FaRegTrashAlt/>
                        </div>
                    </div>
                </div>
             )
            })}
             </div>
            <div className='totalAmout'>
                <p><span> Total</span> <span><FaRupeeSign/> 12,0000</span></p>
                <button className='btn btn-danger w-100'>Checkout</button>
                <button className='btn btn-danger w-100'>View Cart</button>
            </div>
        </motion.div>
    </div>
  )
}

export default Cart