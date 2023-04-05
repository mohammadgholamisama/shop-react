import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb/Breadcrumb'

export default function LoginPage() {
  return (
    <div className='login-page mb-5'>
      <Breadcrumb pageName={'Login'} />
      <div className="container">
        <h3 className='login-page__title my-4 text-center fw-bold'>Customer Login & Sign Up</h3>
        <div className="row px-3 px-md-4 justify-content-between">
          <div className="login-page__login-box col-12 col-lg-6 bg-light p-4 p-md-5">
            <h4>Registered Customers</h4>
            <p className='text-secondary my-2'>if you have an account, sign in whit your email adderss.</p>
            <div className="registered-input__box d-flex flex-column my-4">
              <label className='registered-input__label my-2' htmlFor="email-input">Email <span className='text-danger'>*</span></label>
              <input className='registered-input mb-3' type="text" name="email" id="email-input" placeholder='Your Email' />
              <label className='registered-input__label my-2' htmlFor="password-input">Password <span className='text-danger'>*</span></label>
              <input className='registered-input' type="password" name="password" id="password-input" placeholder='Your Password' />
            </div>
            <div className="registered-btn__box d-flex align-items-center mt-5">
              <button className='registered-btn login-page__btn'>Sign in</button>
              <Link to='/login' className='registered-forgot__password text-primary text-decoration-none'>Forgot Your Password ?</Link>
            </div>
          </div>
          <div className="login-signup-box col-12 col-lg-6 mt-3 mt-lg-0 p-4 p-md-5 bg-dark text-white">
            <h2 className='mb-5'>New Customer?</h2>
            <p>Cewating an account has many benefits :</p>
            <ul>
              <li>Check out faster</li>
              <li>Keep more  than one address</li>
              <li>Track orders and more</li>
            </ul>
            <button className='register-btn login-page__btn ms-3 mt-4'>Create An Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
