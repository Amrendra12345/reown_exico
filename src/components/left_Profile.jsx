import React from 'react'
import '../styles/leftProfile.scss'
import Image from 'next/image'
import Link from 'next/link'

const LeftProfile = () => {
    return (
        <div className='user_details'>
            <div className='user_profile'>
                <div className='user_img'>
                    <Image src={'/img/test-1.jpg'} width={60} height={60} alt='user-img' />
                </div>
                <div className='user_name'>
                    <p>Swati Singh</p>
                    <p>30-11-2024</p>
                </div>
            </div>
            <ul>
                <li className='active'>
                   <Link href={'/order'}> <span>Order</span><span>5</span></Link>
                </li>
                <li>
                    <Link href={'/address'}> <span> Address</span><span></span></Link>
                </li>
                <li>
                    <Link href={'/wishlist-product'}> <span>Wishlist</span><span>5</span></Link>
                </li>
                <li>
                     <Link href={'/change-password'}><span>Change password</span><span></span></Link>
                </li>
                <li>
                    <Link href={'/tickets'}> <span>My tickts</span><span>3</span></Link>
                </li>
                <li>
                   <Link href={'#'}> <span>Sign out</span><span></span></Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftProfile