import React, { useContext, useState } from 'react'
import './Navbar.css'
import { navbarData } from '../../datas'
import { Link, NavLink } from 'react-router-dom'
import { shopContext } from '../../contexts/ShopContext'
// icons
import { AiOutlineSearch } from 'react-icons/ai'
import { BiBasket } from 'react-icons/bi'
import { FaUserAlt, FaBars } from 'react-icons/fa'
import NavbarBasketList from '../NavbarBasketList/NavbarBasketList'

export default function Navbar() {

  const contextShop = useContext(shopContext)
  const [openSearchBox, setOpenSearchBox] = useState(false)
  const navbarMenuList = navbarData

  return (
    <nav className="navbar navbar-expand-sm  ">
      <div className="container-xl">
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to='/' className="navbar-brand">
            <svg width="34" height="41" viewBox="0 0 34 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0331 0.945374L0.296875 10.8637V23.0708L17.0331 32.9891L30.4588 25.3596V28.9836L17.0331 36.9946L0.296875 26.8855V31.2725L17.0331 41L33.7693 31.2725V19.0653L20.3435 26.8855V23.0708L33.7693 15.0599V10.8637L17.0331 0.945374Z" fill="#0156FF" />
            </svg>
          </NavLink>
          <ul className={openSearchBox ? 'navbar-nav me-auto w-100 justify-content-around d-none' : 'd-none d-lg-flex navbar-nav me-auto w-100 justify-content-around'}>  {/* show & hide menu */}
            {navbarMenuList.map(item => (
              <li className="navbar-item " key={item.id}>
                <Link to="/" className="navbar-link">{item.title}</Link>
              </li>
            ))}
          </ul>
          <Link to='/login'><button className='site-btn ms-3'>Login</button></Link>
        </div>
        <div className={openSearchBox ? 'navbar-right d-flex align-items-center active' : 'navbar-right d-flex align-items-center'}>  {/* active class to open input */}
          <div className="navbar-search d-flex align-items-center ms-3">
            <input type="text" className='navbar-search__input' placeholder='Search . . .' />
            <AiOutlineSearch className='navbar-right__icon' onClick={() => setOpenSearchBox(prev => !prev)} />
          </div>
          <div className='navbar-basket ms-3'>
            <BiBasket className='navbar-right__icon navbar-basket-icon' />
            <span className="navbar-basket__count">{contextShop.basketList.length}</span>
            <div className="navbar-basket__list px-2">
              <NavbarBasketList />
            </div>
          </div>
          <div className="navbar-user d-flex align-items-center ms-3">
            <FaUserAlt className='navbar-right__icon' />
          </div>
          <div className='mobile-menu__icon-box ms-4 d-block d-lg-none' onClick={() => {
            contextShop.setMobileMenu(prev => !prev)
          }}>
            <FaBars className='mobile-menu__icon'></FaBars>
          </div>
        </div>
      </div>
    </nav>
  )
}
