import React, { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";

import {
    Navbar,
    Sidebar,
    Loading,
    Footer,
    Hero,
    BackToHome
} from './components'

import {
    Home,
    Products,
    SingleProduct,
    SubscriptionSectionCardPage,
    TestPage,
    AuthenPage,
    DashboardPage,
    CSSBattlePage,
    JustQuizPages,
    HandleTablePage,
    Error
} from './pages'

import {
    Cart,
    Product,
    Signin
} from './pages/redux_cart_pages/pages'

import {
    HomeResponsivePage
} from './pages/responsive_pages/pages'

import NavResponsive from './pages/responsive_pages/components/NavResponsive';
import SidebarResponsive from './pages/responsive_pages/components/SidebarResponsive';

import Nav from './pages/redux_cart_pages/components/Nav'
import FlipCard_1 from './pages/card_pages/FlipCard_1';
import GridPage_1 from './pages/grid_pages/GridPage_1';
import GridPage_2 from './pages/grid_pages/GridPage_2';
import DndPage_1 from './pages/dnd_pages/DndPage_1';
import DndPage_2 from './pages/dnd_pages/DndPage_2';
import DndPage_3 from './pages/dnd_pages/DndPage_3';
import { useSelector } from 'react-redux';


const PrivateWrapper = () => {
    const token = localStorage.getItem('token')
    return !!token && token !== '' > 0 ? <Outlet /> : <Navigate to='/authen' />
}

const ProjectWrapper = () => {
    return (
        <>
            <BackToHome />
            <Outlet />
        </>
    )

}

const ReduxCartWrapper = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    )
}

const ReduxAuth = ({ children }) => {
    const { user } = useSelector(state => state.auth)
    let navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/redux/signin')
        } else {
            navigate('/redux/product')
        }
    }, [user])
    return children
}

const ResponsiveWrapper = ()=>{
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <NavResponsive isOpen={isOpen} toggle={toggle}/>
            <SidebarResponsive isOpen={isOpen} toggle={toggle}/>
            <Outlet/>
        </>
    )
}

const RouterSetup = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <Router>
            {/* <Navbar isOpen={isOpen} toggle={toggle}/>
            <Sidebar isOpen={isOpen}  toggle={toggle}/> */}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<ProjectWrapper />}>
                    <Route path='/subscription' element={<SubscriptionSectionCardPage />} />
                    <Route path='/flipcard' element={<FlipCard_1 />} />
                    <Route path='/tierlist' element={<DndPage_2 />} />
                    <Route path='/authen' element={<AuthenPage />} />
                    <Route path='/css_battle' element={<CSSBattlePage />} />
                    <Route path='/just_quiz' element={<JustQuizPages />} />
                    <Route path='/import_export' element={<HandleTablePage />} />
                    <Route element={<PrivateWrapper />}>
                        <Route path='/dashboard' element={<DashboardPage />} />
                    </Route>
                    <Route path='redux' element={
                        <ReduxAuth>
                            <ReduxCartWrapper />
                        </ReduxAuth>
                    } >
                        <Route path='cart' element={<Cart />} />
                        <Route path='product' element={<Product />} />
                        <Route path='signin' element={<Signin />} />
                    </Route>
                    <Route path='responsive' element={<ResponsiveWrapper/>}>
                        <Route path='home' element={<HomeResponsivePage/>}></Route>
                    </Route>
                </Route>
                <Route path='/dndpage_1' element={<DndPage_1 />} />
                <Route path='/dndpage_3' element={<DndPage_3 />} />
                <Route path='/gridpage_1' element={<GridPage_1 />} />
                <Route path='/gridpage_2' element={<GridPage_2 />} />
                <Route path='/test' element={<TestPage />} />
                <Route path='*' element={<Error />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    )
}

export default RouterSetup
