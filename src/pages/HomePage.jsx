import React from 'react'
import { Hero, Footer } from '../components'
import ProjectSection from '../components/ProjectSection'
import ProjectSectionGrid from '../components/ProjectSectionGrid'
import { frontend_item, mern_item } from '../constant/project_data'

const HomePage = () => {

    return (
        <div>
            <Hero />
            <ProjectSectionGrid prop={{ title: "Front End Projects", cards: frontend_item }} />
            {/* <ProjectSection prop={{ title: "Front End Projects" }} /> */}
            <ProjectSectionGrid prop={{ title: "MERN Stack Projects", bg: 'linear-gradient(180deg, rgba(255,255,255,1) 7%, rgba(189,189,189,0.55) 56%)', cards: mern_item }} />
            <Footer />
        </div>
    )
}

export default HomePage
