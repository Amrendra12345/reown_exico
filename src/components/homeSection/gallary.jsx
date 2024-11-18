import { BsGlobe2, BsTrophy } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { FaGift } from "react-icons/fa";

const Gallary = () => {
  return (
    <div className='container'>
         <div className='flex justify-around items-center py-10'>
            <div className='flex gap-3 justify-center items-center'>
              <BsGlobe2 className="text-xl"/>
              <p className="uppercase text-gray-600 text-sm">Free fast deliver</p>
            </div>
            <div className='flex gap-3 justify-center items-center'>
              <BiMessage className="text-xl"/>
              <p className="uppercase text-gray-600 text-sm">24 X 7 supports</p>
            </div>
            <div className='flex gap-3 justify-center items-center'>
              <BsTrophy className="text-xl"/>
              <p className="uppercase text-gray-600 text-sm">Best quality</p>
            </div>
            <div className='flex gap-3 justify-center items-center'>
              <FaGift className="text-xl"/>
              <p className="uppercase text-gray-600 text-sm">Gift voucher</p>
            </div>
         </div>

         <div className="flex justify-between items-center py-10">
            <div className="bg-sky-500 h-[300px] w-[320px]"></div>
            <div className="bg-gray-400 h-[300px] w-[320px]"></div>
            <div className="bg-violet-200 h-[300px] w-[320px]"></div>
            <div className="bg-orange-500 h-[300px] w-[320px]"></div>
         </div>
    </div>
  )
}

export default Gallary