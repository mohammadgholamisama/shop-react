import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { navbarBasketData, usersComments } from './datas'
import { shopContext } from './contexts/ShopContext'  //context
import routers from './router'
import { useRoutes } from 'react-router-dom'
import MobileMenu from './Components/MobileMenu/MobileMenu'
// import ScrollToTop from './ScrollToTop' //Scroll with address change

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [basketList, setBasketList] = useState(navbarBasketData)
  const [toast, setToast] = useState(false)
  const userComments = usersComments
  const routes = useRoutes(routers)

  return (
    <shopContext.Provider value={{
      mobileMenu,
      setMobileMenu,
      basketList,
      setBasketList,
      toast,
      setToast,
      userComments,
    }}>
      <>
        {/* navbar */}
        <Navbar />

        {/* Mobile Menu */}
        <MobileMenu />

        {/* home page */}
        {routes}

        {/* Footer */}
        <Footer />
      </>
    </shopContext.Provider>
  )
}
