import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './navbar'

const Contact = () => {
    
    
    return (
        <div className="main-content">
                  <header className="header">
        <h1>Contact Us!</h1>
      </header>

      <h4>We always love to hear feedback! <br/> Here are some places you can find us.</h4>
        <div className="iconFloat">
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