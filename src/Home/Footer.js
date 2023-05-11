import React from 'react'
import "./Footer.css";
export default function Footer() {
  return (
    <footer className = "footer container">
    <div className = "row">
      <div className = "col">
        <h3 className = "footer-title">about</h3>
        <p className = "text">I'm a frontend web developer experienced in Reactjs, JavaScript, CSS and HTML. 
I'm skilled in various React libraries and frameworks such as Redux-saga, Redux-toolkit, and Tailwind, and have a strong foundation in DSA and programming languages like C, C++.
Always looking for opportunities to learn and grow.</p>
        <div className = "social-links">
          <a href = "https://www.linkedin.com/in/sandeep-sharma-9a8861229/" target= '_blank'><i className = "fab fa-linkedin"></i></a>
          <a href = "https://github.com/SandeepSharma2002" target= '_blank'><i className = "fab fa-github"></i></a>
          <a href = "https://www.instagram.com/sandeepsharma.100/" target= '_blank'><i className = "fab fa-instagram"></i></a>
        </div>
      </div>

      {/* <div className = "col">
        <h3 className = "footer-title">links</h3>
        <div className = "footer-links">
          <a href = "/" className = "text">
            <i className = "fas fa-long-arrow-alt-right"></i>
            home
          </a>
          <a href = "/" className = "text">
            <i className = "fas fa-long-arrow-alt-right"></i>
            about
          </a>
          <a href = "/" className = "text">
            <i className = "fas fa-long-arrow-alt-right"></i>
            services
          </a>
          <a href = "/" className = "text">
            <i className = "fas fa-long-arrow-alt-right"></i>
            contact
          </a>
        </div>
      </div> */}

      {/* <div className = "col">
        <h3 className = "footer-title">more</h3>
        <div className = "footer-links">
          <a href = "/" className = "text">
            <i className = "fas fa-long-arrow-alt-right"></i>
            web design
          </a>
          <a href = "/" className = "text">
            <i className = "fas fa-long-arrow-alt-right"></i>
            web development
          </a>
          <a href = "/" className = "text">
            <i className = "fas fa-long-arrow-alt-right"></i>
            business strategy
          </a>
          <a href = "/" className = "text">
            <i className = "fas fa-long-arrow-alt-right"></i>
            graphics design
          </a>
        </div>
      </div> */}
      
      <div className = "col">
        <h3 className = "footer-title">have a question?</h3>
        <div>
          <span>
            <i className = "fas fa-map-marker-alt"></i>
          </span>
          <span className = "text">New Ashok Nagar, Ujjain, Madhya Pradesh</span>
        </div>
        <div>
          <span>
            <i className = "fas fa-phone"></i>
          </span>
          <span className = "text">+91 706723 1923</span>
        </div>

        <div>
          <span>
            <i className = "fas fa-envelope"></i>
          </span>
          <span className = "text">sandeepsharma@gmail.com</span>
        </div>
      </div>
    </div>

    {/* <div className = "footer-text">
      <p className = "text">Copyright &copy; 2022 All rights reserved | Awesome Template Design</p>
    </div> */}
  </footer>
  )
}
