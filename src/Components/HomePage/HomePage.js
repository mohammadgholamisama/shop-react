import React from 'react'
import ProductBaner from '../ProductBaner/ProductBaner'
import Products from '../Products/Products'
import Toast from '../Toast/Toast'
import LastComments from '../LastComments/LastComments'

export default function HomePage() {
    return (
        <section className='section mx-md-0'>
            <div className="container-fluid container-md">
                {/* product banner */}
                <ProductBaner />

                {/* products */}
                <Products />

                {/* toast */}
                <Toast />

                {/* last comments */}
                <LastComments />
            </div>
        </section>
    )
}
