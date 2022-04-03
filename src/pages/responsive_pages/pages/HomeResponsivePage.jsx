import React,{ useEffect, useState } from 'react'
import FifthSection from '../components/FifthSection'
import FirstSection from '../components/FirstSection'
import ForthSection from '../components/ForthSection'
import HeroSection from '../components/HeroSection'
import SecondSection from '../components/SecondSection'
import SixthSection from '../components/SixthSection'
import SeventhSection from '../components/SeventhSection'
import ThirdSection from '../components/ThirdSection'
import FooterSection from '../components/FooterSection'

const HomeResponsivePage = () => {
  
  return (
    <div>
      <HeroSection/>
      <FirstSection />
      <SecondSection />
      <ThirdSection/>
      <ForthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <FooterSection/>
    </div>
  )
}

export default HomeResponsivePage