import Breadcrumd from '@/components/breadcrumd'
import LeftProfile from '@/components/left_Profile'
import '../../styles/profile.scss'
import React from 'react'

const ChangePassowrd = () => {
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
                           <p className='titile'> Change passowrd</p>
                        </div>
                        <form>
                            <div className='row mt-4 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor={'email'}>Email address </label>
                                    <input type='email' className='form-control' id="email" name="email" />
                                </div>
                            </div>                            
                            <div className='row mt-4 mb-3'>
                                <div className='col-md-6'>
                                    <label htmlFor={'oldpass'}>Old Password</label>
                                    <input type='password' className='form-control' id="oldpass" name="oldpass" />
                                </div>                               
                            </div>
                            <div className='row'>
                            <div className='col-md-6'>
                                    <label htmlFor={'pass'}>New Password</label>
                                    <input type='password' className='form-control' id="pass" name="pass" />
                                </div>
                            </div>
                            <hr/>
                           <div className='row'>
                              <div className='col update_btn'>
                                 <button type='button' className='btn btn-primary'>UPDATE PSSWORD</button>
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

export default ChangePassowrd