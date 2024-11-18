"use client"
import Image from 'next/image'
import { MdStarBorder, MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { BiRupee, BiCart } from "react-icons/bi";
import { TbEye } from "react-icons/tb";
import { motion } from 'framer-motion';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useState } from 'react';
import { Button } from '../ui/button';


const Product = () => {
    const [hidden, setHeidden] = useState(false)
    const STAGGER_DELAY = 0.4;
    const handelMouseLeave = () => {
        setHeidden(false)
    }
    const handelMouseEnter = () => {
        setHeidden(true)
    }

    return (
        <>
        <div className='container py-20'>
            <div className='w-full justify-center'>
                <h2 className='heading'>Featured Products</h2>
                <ul className='flex justify-center items-center gap-10 mb-8'>
                    <li className='text-gray-800 uppercase text-sm border-b-2 font-semibold border-b-white pb-1 cursor-pointer hover:border-b-2 hover:border-orange-500'>New products</li>
                    <li className='text-gray-800 uppercase text-sm border-b-2 font-semibold border-b-white pb-1 cursor-pointer hover:border-b-2 hover:border-orange-500'>Feature products</li>
                    <li className='text-gray-800 uppercase text-sm border-b-2 font-semibold border-b-white pb-1 cursor-pointer hover:border-b-2 hover:border-orange-500'>Best products</li>
                </ul>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                <div className='bg-white mb-6'>
                    <div className='bg-gray-100 w-full flex justify-center mb-2 flex-col items-center pt-4 pb-2 relative hoverMouse'>
                        <div className='w-[300px] h-[210px] relative '>
                            <Image src={'/img/apple.jpg'} fill className='object-contain' alt='img' />
                        </div>
                        <div className='flex justify-center items-center gap-4 tolltipButton overflow-y-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolBiCart`}

                                        ><BiCart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Add to Cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolTbeye'>
                                            <TbEye className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Quickview</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolbsHeart'

                                        ><BsSuitHeart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className='caption'>
                        <div className='flex gap-1 justify-center items-center w-full mb-3'>
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                        </div>
                        <p className='text-sm text-gray-500 text-center mb-3'>Dell xps</p>
                        <p className='font-bold text-2xl text-center text-gray-700 flex justify-center items-center gap-1'><BiRupee /> 20,000</p>
                    </div>
                </div>
                <div className='bg-white mb-6'>
                    <div className='bg-gray-100 w-full flex justify-center mb-2 flex-col items-center pt-4 pb-2 relative hoverMouse'>
                        <div className='w-[300px] h-[210px] relative '>
                            <Image src={'/img/1.jpg'} fill className='object-contain' alt='img' />
                        </div>
                        <div className='flex justify-center items-center gap-4 tolltipButton overflow-y-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolBiCart`}

                                        ><BiCart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Add to Cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolTbeye'>
                                            <TbEye className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Quickview</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolbsHeart'

                                        ><BsSuitHeart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className='caption'>
                        <div className='flex gap-1 justify-center items-center w-full mb-3'>
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                        </div>
                        <p className='text-sm text-gray-500 text-center mb-3'>Dell xps</p>
                        <p className='font-bold text-2xl text-center text-gray-700 flex justify-center items-center gap-1'><BiRupee /> 20,000</p>
                    </div>
                </div>
                <div className='bg-white mb-6'>
                    <div className='bg-gray-100 w-full flex justify-center mb-2 flex-col items-center pt-4 pb-2 relative hoverMouse'>
                        <div className='w-[300px] h-[210px] relative '>
                            <Image src={'/img/2.jpg'} fill className='object-contain' alt='img' />
                        </div>
                        <div className='flex justify-center items-center gap-4 tolltipButton overflow-y-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolBiCart`}

                                        ><BiCart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Add to Cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolTbeye'>
                                            <TbEye className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Quickview</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolbsHeart'

                                        ><BsSuitHeart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className='caption'>
                        <div className='flex gap-1 justify-center items-center w-full mb-3'>
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                        </div>
                        <p className='text-sm text-gray-500 text-center mb-3'>Dell xps</p>
                        <p className='font-bold text-2xl text-center text-gray-700 flex justify-center items-center gap-1'><BiRupee /> 20,000</p>
                    </div>
                </div>
                <div className='bg-white mb-6'>
                    <div className='bg-gray-100 w-full flex justify-center mb-2 flex-col items-center pt-4 pb-2 relative hoverMouse'>
                        <div className='w-[300px] h-[210px] relative '>
                            <Image src={'/img/3.jpg'} fill className='object-contain' alt='img' />
                        </div>
                        <div className='flex justify-center items-center gap-4 tolltipButton overflow-y-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolBiCart`}

                                        ><BiCart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Add to Cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolTbeye'>
                                            <TbEye className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Quickview</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolbsHeart'

                                        ><BsSuitHeart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className='caption'>
                        <div className='flex gap-1 justify-center items-center w-full mb-3'>
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                        </div>
                        <p className='text-sm text-gray-500 text-center mb-3'>Dell xps</p>
                        <p className='font-bold text-2xl text-center text-gray-700 flex justify-center items-center gap-1'><BiRupee /> 20,000</p>
                    </div>
                </div>
                <div className='bg-white mb-6'>
                    <div className='bg-gray-100 w-full flex justify-center mb-2 flex-col items-center pt-4 pb-2 relative hoverMouse'>
                        <div className='w-[300px] h-[210px] relative '>
                            <Image src={'/img/4.jpg'} fill className='object-contain' alt='img' />
                        </div>
                        <div className='flex justify-center items-center gap-4 tolltipButton overflow-y-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolBiCart`}

                                        ><BiCart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Add to Cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolTbeye'>
                                            <TbEye className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Quickview</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolbsHeart'

                                        ><BsSuitHeart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className='caption'>
                        <div className='flex gap-1 justify-center items-center w-full mb-3'>
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                        </div>
                        <p className='text-sm text-gray-500 text-center mb-3'>Dell xps</p>
                        <p className='font-bold text-2xl text-center text-gray-700 flex justify-center items-center gap-1'><BiRupee /> 20,000</p>
                    </div>
                </div>
                <div className='bg-white mb-6'>
                    <div className='bg-gray-100 w-full flex justify-center mb-2 flex-col items-center pt-4 pb-2 relative hoverMouse'>
                        <div className='w-[300px] h-[210px] relative '>
                            <Image src={'/img/5.jpg'} fill className='object-contain' alt='img' />
                        </div>
                        <div className='flex justify-center items-center gap-4 tolltipButton overflow-y-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolBiCart`}

                                        ><BiCart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Add to Cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolTbeye'>
                                            <TbEye className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Quickview</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolbsHeart'

                                        ><BsSuitHeart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className='caption'>
                        <div className='flex gap-1 justify-center items-center w-full mb-3'>
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                        </div>
                        <p className='text-sm text-gray-500 text-center mb-3'>Dell xps</p>
                        <p className='font-bold text-2xl text-center text-gray-700 flex justify-center items-center gap-1'><BiRupee /> 20,000</p>
                    </div>
                </div>
                <div className='bg-white mb-6'>
                    <div className='bg-gray-100 w-full flex justify-center mb-2 flex-col items-center pt-4 pb-2 relative hoverMouse'>
                        <div className='w-[300px] h-[210px] relative '>
                            <Image src={'/img/8.jpg'} fill className='object-contain' alt='img' />
                        </div>
                        <div className='flex justify-center items-center gap-4 tolltipButton overflow-y-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolBiCart`}

                                        ><BiCart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Add to Cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolTbeye'>
                                            <TbEye className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Quickview</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolbsHeart'

                                        ><BsSuitHeart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className='caption'>
                        <div className='flex gap-1 justify-center items-center w-full mb-3'>
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                        </div>
                        <p className='text-sm text-gray-500 text-center mb-3'>Dell xps</p>
                        <p className='font-bold text-2xl text-center text-gray-700 flex justify-center items-center gap-1'><BiRupee /> 20,000</p>
                    </div>
                </div>
                <div className='bg-white mb-6'>
                    <div className='bg-gray-100 w-full flex justify-center mb-2 flex-col items-center pt-4 pb-2 relative hoverMouse'>
                        <div className='w-[300px] h-[210px] relative '>
                            <Image src={'/img/9.jpg'} fill className='object-contain' alt='img' />
                        </div>
                        <div className='flex justify-center items-center gap-4 tolltipButton overflow-y-hidden'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className={`flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolBiCart`}

                                        ><BiCart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Add to Cart</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolTbeye'>
                                            <TbEye className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Quickview</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='flex justify-center items-center w-10 h-10 bg-orange-500 rounded-full cursor-pointer toolbsHeart'

                                        ><BsSuitHeart className='text-xl text-white' /></div>
                                    </TooltipTrigger>
                                    <TooltipContent >
                                        <p>Wishlist</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className='caption'>
                        <div className='flex gap-1 justify-center items-center w-full mb-3'>
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                            <MdStarBorder />
                        </div>
                        <p className='text-sm text-gray-500 text-center mb-3'>Dell xps</p>
                        <p className='font-bold text-2xl text-center text-gray-700 flex justify-center items-center gap-1'><BiRupee /> 20,000</p>
                    </div>
                </div>
                
              
              
            </div>
        </div>
        <div className='container relative h-[475px] py-8 saleNow'>
            
           <Image src={'/img/full-banner3-1.jpg'} className='object-cover' fill alt='full image'  sizes="100vw" />
        </div>
        </>
    )
}

export default Product