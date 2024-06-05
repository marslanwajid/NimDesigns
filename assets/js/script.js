'use strict';



/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);



document.getElementById('resume-btn').addEventListener('click', function() {
  // The path to your CV file
  const cvPath = './assets/portfolio.pdf';
  
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = cvPath;
  link.download = 'Portfolio.pdf'; // The filename to use for the downloaded file

  // Append the anchor to the body
  document.body.appendChild(link);
  
  // Trigger the download by programmatically clicking the anchor
  link.click();
  
  // Remove the anchor from the document
  document.body.removeChild(link);
});
