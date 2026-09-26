import React, { useEffect, useState } from 'react'
import AboutImg from '../../assets/images/about-us.jpg';
import Header from '../common/Header';
import Footer from '../common/Footer';
import serviceImg from '../../assets/images/construction1.jpg';
import constructionImg from '../../assets/images/construction2.jpg';
import BlogImg from '../../assets/images/construction3.jpg';
import icon1 from '../../assets/images/icon-1.svg';
import icon2 from '../../assets/images/icon-2.svg';
import icon3 from '../../assets/images/icon-3.svg';
/* go to https://swiperjs.com/react to get below 2 lines and slider part at bottom (section 5)*/
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import AvatarImg from '../../assets/images/author-2.jpg';
import About from '../common/About';
import { apiUrl, token } from '../common/http';
import LatestServices from '../common/LatestServices';
import LatestProjects from '../common/LatestProjects';
import LatestArticles from '../common/LatestArticles';
import ShowTestimonial from '../common/ShowTestimonial';


const Home = () => {

  return (
    <>
    <Header/>
    <main>
      {/* Hero section */}
      <section className='section-1'>
        <div className='hero d-flex align-items-center'>
          <div className='container-fluid'>
            <div className='text-center'>
              <span>Welcome ATC's Aesthetic Construction Projects </span>
              <h1>Transforming dreams <br/>with precision and excellence</h1>
              <p>We specialize in converting visions into tangible outcomes through outstanding craftsmanship <br/>
                and meticulous attention to detail, backed by years of experience and a commitment to quality.
              </p>
              <div className='mt-4'>
                <a className='btn btn-primary large'>Contact Now</a>
                <a className='btn btn-secondary ms-2 large'>View Projects</a>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* About Us section */}
      <About/>

      {/* Our Services section */}
      <LatestServices/>

      {/* Why Choose Us */}
      <section className='section-4 py-5'>
        <div className='container py-5'>
          <div className='section-header text-center'>
              <span>Why Choose Us</span>
              <h2>Discover our wide variety of projects</h2>
              <p>Created in close partnership with our clients and collaborators, this approach
                merges industry expertise,<br/> decades of experience, innovation, and flexibility
                to consistently deliver excellence.
              </p>
          </div>

          <div className='row pt-4'>
            <div className='col-md-4'>
              <div className='card shadow border-0 p-4'>
                <div className='card-icon'>
                  <img src={icon1} alt='' />
                </div>
                <div className='card-title mt-3'>
                  <h3> Cutting-edge solution</h3>
                </div>
                  <p>
                    Small impacts creates big impacts. It all begins and ends with each employee
                    committing to safer work practices daily, ensuring they return home safely.
                  </p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card shadow border-0 p-4'>
                <div className='card-icon'>
                  <img src={icon2} alt='' />
                </div>
                <div className='card-title mt-3'>
                  <h3> Cutting-edge solution</h3>
                </div>
                  <p>
                    Small impacts creates big impacts. It all begins and ends with each employee
                    committing to safer work practices daily, ensuring they return home safely.
                  </p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='card shadow border-0 p-4'>
                <div className='card-icon'>
                  <img src={icon3} alt='' />
                </div>
                <div className='card-title mt-3'>
                  <h3> Cutting-edge solution</h3>
                </div>
                  <p>
                    Small impacts creates big impacts. It all begins and ends with each employee
                    committing to safer work practices daily, ensuring they return home safely.
                  </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Projects */}
      <LatestProjects/>

      {/* Blog & News */}
      <LatestArticles/>

      {/* Testimonials */}
      <ShowTestimonial/>

    </main>
    <Footer/>

    </>

  )
}

export default Home