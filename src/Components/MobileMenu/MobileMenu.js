import React, { useContext } from 'react'
import './MobileMenu.css'
import { navbarData } from '../../datas'
import { shopContext } from '../../contexts/ShopContext'
import { NavLink } from 'react-router-dom'

export default function MobileMenu() {

    const mobileMenuContext = useContext(shopContext)
    const mobileMenuLists = navbarData

    const closeMobileMenuHandler = () => {
        mobileMenuContext.setMobileMenu(prev => !prev)
    }
    return (
        <>
            <div className={mobileMenuContext.mobileMenu ? 'mobile-menu show' : 'mobile-menu'} onClick={closeMobileMenuHandler}>
                <div className="menu-list">
                    <div className="monile-menu__close">
                        Close Menu
                    </div>
                    <ul className="mobile-menu__list">
                        {mobileMenuLists.map(item => (
                            <li className="mobile-menu__item" key={item.id}>
                                <NavLink to="/" className='mobile-menu__link'>{item.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
