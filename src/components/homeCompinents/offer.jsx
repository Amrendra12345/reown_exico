import Image from 'next/image'
import React from 'react'

import '../../styles/offser.scss'

const Offer = () => {
    return (
        <section className='offser'>
            <div className='container-fluid px-lg-5  pb-lg-5'>
                <div className='wrapper'>
                    <div className='img-thumani'>
                        <Image src={'/img/laptop-adv3.jpg'} alt='laptop ads2'sizes="100vw"width={300} height={300}  />
                    </div>
                    <div className='img-thumani'>
                         <Image src={'/img/laptop-adv2.jpg'} alt='laptop ads'sizes="100vw"width={300} height={300} />
                    </div>
                    <div className='img-thumani'>
                         <Image src={'/img/laptop-adv.jpg'} alt='laptop ads2'sizes="100vw"width={300} height={300} />
                    </div>
                    <div className='img-thumani'>
                         <Image src={'/img/laptop-adv1.jpg'} alt='laptop ads2'sizes="100vw"width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer