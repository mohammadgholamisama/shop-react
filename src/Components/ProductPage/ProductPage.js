import React, { useContext, useEffect, useState } from 'react'
import './ProductPage.css'
import { products } from '../../datas'
import { Link, useParams } from 'react-router-dom';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { shopContext } from '../../contexts/ShopContext';
import { toast } from 'react-toastify';

export default function ProductPage() {

    const context = useContext(shopContext)   // Context

    const [allProducts, setAllProducts] = useState(null)
    const [thisPageProduct, setThisPageProduct] = useState({})
    const [ShowInfoFilter, setShowInfoFilter] = useState('About Product')
    const [productCount, setProductCount] = useState(1)

    const params = useParams()

    useEffect(() => {
        setAllProducts(products)
        if (allProducts) {
            let mainProduct = allProducts.find(product => {
                return product.id === +params.productID
            })
            setThisPageProduct(mainProduct)
        }
    }, [allProducts, params.productID])

    const countInputHandler = (value) => {
        setProductCount(value)
    }

    const activeFilterInfoHandler = (event) => {
        setShowInfoFilter(() => event.target.value)
        let filterBtnsInfo = document.querySelectorAll('.product-info-filter-btn')
        filterBtnsInfo.forEach(btn => {
            btn.classList.remove('active')
        });
        event.target.classList.add('active')
    }


    function addProductToBasket() {

        let userCart = [...context.basketList];
        let isProducuBasket = userCart.some(p => p.title === thisPageProduct.desk)

        if (!isProducuBasket) {
            let newProductObj = {
                id: context.basketList.length + 1,
                group: thisPageProduct.group,
                img: thisPageProduct.img,
                title: thisPageProduct.desk,
                count: productCount,
                price: thisPageProduct.price,
            }
            context.setBasketList((prev) => [...prev, newProductObj])
        } else {
            let userCart = [...context.basketList];
            userCart.some(p => {
                if (p.title === thisPageProduct.desk) {
                    p.count += productCount
                }
                context.setBasketList(userCart)
                return null
            })
        }

        toast.success('Added to Cart !', {    // Toast ADD product
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 800,
            pauseOnHover: false,
            theme: "dark",
        });
        context.setToast(true)
    }

    return (
        <>
            {thisPageProduct && (
                <div className="product-page">
                    <header className='product-header'>
                        <div className="container-xl">
                            <div className="row">
                                <div className="product-page-filter-box col-12 col-md-6 text-start">
                                    <button className='product-info-filter-btn active' value={'About Product'} onClick={(event) => activeFilterInfoHandler(event)}>About Product</button>
                                    <button className='product-info-filter-btn' value={'Details'} onClick={(event) => activeFilterInfoHandler(event)}>Details</button>
                                    <button className='product-info-filter-btn' value={'Space'} onClick={(event) => activeFilterInfoHandler(event)}>Space</button>
                                </div>
                                <div className="product-page-right col-12 col-md-6">
                                    <div className="d-flex justify-content-end mt-md-0 align-items-center">
                                        <span className='product-page-right-price me-2'>On Sale from <span>${thisPageProduct.price * productCount}</span></span>
                                        <AiFillMinusSquare className='count-input-handler' onClick={() => setProductCount(prev => prev < 2 ? prev = 1 : prev - 1)}>-</AiFillMinusSquare>
                                        <input type="number" min='1' max='30' className='product-page-count-input' value={productCount} onChange={event => countInputHandler(event.target.value)} />
                                        <AiFillPlusSquare className='count-input-handler' onClick={() => setProductCount(prev => prev > 29 ? prev = 30 : prev + 1)}>+</AiFillPlusSquare>
                                        <button className='product-page-right-btn ms-2' onClick={addProductToBasket}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className='product-page-body'>
                        <div className="container-xl">
                            <div className="row d-flex flex-column-reverse flex-md-row">
                                <div className="mb-3">
                                    <Breadcrumb pageName={`${thisPageProduct.group}`} />
                                </div>
                                <div className="product-page-body-left col-12 col-md-6 px-5 mt-4">
                                    <h1 className='product-body-title'>{thisPageProduct.group}</h1>
                                    <Link to="/" className='product-body-link'>Be The first to review this product</Link>

                                    {/* Filters Details */}

                                    {ShowInfoFilter === 'About Product' && (
                                        <div className="product-body-about">
                                            <p className="product-body-desc">
                                                {thisPageProduct.desk}
                                                {thisPageProduct.desk}
                                                {thisPageProduct.desk}
                                            </p>
                                            <div className="product-body-colors mt-5">
                                                <button className="product-body-btn-color active" disabled></button>
                                                <button className="product-body-btn-color" disabled></button>
                                                <button className="product-body-btn-color" disabled></button>
                                            </div>
                                        </div>
                                    )}

                                    {ShowInfoFilter === 'Details' && (
                                        <div className="product-body-details">
                                            <ul className="product-body-details-ul py-3 pb-5">
                                                {thisPageProduct.details.map(productDetails => (
                                                    <li className='mt-1' key={productDetails}>{productDetails}</li>
                                                ))}
                                            </ul>

                                        </div>
                                    )}

                                    {ShowInfoFilter === 'Space' && (
                                        <div className="product-body-space bg-light">
                                            <table class="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Cpu</th>
                                                        <td>N/A</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Featured</th>
                                                        <td>N/A</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">I/O Ports</th>
                                                        <td>N/A</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    )}


                                </div>
                                <div className="product-page-body-right offset-1 col-10 col-md-5 mt-4 mt-md-0">
                                    <img src={`${thisPageProduct.img}`} alt="product img" />
                                </div>
                            </div>
                        </div>
                    </section >
                </div >
            )
            }
        </>
    )
}
