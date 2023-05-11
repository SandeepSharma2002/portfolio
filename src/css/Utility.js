import React from "react";
import { useEffect } from "react";

export default function Utility() {
  useEffect(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : null;
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    }
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }
    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
    toggleSwitch.addEventListener("change", switchTheme, false);
  });

  return (
    <div class="theme-switch-wrapper">
      <label class="theme-switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
      </label>
    </div>
  );
}
