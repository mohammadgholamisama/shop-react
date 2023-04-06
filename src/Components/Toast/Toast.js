import React, { useContext } from 'react'
import './Toast.css'
import { shopContext } from '../../contexts/ShopContext';
import { ToastContainer } from 'react-toastify';

export default function Toast() {
    const toastContext = useContext(shopContext)

    return (
        <div className={toastContext.toast ? 'toast-box active' : 'toast-box d-none'}>
            <ToastContainer />
        </div>
    )
}
