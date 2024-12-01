import Breadcrumd from '@/components/breadcrumd'
import '../../styles/profile.scss'
import LeftProfile from '@/components/left_Profile'
const data = [
    {
        sub: 'My new ticket',
        date:'Nov 30,2024',
        type:'Website problem',
        priority:'High',
        status:'Open'
    },
    {
        sub: 'Another ticket',
        date:'Nov 30,2024',
        type:'Website problem',
        priority:'Medium',
        status:'Closed'
    },
    {
        sub: 'Yet another ticket',
        date:'Nov 30,2024',
        type:'Complaint',
        priority:'Urgent',
        status:'Closed'
    },
    {
        sub: 'My old ticket',
        date:'Nov 30,2024',
        type:'Info inquiry',
        priority:'Low',
        status:'Closed'
    },
    
]
const Tickets = () => {
  return (
    <section className='profile'>
        <Breadcrumd pageName={'Tickets'} />
        <div className='container-fluid px-lg-5 profile_wrapper'>
            <div className='row'>
                <div className='col-md-4'>
                    <LeftProfile />
                </div>
                <div className='col-md-8'>
                    <div className='tickets-table'>
                       <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <td>Ticket subject</td>
                                        <td>Date submitted</td>
                                        <td>Type</td>
                                        <td>Priority</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((el, i)=>{
                                        return(
                                            <tr key={i}>
                                                <td>{el.sub}</td>
                                                <td>{el.date}</td>
                                                <td>{el.type}</td>
                                                <td className={`${el.priority}`}>{el.priority}</td>
                                                <td>{el.status}</td>                                               
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
  )
}

export default Tickets