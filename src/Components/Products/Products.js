import React, { useState } from 'react'
import './Products.css'
import ProductBox from '../ProductBox/ProductBox'
import { Link } from 'react-router-dom'

export default function Products() {
    const [filterName, setFilterName] = useState('All Products')

    const activeFilterHandler = (event) => {
        setFilterName(() => event.target.value)
        let filterBtns = document.querySelectorAll('.product-filter__btn')
        filterBtns.forEach(btn => {
            btn.classList.remove('active-filter')
        });
        event.target.classList.add('active-filter')
    }

    return (
        <div className='products mt-5'>
            <div className="container">
                <h3>{filterName}</h3>
                <div className="product-filter mt-4">
                    <Link to='/' className='product-filter__link '><button className='product-filter__btn active-filter' value='All Products' onClick={event => activeFilterHandler(event)}>All Products</button></Link>
                    <Link to='/' className='product-filter__link'><button className='product-filter__btn' value='msi' onClick={event => activeFilterHandler(event)}>msi</button></Link>
                    <Link to='/' className='product-filter__link'><button className='product-filter__btn' value='HP' onClick={event => activeFilterHandler(event)}>HP</button></Link>
                    <Link to='/' className='product-filter__link'><button className='product-filter__btn' value='Lenovo' onClick={event => activeFilterHandler(event)}>Lenovo</button></Link>
                </div>
                <div className="allproducts row mt-3 bg-light p-2">
                    <ProductBox filterName={filterName} />
                </div>
            </div>
        </div>
    )
}
