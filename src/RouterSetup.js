import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";

import {
    Navbar,
    Sidebar,
    Loading,
    Footer,
    Hero
} from './components'

import {
    Home,
    Products,
    SingleProduct,
    SubscriptionSectionCardPage,
    TestPage,
    AuthenPage,
    DashboardPage,
    Error
} from './pages'
import FlipCard_1 from './pages/card_pages/FlipCard_1';
import GridPage_1 from './pages/grid_pages/GridPage_1';
import GridPage_2 from './pages/grid_pages/GridPage_2';
import DndPage_1 from './pages/dnd_pages/DndPage_1';
import DndPage_2 from './pages/dnd_pages/DndPage_2';
import { useAppContext } from './context/app_context';
import Cookies from 'js-cookie';

const PrivateWrapper = () => {
    // console.log('3')
    // const user_id = Cookies.get('user_id')
    const token = localStorage.getItem('token')

    // console.log(token)
    return !!token && token !== '' > 0 ? <Outlet /> : <Navigate to='/authen' />
}
const RouterSetup = () => {
    // const { isAuthenticated, message } = useAppContext()
    // console.log(isAuthenticated)
    // console.log(message)
    // const isAuthenticated = localStorage.getItem('isAuthentication')
    const user_id = localStorage.getItem('user_id')
    const token = localStorage.getItem('token')
    // console.log(isAuthenticated)
    // document.cookie = 'user_id=; token='
    // const user_id = !!document.cookie ? document.cookie.split('; ').find(el => el.startsWith('user_id=')).split('=')[1] : ''
    // const token = !!document.cookie ? document.cookie.split('; ').find(el => el.startsWith('token=')).split('=')[1] : ''
    return (
        <Router>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/authen' element={<AuthenPage />} />
                <Route element={<PrivateWrapper />}>
                    <Route path='/dashboard' element={<DashboardPage />} />
                </Route>
                <Route path='/gridpage_1' element={<GridPage_1 />} />
                <Route path='/gridpage_2' element={<GridPage_2 />} />
                <Route path='/flipcard_1' element={<FlipCard_1 />} />
                <Route path='/subscription' element={<SubscriptionSectionCardPage />} />
                <Route path='/test' element={<TestPage />} />
                <Route path='/dndpage_1' element={<DndPage_1 />} />
                <Route path='/dndpage_2' element={<DndPage_2 />} />
                <Route path='*' element={<Error />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    )
}

export default RouterSetup
