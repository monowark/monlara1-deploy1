import React from 'react'

const Footer = () => {
  return (
      <footer>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-3'>
              <h3 className='mb-3'>UrbanEdge Constructions</h3>
                <div className='pe-5'>
                  <p>
                    Our post-construction services gives you peace of mind knowing 
                    that we are still here for you even after.
                  </p>
                </div>
              </div>
            <div className='col-md-3'>
              <h3 className='mb-3'>Our Services</h3>
              <ul>
                <li><a href=''>Specialty Construction</a></li>
                <li><a href=''>Specialty Construction</a></li>
                <li><a href=''>Specialty Construction</a></li>
                <li><a href=''>Specialty Construction</a></li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h3 className='mb-3'>Quick Links</h3>
              <ul>
                <li><a href='/about'>About Us</a></li>
                <li><a href='/services'>Services </a></li>
                <li><a href=''>Projects </a></li>
                <li><a href=''>Blogs Contact Us</a></li>
                <li><a href=''> Contact Us</a></li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h3>Contact Us</h3>
              <ul>
                <li><a href=''>(888-000-0000)</a></li>
                <li><a href=''>info@example.com</a></li>
                <p>
                  B-18X, Rajaji Puram Lucknow, 
                  Uttar Pradesh, 226017
                  0522400XXXX
                </p>
              </ul>
            </div>
          </div>
          <hr />
          <div className='text-center pt-3'>
            Copyright © 2024 UrbanEdge Construtions. All Rights Reserved.
          </div>
        </div>

    </footer>
  )
}

export default Footer