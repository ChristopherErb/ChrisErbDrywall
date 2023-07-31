import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Header = () => {





    return (

        <div className="front-page">

        <header className="header">
          <h1>Building Dreams Together <br/>One Wall at a Time</h1>
        </header>

  

        <div className="main-content">
          <p>
            Welcome to our drywall business, where we believe in the power of teamwork
            and craftsmanship. We take pride in creating stunning spaces that leave a
            lasting impression on our clients. With precision and dedication, we work
            hand in hand to bring your dreams to reality, one wall at a time.
          </p>
          


          
        <div className="business-photo">
          <img src='dwImg.jpg' alt="Business" />
          <p className='main-content'>
            Whether it's residential or commercial projects, our team is committed to
            delivering exceptional results. From initial planning to flawless execution,
            we ensure every detail is crafted with care and expertise. <br /><br />

            Contact us today to learn more about our services and how we can work
            together to transform your space and create something extraordinary.
          </p>
        </div>
        </div>
      </div>
    );
  };



export default Header