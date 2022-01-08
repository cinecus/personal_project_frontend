import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    Error
} from './pages'
import FlipCard_1 from './pages/card_pages/FlipCard_1';
import GridPage_1 from './pages/grid_pages/GridPage_1';
import GridPage_2 from './pages/grid_pages/GridPage_2';

const RouterSetup = () => {
    return (
        <Router>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/gridpage_1' element={<GridPage_1 />} />
                <Route path='/gridpage_2' element={<GridPage_2 />} />
                <Route path='/flipcard_1' element={<FlipCard_1 />} />
                <Route path='/subscription' element={<SubscriptionSectionCardPage />} />
                <Route path='/test' element={<TestPage />} />
                <Route path='*' element={<Error />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    )
}

export default RouterSetup
