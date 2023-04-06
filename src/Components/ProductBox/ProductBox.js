import React, { useContext } from 'react'
import './ProductBox.css'
import StarRating from '../StarRating/StarRating'
import { shopContext } from '../../contexts/ShopContext'
import { products } from '../../datas'
import { TiTick } from 'react-icons/ti'
import { SlBasket } from 'react-icons/sl'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductBox({ filterName }) {

    const allProducts = products
    const contextShop = useContext(shopContext)

    function addProductBasket(product) {

        let userCart = [...contextShop.basketList];
        let isProducuBasket = userCart.some(p => p.title === product.desk)

        if (!isProducuBasket) {
            let newProductObj = {
                id: contextShop.basketList.length + 1,
                group: product.group,
                img: product.img,
                title: product.desk,
                count: 1,
                price: product.price,
            }
            contextShop.setBasketList((prev) => [...prev, newProductObj])
        } else {
            let userCart = [...contextShop.basketList];
            userCart.some(p => {
                if (p.title === product.desk) {
                    p.count += 1
                }
                contextShop.setBasketList(userCart)
                return null
            })
        }

        toast.success('Added to Cart !', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1300,
            pauseOnHover: false,
            theme: "dark",
        });
        contextShop.setToast(true)
    }

    return (
        <>
            {filterName === 'All Products' ? allProducts.map(product =>
                <div className='product-box px-2 col-12 col-sm-6 col-lg-3' key={product.id}>
                    <p className={product.status ? 'inventory-status text-success fw-bold fs-6 d-flex align-items-center' : 'inventory-status text-danger fw-bold fs-6 d-flex align-items-center'}>
                        <TiTick className={product.status ? 'tick-icon' : 'product-close-icon'} /> {product.status ? 'There is' : 'unavailable'}
                    </p>
                    <div className="product-box__img text-center">
                        <img src={product.img} alt="product img" />
                    </div>
                    <div className="product-star__rating py-2">
                        <StarRating starRating={product.starRating} />
                    </div>
                    <p className="product-desk text-secondary">
                        {product.desk}
                    </p>
                    <h6 className='product-price__off'><del>${product.oldPrice}</del></h6>
                    <h5 className='product-price'>${product.price}</h5>
                    <div className="add-product__box py-3 text-center">
                        <button className='add-product__btn' disabled={!product.status} onClick={() => addProductBasket(product)}><SlBasket className='fs-5' /> Add to Cart</button>
                    </div>
                </div>
            )
                :
                allProducts.filter(p => p.group === filterName).map(product => (
                    <div className='product-box px-2 col-12 col-sm-6 col-lg-3' key={product.id}>
                        <p className={product.status ? 'inventory-status text-success fw-bold fs-6 d-flex align-items-center' : 'inventory-status text-danger fw-bold fs-6 d-flex align-items-center'}>
                            <TiTick className={product.status ? 'tick-icon' : 'product-close-icon'} /> {product.status ? 'There is' : 'unavailable'}
                        </p>
                        <div className="product-box__img text-center">
                            <img src={product.img} alt="product img" />
                        </div>
                        <div className="product-star__rating py-2">
                            <StarRating starRating={product.starRating} />
                        </div>
                        <p className="product-desk text-secondary">
                            {product.desk}
                        </p>
                        <h6 className='product-price__off'><del>${product.oldPrice}</del></h6>
                        <h5 className='product-price'>${product.price}</h5>
                        <div className="add-product__box py-3 text-center">
                            <button className='add-product__btn' disabled={!product.status} onClick={() => addProductBasket(product)}><SlBasket className='fs-5' /> Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

