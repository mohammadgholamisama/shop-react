import React, { useContext } from 'react'
import './Toast.css'
import { shopContext } from '../../contexts/ShopContext';
import { ToastContainer } from 'react-toastify';   // Setting in ProductBox Component

export default function Toast() {
    const toastContext = useContext(shopContext)

    return (
        <div className={toastContext.toast ? 'toast-box active' : 'toast-box d-none'}>
            <ToastContainer limit={4} pauseOnFocusLoss={false} />
        </div>
    )
}
