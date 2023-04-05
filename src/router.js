import HomePage from "./Components/HomePage/HomePage"
import LoginPage from "./Components/LoginPage/LoginPage"

const routers = [
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
]

export default routers