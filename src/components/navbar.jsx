import { FiShoppingCart, FiUser } from "react-icons/fi";
import style from "../styles/header.module.scss"
import Image from "next/image";

const Navbar = () => {
  return (
    <header className={`${style.header}`}>
        <div className='container-fluid px-lg-5 py-2'>
            <div className='d-flex justify-content-between align-items-center'>
                  <Image src='/img/reown_logo_sample1.png' width={130} height={40} sizes="100vw"style={{width:"20%", height:'auto'}} alt="reown logo"/>
                  <div className='menu'>
                     <ul className='d-flex justify-content-end gap-5'>                       
                         <li><FiUser /> <span>Login</span></li>
                         <li><FiShoppingCart /></li>
                     </ul>
                  </div>
            </div>
        </div> 
    </header>
  )
}

export default Navbar