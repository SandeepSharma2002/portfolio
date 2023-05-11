import React from 'react'
import "./Resume.css";

export default function Resume() {
  return (
    <section className = "resume container">
      <div className = "title">
        <h2>resume</h2>
        <div>
          <h2>resume</h2>
        </div>
      </div>

      <p className = "text">Experienced Frontend Web Developer with expertise in HTML, CSS, JavaScript, and programming languages such as C++, C, and Java. Completed DSA training. Skilled in creating visually appealing websites with seamless user experiences.</p>

      <div className = "row">
        <div className = "item">
          <div className = "icon">
            <i className = "fas fa-briefcase"></i>
          </div>
          <span>2023 - present</span>
          <h2>web developer - <span>Udemy</span></h2>
          <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit non porro nisi, vitae accusamus sapiente!</p>
        </div>

        <div className = "item">
          <div className = "icon">
            <i className = "fas fa-graduation-cap"></i>
          </div>
          <span>2024</span>
          <h2>Information Technology - <span>JEC</span></h2>
          <p className = "text">CGPA: 8.28</p>
        </div>

        {/* <div className = "item">
          <div className = "icon">
            <i className = "fas fa-briefcase"></i>
          </div>
          <span>2013 - 2018</span>
          <h2>ui/ux designer - <span>codeburst</span></h2>
          <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit non porro nisi, vitae accusamus sapiente!</p>
        </div> */}

        <div className = "item">
          <div className = "icon">
            <i className = "fas fa-graduation-cap"></i>
          </div>
          <span>2020</span>
          <h2>Class XII - <span>Govt. Malhar Ashram Hr. Sec. School, Indore</span></h2>
          <p className = "text">Percentage: 84%</p>
        </div>

        {/* <div className = "item">
          <div className = "icon">
            <i className = "fas fa-briefcase"></i>
          </div>
          <span>2005 - 2013</span>
          <h2>consultant - <span>videoLive</span></h2>
          <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit non porro nisi, vitae accusamus sapiente!</p>
        </div> */}

        <div className = "item">
          <div className = "icon">
            <i className = "fas fa-graduation-cap"></i>
          </div>
          <span>2018</span>
          <h2>high school - <span>Govt. School For Excellence, Ujjain</span></h2>
          <p className = "text">Percentage : 92.6%</p>
        </div>
      </div>
    </section>
  )
}
