import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { navbarBasketData, allUsersComments } from './datas'
import { shopContext } from './contexts/ShopContext'  //context
import routers from './router'
import { useRoutes } from 'react-router-dom'
import MobileMenu from './Components/MobileMenu/MobileMenu'
import Toast from './Components/Toast/Toast'
import ScrollToTop from './ScrollToTop'
import InstallPWAButton from './Components/InstallPWAButton/InstallPWAButton'

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false)   // => use in Navbar Component
  const [basketList, setBasketList] = useState(navbarBasketData) // => use in NavbarBasketList Component
  const [toast, setToast] = useState(false) // => use in ProductBox Component
  const usersCommentsArray = allUsersComments // => use in LastComments Component
  const routes = useRoutes(routers)

  return (
    <shopContext.Provider value={{
      mobileMenu,
      setMobileMenu,
      basketList,
      setBasketList,
      toast,
      setToast,
      usersCommentsArray,
    }}>
      <>
        {/* navbar */}
        <Navbar />

        {/* home page */}
        {routes}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />

        {/* Toast */}
        <Toast />

        {/* Install PWA App */}
        <InstallPWAButton />

        <ScrollToTop />
      </>
    </shopContext.Provider>
  )
}
