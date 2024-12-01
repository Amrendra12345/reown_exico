import '../../styles/quickview.scss'
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react'
import Image from 'next/image';
import { FaRupeeSign, FaStar } from 'react-icons/fa';
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
const Quickview = ({handleShow, handleClose}) => {
   const[imgUrl, setImgUrl] = useState(
    data[0].url
   );
 const handleClick = (e)=>{
    
    setImgUrl(e.target.src)
 }

  return (
    <>  
   <Modal
        show={handleShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Quickview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className='wrapper'>
              <div className='img_contaner'>
                 <div className='figure'>
                               
                    <Image src={imgUrl}   alt={'img'}  sizes='250px' fill style={{objectFit:"contain"}} />   
                 </div>
                 <div className='figure_sub' >
                    {data.map((el, i)=>{
                        return(
                            <div className='subImg' key={i} onClick={(e)=>handleClick(e)}>
                                <Image src={el.url} alt={el.alt}  sizes='80px' fill style={{objectFit:"contain"}} />
                            </div>
                        )
                    })}
                 </div>
              </div>
              <div className='content'>
                  <p className='title'>Apple Mac Book</p>
                  <p className='price'><FaRupeeSign/> 25000 <del>40000</del></p>
                  <div className='start_icon'>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                  </div>
              </div>
          </div>
        </Modal.Body> 
      </Modal>
  </>
  
  )
}

export default Quickview