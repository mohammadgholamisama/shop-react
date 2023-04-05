import React from 'react'
import './Breadcrumb.css'
import { Link } from 'react-router-dom'

export default function Breadcrumb({ pageName }) {

    return (
        <div className='breadcrumb fs-5 ms-3'>
            <div className="container">
                <Link className='breadcrumb-back' to='/'>Home</Link>
                <span className='breadcrumb-this-page ms-3 text-secondary'>{pageName}</span>
            </div>
        </div>
    )
}
