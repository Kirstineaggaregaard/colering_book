"use strict";

document.addEventListener("DOMContentLoaded", start);

let selectedColor;

async function start() {
  let response = await fetch("jepjep.svg");
  let mySvgData = await response.text();
  document.querySelector("main").innerHTML = mySvgData;

  makeSVGChangeable();
}

function makeSVGChangeable() {
  clearColor();
  document.querySelectorAll(".color").forEach(color => {
    color.addEventListener("click", e => {
      selectedColor = e.target.dataset.color;
      document.querySelector(".the_color").style.backgroundColor = selectedColor;
    });
  });

  document.querySelector("button").addEventListener("click", clearColor);

  document.querySelector("#fill").addEventListener("click", fillJep);
}

function fillJep(e) {
  e.target.style.fill = selectedColor;
}

function clearColor() {
  document.querySelectorAll("#fill path").forEach(path => {
    path.style.fill = "transparent";
    path.style.cursor = "pointer";
  });
  document.querySelector(".the_color").style.backgroundColor = "transparent";
}
