import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";

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
import FlipCard_1 from './pages/card_pages/FlipCard_1';
import GridPage_1 from './pages/grid_pages/GridPage_1';
import GridPage_2 from './pages/grid_pages/GridPage_2';
import DndPage_1 from './pages/dnd_pages/DndPage_1';
import DndPage_2 from './pages/dnd_pages/DndPage_2';
import DndPage_3 from './pages/dnd_pages/DndPage_3';
import { useAppContext } from './context/app_context';
import Cookies from 'js-cookie';
import 'antd/dist/antd.css'

const PrivateWrapper = () => {
    // console.log('3')
    // const user_id = Cookies.get('user_id')
    const token = localStorage.getItem('token')

    // console.log(token)
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

const RouterSetup = () => {
    const user_id = localStorage.getItem('user_id')
    const token = localStorage.getItem('token')
    return (
        <Router>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}

            <Routes>
                <Route path='/' element={<Home />} />
                <Route element={<ProjectWrapper />}>
                    <Route path='/subscription' element={<SubscriptionSectionCardPage />} />
                    <Route path='/flipcard' element={<FlipCard_1 />} />
                    <Route path='/tierlist' element={<DndPage_2 />} />
                    <Route path='/authen' element={<AuthenPage />} />
                    <Route path='/css_battle' element={<CSSBattlePage />} />
                    <Route path='/just_quiz' element={<JustQuizPages/>}/>
                    <Route path='/import_export' element={<HandleTablePage/>}/>
                    <Route element={<PrivateWrapper />}>
                        <Route path='/dashboard' element={<DashboardPage />} />
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
