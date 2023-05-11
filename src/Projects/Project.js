import React from "react";
import "./Project.css";
export default function Project() {
  return (
    <section className="projects container">
      <div className="title">
        <h2>projects</h2>
        <div>
          <h2>our projects</h2>
        </div>
      </div>

      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        perspiciatis accusantium eligendi aliquam excepturi dolores obcaecati
        eveniet inventore aut? Voluptas assumenda obcaecati dignissimos animi
        incidunt?
      </p>

      <div className="row">
        <div className="item">
          <div className="item-overlay">
            <a href="https://sandeepsharma2002.github.io/Qoute-Generator/">Quote Generator</a>
            <h3>Get Inspirational Quote</h3>
          </div>
        </div>

        <div className="item">
          <div className="item-overlay">
            <a href="https://sandeepsharma2002.github.io/moviz/">Moviz</a>
            <h3>Your Gateway To The Best Movies!</h3>
          </div>
        </div>

        <div className="item">
          <div className="item-overlay">
            <a href="https://sandeepsharma2002.github.io/NewsAdda/">NewsAdda</a>
            <h3>NewsAdda For Daily Dose Of News</h3>
          </div>
        </div>

        <div className="item">
          <div className="item-overlay">
            <a href="https://sandeepsharma2002.github.io/Calculator/">Calculator</a>
            <h3>Make Calculation Easy</h3>
          </div>
        </div>

        <div className="item">
          <div className="item-overlay">
            <a href="https://sandeepsharma2002.github.io/TextUtils/">TextUtils</a>
            <h3>ToolKit For Text Editing </h3>
          </div>
        </div>

        <div className="item">
          <div className="item-overlay">
            <a href="https://sandeepsharma2002.github.io/To-do/">To-Do List</a>
            <h3>Don't Forget To Do It.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
