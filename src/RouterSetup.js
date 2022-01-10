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
import DndPage_1 from './pages/dnd_pages/DndPage_1';
import DndPage_2 from './pages/dnd_pages/DndPage_2';

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
                <Route path='/dndpage_1' element={<DndPage_1 />} />
                <Route path='/dndpage_2' element={<DndPage_2 />} />
                <Route path='*' element={<Error />} />
            </Routes>
            {/* <Footer /> */}
        </Router>
    )
}

export default RouterSetup
