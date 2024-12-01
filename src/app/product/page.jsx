"use client"
import Breadcrumd from '@/components/breadcrumd'
import '../../styles/product.scss'
import { FaRupeeSign, FaSlidersH, FaStar } from 'react-icons/fa'
import { BsCart2, BsEye, BsLaptop } from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import React, { useState } from "react";
import MultiRangeSlider from '@/components/multiRangeSlider/multiRangeSlider';
import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';
import Link from 'next/link';

const data = [
    {
        name:'Acer',
        quty:10
    },
    {
        name:'Alienware',
        quty:8
    },
    {
        name:'Apple',
        quty:1
    },
    {
        name:'Asus',
          quty:2
    },
    {
        name:'AVITA',
        quty:1
    },
    {
        name:'Compaq'
    },
    {
        name:'Dell',
        quty:40
    },
    {
        name:'HP',
        quty:60
    },
    {
        name:'iLife'
    },
    {
        name:'Lenovo',
        quty:300
    },
    {
        name:'Samung'
    },
    {
        name:'Tashiba',
        quty:400
    }
]
const processor = [
    {
        name:'AMD A10',       
    },
    {
        name:'AMD A4',       
    },
    {
        name:'AMD A6',       
    },
    {
        name:'AMD A8',     
    },
    {
        name:'AMD C-70',     
    },
    {
        name:'AMD E',     
    },
    {
       name:'AMD Ryzen 3 2nd Gen'
    },
    {
        name:'AMD Ryzen 3 3nd Gen'
    },
    {
         name:'AMD Ryzen 5'
    },
    {
        name:'AMD Ryzen 5 2nd Gen'
    },
    {
        name:'Intel Atom'
    },
    {
        name:'Intel Celeron',       
    },
    {
        name:'Intel Celeron Dual Core 3rd Gen',       
    },
    {
        name:'Intel Celeron Dual Core 5rd Gen',       
    },
    {
        name:'Intel Celeron Dual Core 6th Gen',       
    },
    {
        name:'Intel Celeron Dual Core 7th Gen',       
    },,
    {
        name:'Intel Celeron Dual Core 8th Gen',       
    },
    {
        name:'Intel Core i3',       
    },
    {
        name:'Intel Core i3 10th Gen',       
    },
    {
        name:'Intel Core i3 11th Gen',       
    },
    {
        name:'Intel Core i3 2th Gen',       
    },
    {
        name:'Intel Core i5',       
    },
    {
        name:'Intel Core i5 10th Gen',       
    },
    {
        name:'Intel Core i5 11th Gen',       
    },
    {
        name:'Intel Core i5 2th Gen',       
    },
    {
        name:'Intel Core i3',       
    },
    {
        name:'Intel Core i7 10th Gen',       
    },
    {
        name:'Intel Core i7 11th Gen',       
    },
    {
        name:'Intel Core i7 2th Gen',       
    },
]
const porData = [
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



const Product = () => {
    const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};
  return (
    <>
      <Breadcrumd pageName={'Product'} />
      <section className='product'>
        <div className='container-fluid px-lg-5'>
            <div className='row'>
                <div className='col-md-3'>
                    <div className='left_side mb-4'>
                        <div className='filter_header'>
                           <p><span>Filter</span><span><FaSlidersH/></span></p>
                        </div>
                        <div className='filtr_search'>
                            <p className='heading'><span>Brand</span><span><BsLaptop /></span></p>
                            { data.map((el, i)=>{
                                return(
                            <div className='filter_avilable'  key={i}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id={el.name} />
                                    <label className="form-check-label" htmlFor={el.name}> {el.name} </label>
                                </div>
                                <p>{el.quty}</p>
                            </div>
                            )})}
                        </div>
                    </div>
                    <div className='left_side mb-4'>                       
                        <div className='filtr_search'>
                            <p className='heading'><span>Processor</span><span><CgSmartphoneRam /></span></p>
                            { processor.map((el, i)=>{
                                return(
                            <div className='filter_avilable'  key={i}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id={el.name} />
                                    <label className="form-check-label" htmlFor={el.name}> {el.name} </label>
                                </div>                               
                            </div>
                            )})}
                        </div>
                    </div>
                    <div className='left_sider'>
                        <p className='title'>Price</p>
                    <MultiRangeSlider 
                        min={0}
                        max={80000}
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                    />
                    </div>
                </div>
                <div className='col-md-9'>
                     <p className='title'>Product List</p>
                    <div className='wrapper'>
                        {porData.map((el, i)=>{
                            return( 
                                <Link href={'/product-list'} key={i}>
                                <div className='item'>
                                    <div className='figure'>
                                        <Image src={el.url} fill  sizes='150' style={{objectFit: 'contain' }} alt={el.alt}/>                               
                                    </div>
                                    <div className='social_icon'>
                                            <span ><BsCart2/></span>
                                            <span ><BsEye/></span>
                                            <span><FiHeart/></span>
                                        </div>
                                    <div className='caption'>
                                        <p>Apple Mac Book</p>
                                        <p>Model No</p>
                                        <p className='price'><FaRupeeSign/> 45000 <del>70000</del></p>
                                    </div>
                                    <hr />
                                    <div className='sales_icons'>
                                        <div className='star'>
                                            <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                                        </div>
                                        <p>sale {'24%'}</p>
                                    </div>
                                </div>
                            </Link>
                         )
                        })}
                    </div>
                </div>
            </div>            
        </div>
      </section>
    </>
  )
}

export default Product