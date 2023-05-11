import React from 'react'
import photo from "../assets/my-photo.jpg"
import './About.css'
export default function About() {
  return (
    <section className = "about container">
      <div className = "title">
        <h2>about</h2>
        <div>
          <h2>about me</h2>
        </div>
      </div>

      <div className = "row">
        <div className = "row-left">
          <img src = {photo} alt = "about photo"/>
        </div>

        <div className = "row-right">
          <p className = "text">I am a Frontend Web Developer with expertise in HTML, CSS, and JavaScript. I have completed Data Structures and Algorithms (DSA) training and possess strong programming skills in C++, C, and Java. I strive to create visually appealing and user-friendly websites that deliver a seamless user experience.</p>
          <div className = "about-content">
            <ul>
              <li className = "text">
                <span>Name: </span>
                <span>Sandeep Sharma</span>
              </li>
              <li className = "text">
                <span>Date of Birth: </span>
                <span>March 03, 2002</span>
              </li>
              <li className = "text">
                <span>Address: </span>
                <span>New Ashok Nagar,Ujjain (M.P)</span>
              </li>
              <li className = "text">
                <span>Email: </span>
                <span>sandeepsharma@gmail.com</span>
              </li>
              <li className = "text">
                <span>Phone: </span>
                <span>7067231923</span>
              </li>
            </ul>
          </div>

          <h3>12 <span>Project complete</span></h3>
          <button type = "button" className = "btn">download cv</button>
        </div>
      </div>
    </section>
  )
}

