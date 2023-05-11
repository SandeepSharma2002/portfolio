import React from 'react'
import "./Contact.css";


export default function Contact() {
  return (
    <section class = "contact container">
      <div class = "title">
        <h2>contact</h2>
        <div>
          <h2>get in touch</h2>
        </div>
      </div>

      <p class = "text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempore, et dolores eum voluptas iusto voluptate, dicta iure mollitia atque, exercitationem deserunt laborum libero natus!</p>

      <div class = "row">
        <div class = "col-left">
          <h2>feel free to ask us!</h2>
          <p class = "text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui soluta mollitia suscipit maxime sunt dolore deleniti quam nihil repellendus perferendis.</p>

          <div class = "contact-info">
            <span><i class = "fas fa-envelope-open"></i></span>
            <h3>
              <span class = "text">mail me</span> <br/>
              Sandeepsharmawwe@gmail.com
            </h3>
          </div>

          <div class = "contact-info">
            <span><i class = "fas fa-phone-square-alt"></i></span>
            <h3>
              <span class = "text">call me</span> <br/>
              +91 706723 1923
            </h3>
          </div>

          <div class = "contact-social-links">
            <a href = "https://www.instagram.com/sandeepsharma.100/" target="_blank">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href = "https://www.linkedin.com/in/sandeep-sharma-9a8861229/" target="_blank">
              <i class = "fab fa-linkedin"></i>
            </a>
            {/* <a href = "/" target="_blank">
              <i class = "fab fa-leetcode"></i>
            </a> */}
            <a href = "/" target="_blank">
              <i class = "fab fa-github"></i>
            </a>
          </div>
        </div>

        <div class = "col-right">
          <form class = "contact-form">
            <div class = "form-group">
              <input type = "text" placeholder="your name"/>
              <input type = "email" placeholder="your email"/>
              <input type = "text" placeholder="your subject"/>
            </div>
            <textarea rows = "5"></textarea>
            <button type = "submit" class = "btn">send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
