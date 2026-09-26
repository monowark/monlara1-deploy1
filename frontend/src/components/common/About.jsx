import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg';

const About = () => {
  return (
    <section className='section-2 py-5'>
            <div className='container py-5'>
              <div className='row'>
                <div className='col-md-6'>
                  <img src={AboutImg} className='w-100' />
                </div>
                <div className='col-md-6'>
                  <span>About Us</span>
                  <h2>Creating structures that endure for generations</h2>
                  <p align="justify">
                    Building enduring structures requires a holistic strategy that integrates innovative
                    materials, robust design, regular maintenance, and sustainable methods. This is 
                    achieved by leveraging historical knowledge alongside contemporary technology. 
                  </p>
                  <p align="justify">
                    Establishing buildings that withstand the passage of time necessitates a harmonious 
                    fusion of state-of-the-art materials, strong design, continuous care, and 
                    environmentally conscious practices. This is accomplished by merging insights from 
                    history with the capabilities of modern technology. 
                  </p>
                </div>
    
              </div>
            </div>
    
          </section>
  )
}

export default About