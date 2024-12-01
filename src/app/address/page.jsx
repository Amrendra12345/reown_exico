import Breadcrumd from '@/components/breadcrumd'
import LeftProfile from '@/components/left_Profile'
import '../../styles/profile.scss'
import React from 'react'

const Address = () => {
  return (
    <section className='profile'>
        <Breadcrumd pageName={'profile'}/>
        <div className='container-fluid px-lg-5 profile_wrapper'>
            <div className='row'>
                <div className='col-md-4'>
                    <LeftProfile/>
                </div>
                <div className='col-md-8'>
                    <div className='profile_content'>
                        <div className='heading'>
                           <p className='titile'>Contact address</p>
                        </div>
                        <form>
                            <div className='row mt-4 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor={'fname'}>Company </label>
                                    <input type='text' className='form-control' id="fname" name="fname" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor={'lname'}>Country</label>
                                    <input type='text' className='form-control' id="lname" name="lname" />
                                </div>
                            </div>
                            <div className='row mt-4 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor={'email'}>City</label>
                                    <input type='text' className='form-control' id="email" name="email" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor={'phone'}>Zip Code</label>
                                    <input type='text' className='form-control' id="phone" name="phone" />
                                </div>
                            </div>
                            <div className='row mt-4 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor={'address1'}>Address 1</label>
                                    <input type='text' className='form-control' id="address1" name="address1" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor={'address2'}>Address 1</label>
                                    <input type='text' className='form-control' id="address2" name="address2" />
                                </div>
                            </div>
                           <div className='row'>
                              <div className='col update_btn'>
                                 <button type='button' className='btn btn-primary'>UPDATE ADDRESS</button>
                              </div>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Address