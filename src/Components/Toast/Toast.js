import React, { useContext } from 'react'
import './Toast.css'
import { shopContext } from '../../contexts/ShopContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AiOutlineClose } from 'react-icons/ai'

export default function Toast() {

    const toastContext = useContext(shopContext)

    return (
        <div className={toastContext.toast ? 'toast-box active' : 'toast-box d-none'}>
            <AiOutlineClose className='toast-close__icon' onClick={() => toastContext.setToast(false)} />
            <div className="d-flex align-items-center">
                <span className='toast-text'>Added to Cart</span>
                <CheckCircleIcon className='toast-icon' />
            </div>
        </div>
    )
}
