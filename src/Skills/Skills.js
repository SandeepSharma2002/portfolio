import React from 'react'
import "./Skills.css";
export default function Skill() {
  return (
    <section className = "skills container">
      <div className = "title">
        <h2>skills</h2>
        <div>
          <h2>my skills</h2>
        </div>
      </div>

      <p className = "text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab laudantium possimus molestias sapiente, saepe facilis dolore autem repellat, quo iure tempore nisi perspiciatis. Quasi?</p>

      <div className = "row">
        <div className = "item">
          <div className = "item-text">
            <span>C++</span>
            <span className = "w-90">90%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-90"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>Javascript</span>
            <span className = "w-75">75%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-75"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>HTML5</span>
            <span className = "w-85">85%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-85"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>CSS3</span>
            <span className = "w-80">80%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-80"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>Tailwind</span>
            <span className = "w-90">90%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-90"></div>
          </div>
        </div>

        <div className = "item">
          <div className = "item-text">
            <span>Reactjs</span>
            <span className = "w-80">80%</span>
          </div>
          <div className = "progress">
            <div className = "progress-bar w-80"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
