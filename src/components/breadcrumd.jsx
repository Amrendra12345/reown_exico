import Link from 'next/link'
import '../styles/breadcrumb.scss'

const Breadcrumd = (props) => {
  return (
    <div className='breadcrumb-area mt-3'>
        <div className='container-fliud px-lg-5'>
            <div className='row'>
                <div className='col'>
                    <ul className='breadcrumb-ul'>
                        <li><Link href={'/'}> Home </Link></li>
                        <li><Link href={'/'}>{props.pageName}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumd