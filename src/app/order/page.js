import Breadcrumd from '@/components/breadcrumd'
import '../../styles/order.scss'
import Image from 'next/image'
import LeftProfile from '@/components/left_Profile'
const data = [
    {
        order_id: 763534545363,
        date:'Nov 30,2024',
        status:'Canceled',
        total:'7500.50'
    },
    {
        order_id: 7635345453543,
        date:'Nov 30,2024',
        status:'Progress',
        total:'4500.50'
    },
    {
        order_id: 7635345453543,
        date:'Nov 30,2024',
        status:'Delayed',
        total:'7500.50'
    },  {
        order_id: 7635345453543,
        date:'Nov 30,2024',
        status:'Delivered',
        total:'7500.50'
    },
    {
        order_id: 763534545363,
        date:'Nov 30,2024',
        status:'Canceled',
        total:'7500.50'
    },
    {
        order_id: 7635345453543,
        date:'Nov 30,2024',
        status:'Progress',
        total:'4500.50'
    },
    {
        order_id: 7635345453543,
        date:'Nov 30,2024',
        status:'Delayed',
        total:'7500.50'
    },  {
        order_id: 7635345453543,
        date:'Nov 30,2024',
        status:'Delivered',
        total:'7500.50'
    }
]
const Order = () => {
  return (
    <>
        <Breadcrumd pageName={'order'}/>
        <section className='order'>
            <div className='container-fluid  px-lg-5'>
                <div className='row'>
                    <div className='col-md-4'>
                       <LeftProfile/>
                    </div>
                    <div className='col-md-8'>
                        <div className='order_list border-bottom'>
                           <p className='title'>Order</p>
                        </div>
                        <div className='order_lists mt-1'>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <td>Order #</td>
                                        <td>Date purchased</td>
                                        <td>Status</td>
                                        <td>Total</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((el, i)=>{
                                        return(
                                            <tr key={i}>
                                                <td>{el.order_id}</td>
                                                <td>{el.date}</td>
                                                <td className={`${el.status}`}
                                                  
                                                   >{el.status}</td>
                                                <td>{el.total}</td>
                                            </tr>
                                        )
                                    })}                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Order