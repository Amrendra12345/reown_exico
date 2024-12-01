import Breadcrumd from '@/components/breadcrumd'
import LeftProfile from '@/components/left_Profile'
import '../../styles/profile.scss'
import React from 'react'

const Profile = () => {
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
                           <p className='titile'>Profile</p>
                        </div>
                        <form>
                            <div className='row mt-4 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor={'fname'}>First Name</label>
                                    <input type='text' className='form-control' id="fname" name="fname" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor={'lname'}>Last Name</label>
                                    <input type='text' className='form-control' id="lname" name="lname" />
                                </div>
                            </div>
                            <div className='row mt-4 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor={'email'}>Email address</label>
                                    <input type='text' className='form-control' id="email" name="email" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor={'phone'}>Phone number</label>
                                    <input type='text' className='form-control' id="phone" name="phone" />
                                </div>
                            </div>
                            <div className='row mt-4 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor={'pass'}>New password</label>
                                    <input type='passowrd' className='form-control' id="pass" name="pass" />
                                </div>
                                <div className='col-md-6'>
                                    <label htmlFor={'lname'}>Confirm password</label>
                                    <input type='text' className='form-control' id="lname" name="lname" />
                                </div>
                            </div>
                           <div className='row'>
                              <div className='col update_btn'>
                                 <button type='button' className='btn btn-primary'>UPDATE PROFILE</button>
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

export default Profile