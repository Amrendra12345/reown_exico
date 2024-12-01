import { FaGift, FaGlobe, FaTrophy } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import '../../styles/support.scss'

const Support = () => {
  return (
    <div className='container-fluid px-lg-5 pt-5 pb-3'>
        <ul className='d-flex justify-content-end align-items-center py-5 list-unstyled support'>
            <li className='flex-fill d-flex justify-content-center align-items-center gap-2'>
                <FaGlobe/> <span>Free fast deliver</span>
            </li>
            <li className='flex-fill d-flex justify-content-center align-items-center gap-2'>
                <RiMessage2Line/><span>24 X 7 supports</span>
            </li>
            <li className='flex-fill d-flex justify-content-center align-items-center gap-2'>
                <FaTrophy/><span>Best quality</span>
            </li>
            <li className='flex-fill d-flex justify-content-center align-items-center gap-2'>
                <FaGift/><span>Gift voucher</span>
            </li>
        </ul>
    </div>
  )
}

export default Support