import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='bg-dark text-white pt-5 pb-1 mt-4'>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <span className='fs-4 mb-0 fw-bold mb-4 mb-md-0'>Sign Up To Our Newsletter .</span>
                    <div className="footer-box d-flex align-items-center ">
                        <input type="text" className='footer-input' placeholder='Your Email' />
                        <button className='footer-btn'>Subscribe</button>
                    </div>
                </div>
                <p className='mt-3 text-center text-secondary'>Created By Mohammad Gholami</p>
            </div>
        </footer>
    )
}