import HomePage from "./Components/HomePage/HomePage"
import LoginPage from "./Components/LoginPage/LoginPage"
import ProductPage from "./Components/ProductPage/ProductPage"

const routers = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/product/:productID', element: <ProductPage /> },
]

export default routers