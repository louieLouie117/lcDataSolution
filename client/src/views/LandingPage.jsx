import React from 'react'
import HeroBanner from '../components/LandingPage/HeroBanner'
import ToolsTechnologies from '../components/LandingPage/ToolsTechnologies'
import WorkExperience from '../components/LandingPage/WorkExperience'
// import Goals from '../components/LandingPage/Goals'
import LandingPageStyles from '../modules/LandingPageStyles.css'
import Services from '../components/LandingPage/Services'
import Footer from '../components/Footer'
// import AboutMe from '../components/LandingPage/AboutMe'

function LandingPage(props) {

  <LandingPageStyles></LandingPageStyles>


  return (
    <div className='LandingPage-Container'>
      <HeroBanner></HeroBanner>

      {/* <Goals></Goals> */}
      <div>
      <Services></Services>

      <WorkExperience></WorkExperience>
      <ToolsTechnologies></ToolsTechnologies>
    

      <Footer></Footer>
      </div>
      {/* <AboutMe></AboutMe> */}
    </div>
  )
}


export default LandingPage