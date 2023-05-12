import React from 'react'
import photo from "../assets/my-photo.png"
import "./Home.css";
export default function Home() {
  return (
        <section className = "home container">
      <div className = "row">
        <div className = "row-left">
          <h3>hello!</h3>
          <h1>i'm <span>Sandeep Sharma</span></h1>
          <h2>a frontend web developer</h2>
          <div className = "home-pg-btn">
            <button type = "button" className = "btn">hire me</button>
            <button type = "button" className = "btn">my works</button>
          </div>
        </div>

        <div className = "row-right">
          <div className = "img-border">
            <div className = "img-container">
              <img src = { photo }  alt = "MyPhoto"/>
            </div>
          </div>
        </div>
      </div>
    </section>  
  )
}
