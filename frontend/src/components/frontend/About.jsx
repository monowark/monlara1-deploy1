import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import {default as AboutNew} from '../common/About'
import MemberImg from '../../assets/images/pexels-pixabay-220453.jpg'
import Hero from '../common/Hero'
import ShowTestimonial from '../common/ShowTestimonial'
import Team from '../common/Team'

const About = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero preHeading='Quality, Integrity, Value' heading='About Us' text='We excel transforming visions 
      into reality <br/> through outstanding crafsmanship.'
      />

      {/* Our Team */}
      <Team/>
      <ShowTestimonial/>
    </main>
    <Footer/>
    
    </>
  )
}

export default About