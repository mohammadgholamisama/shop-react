import React, { useState, useContext, useMemo } from 'react'
import './NavbarBasketList.css'
import { shopContext } from '../../contexts/ShopContext'
import { CiCircleRemove } from 'react-icons/ci'

export default function NavbarBasketList() {

    const allBasket = useContext(shopContext)
    const [totalPrice, setTotalPrice] = useState(0)

    useMemo(() => {   // Sum total of products in the shopping cart
        let productPrices = []
        allBasket.basketList.map(product => {
            return productPrices.push(product.price * product.count)
        })
        let sum = productPrices.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        }, 0)
        setTotalPrice(sum)
    }, [allBasket.basketList])


    const removeProductHandler = product => {  //Removeing product in basket
        let findedProduct = allBasket.basketList.filter(p => {
            return p.title !== product.title
        })
        allBasket.setBasketList(findedProduct)
    }

    return (
        <>
            <div className="py-2 d-flex flex-column align-items-center">
                <p className="navbar-basket__list-title fw-bold fs-5 m-0">My Cart</p>
                <p className="navbar-basket__list-items">{allBasket.basketList.length} item in cart</p>
                <button className='site-btn navbar-basket__list-btn'>View or Edite Your Cart</button>
            </div>
            {allBasket.basketList && (

                <div className="navbar-basket_items-box">
                    {allBasket.basketList.map(item => (
                        <div className="navbar-basket__item py-1 border-top" key={item.id}>
                            <div className="row align-items-center m-0">
                                <div className="col-1">
                                    <span className='navbar-basket__item-count'>x{item.count}</span>
                                </div>
                                <div className="col-3">
                                    <img src={item.img} alt="pc" className="navbar-basket__item-img" style={{ width: 50 }} />
                                </div>
                                <div className="col-6">
                                    <span className='navbar-basket__item-desk'>
                                        {item.title}
                                    </span>
                                    <p className='navbar-basket__item-price'>Total Price : <span>${item.price * item.count}</span></p>
                                </div>
                                <div className="col-1">
                                    <CiCircleRemove className='remove-item__basket-icon' onClick={() => removeProductHandler(item)} />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="navbar-basket__price text-center mt-3 border-top">
                        <span className="navbar-basket__price-title text-secondary mt-4 d-block">Total : <span className='fw-bold text-black'>${totalPrice}</span></span>
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <button className='btn btn-primary rounded-4'>Go To Checkout</button>
                    </div>
                </div>
            )}

        </>
    )
}
