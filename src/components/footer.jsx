import Link from 'next/link'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
           <div className='container-fluid px-lg-5'>
               <div className='wrapper'>
                    <div className='footer_item'> 
                        <p>Follow Us</p>
                        <ul>
                            <li><Link href="/order">Order</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/tickets">Tickets</Link></li>
                            <li><Link href="address">Address</Link></li>
                            <li><Link href="/change-password">Change Password</Link></li>
                            <li><Link href="/wishlist-product">Wishlist Product</Link></li>
                        </ul>
                    </div>
                    <div className='footer_item'> 
                        <p>Company</p>
                        <ul>
                            <li><Link href="">About Us</Link></li>
                            <li><Link href="">B2B Marketplace</Link></li>
                            <li><Link href="">Become a Partner</Link></li>
                            <li><Link href="">Become a Rider</Link></li>
                            <li><Link href="">Our Warehouses</Link></li>
                            <li><Link href="">Partner Brands</Link></li>
                        </ul>
                    </div><div className='footer_item'> 
                        <p>More Info</p>
                        <ul>
                            <li><Link href="">About Us</Link></li>
                            <li><Link href="">B2B Marketplace</Link></li>
                            <li><Link href="">Become a Partner</Link></li>
                            <li><Link href="">Become a Rider</Link></li>
                            <li><Link href="">Our Warehouses</Link></li>
                            <li><Link href="">Partner Brands</Link></li>
                        </ul>
                    </div><div className='footer_item'> 
                        <p>Need Help?</p>
                        <ul>
                            <li><Link href="">About Us</Link></li>
                            <li><Link href="">B2B Marketplace</Link></li>
                            <li><Link href="">Become a Partner</Link></li>
                            <li><Link href="">Become a Rider</Link></li>
                            <li><Link href="">Our Warehouses</Link></li>
                            <li><Link href="">Partner Brands</Link></li>
                        </ul>
                    </div>
               </div>
           </div>
            <p className='copyright'>Copyright © 2024 Relcube India Pvt. Ltd.</p>
        </div>
    )
}

export default Footer