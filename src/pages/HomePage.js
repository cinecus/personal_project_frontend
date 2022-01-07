import React from 'react'
import { Hero, Footer } from '../components'
import ProjectSection from '../components/ProjectSection'

const HomePage = () => {
    return (
        <div>
            <Hero />
            <ProjectSection prop={{ title: "Front End Projects" }} />
            <ProjectSection prop={{ title: "MERN Stack Projects", bg: 'linear-gradient(180deg, rgba(255,255,255,1) 7%, rgba(189,189,189,0.55) 56%)' }} />
            <Footer />
        </div>
    )
}

export default HomePage
