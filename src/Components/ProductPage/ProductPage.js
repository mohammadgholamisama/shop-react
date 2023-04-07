import React, { useEffect, useState } from 'react'
import './ProductPage.css'
import { products } from '../../datas'

export default function ProductPage() {

    const [allProducts, setAllProducts] = useState(null)
    console.log('allProducts: ', allProducts);

    useEffect(() => {
        setAllProducts(products)
    }, [])

    return (
        <div className='product-header'>
            <div className="container-xl">
                <div className="row">
                    <div className="product-header-infos-box">
                        <ul>
                            <li className='product-header-li active'>About Product</li>
                            <li className='product-header-li'>Details</li>
                            <li className='product-header-li'>Space</li>
                        </ul>
                    </div>
                    <div className="product-header-right">
                        <h5>On Sale from <b>$3,499,000</b></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
