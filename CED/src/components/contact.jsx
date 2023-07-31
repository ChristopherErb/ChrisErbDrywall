import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './navbar'

const Contact = () => {
    
    
    return (
        <div className="front-page">
                  <header className="header">
        <h1>Contact Us!</h1>
      </header>


      <h4 className=''>Looking for some drywall work?  Here's how you can find Scott!</h4>
        <div className="iconFloat main-content">

        <div className="notAnnoyed">
          <h2>Facebook</h2>
          <a href="https://www.facebook.com/scotterbdrywall">
            <img src="FB.png" />
          </a>
        </div>

        <div className="notAnnoyed">
          <h2>Gmail</h2>
          <a href="mailto:scotterbdrywall@gmail.com">
            <img src="/gmail.png" />
          </a>
        </div>
            <div className="notAnnoyed">
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/scott-erb-6397a110a/">
            <img src="/icons8-linkedin-480.png" />
          </a>
        </div>

        
     </div>




      <h4 className=''>I always love to hear website feedback!  Here you can find Christopher</h4>
        <div className="iconFloat main-content">
        <div className="notAnnoyed">
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/christophererb1">
            <img src="/icons8-linkedin-480.png" />
          </a>
        </div>
        <div className="notAnnoyed">
          <h2>Gmail</h2>
          <a href="mailto:christophererb01@gmail.com">
            <img src="/gmail.png" />
          </a>
        </div>
        <div className="notAnnoyed">
          <h2>Github</h2>
          <a href="https://github.com/ChristopherErb">
            <img src="github-mark.png" />
          </a>
        </div>
     </div>
     </div>

    )

}


export default Contact