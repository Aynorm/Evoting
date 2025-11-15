//wait 5 seconds, then show alert
setTimeout(() => {
  alert(
    "Welcome to VoteSmart! Your voice matters - and vote counts. Log in, explore the candidates, and make your choice with confidence. Secure. Simple. Transparent.  "
  );
}, 500000);

//Header side js
function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
//Nav js

//Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("count").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "EXPIRED";
  }
}, 1000);

// options for bars

import { topBar, leftBar, navBottom, desktopNav } from "./enavbarstandby.js";

//console.log(PI);
document.getElementById("topBar").innerHTML = topBar;
document.getElementById("leftBar").innerHTML = leftBar;
document.getElementById("navBottom").innerHTML = navBottom;
document.getElementById("desktopNav").innerHTML = desktopNav;

//side bar

/*var topNav =, leftBar, navBottom, topBar
  "<div class='butt'>\
    <button class='nav-btn'> Register </button>\
    <button class='nav-btn'> Login </button>\
  </div>\
  <div class='top-nav-hide'>\
  <h4>Hello,<span class='user'>Taleeb!</span><h4>\
  <img class='profile-img' src='ay passport.jpg' alt='Profile'>\
  </div >\
  "
document.getElementById("topNav").innerHTML = html;*/

//--------------

// const navTop =
//   "<div class='dsp-general'>\
//   <div class='div-dsp-logo'><img class='dsp-logo' src='real estate logo.png' alt='dsp-logo'><p class='p-logo'><a href='#'>E-Voting</a></p></div>\
//   <div class='div-dsp-btn'><a href='#'><button class='dsp-btn'>Sign in</button></a></div>\
//   </div>\
//   "

// document.getElementById("navTop").innerHTML = navTop;

// const html =
//   "<div class='js-general-nav'>\
//   <div class='div-dsp-logo stick'><img class='dsp-logo' src='pictures/real estate logo.png' alt='dsp-logo'><p class='p-logo'><a href='#'>E-Voting</a></p></div>\
//   <p> MENU </p>\
//    <div class='follow-us-div'>\
//     <ul class='sm-ul'>\
//   <li class='li-hover'> <img class='social-media-icon' src='ballot-box-voting-icon.webp' alt='voting'> <a href='https://aynorm.github.io/Evoting//edashboard'> Voting </a></li>\
//   <li class='li-hover'> <img class='social-media-icon' src='event calendar-icon.webp' alt='events'> <a href='#'> Events </a></li>\
//   <li class='li-hover'> <img class='social-media-icon' src='services hand-shake-icon.webp' alt='services'> <a href='https://aynorm.github.io/Evoting/eservices'> Services </a></li>\
//   <li class='li-hover'> <img class='social-media-icon' src='pricing hand-money-income-dollar-icon.webp' alt='pricing'> <a href='#'> Pricing </a></li>\
//   <li class='li-hover'> <img class='social-media-icon' src='about info-circle-line-icon.webp' alt='about'> <a href='https://aynorm.github.io/Evoting/eabout'> About </a></li>\
//   <li class='li-hover'> <img class='social-media-icon' src='contact headphone-icon.webp' alt='contact'> <a href='https://aynorm.github.io/Evoting/econtact'> Contact </a></li>\
//     </ul>\
//   </div>\
//   <p class='small-pad'> FOLLOW US </p>\
//   <div class='follow-us-div'>\
//   <ul class='sm-ul'>\
//   <li class='li-hover'> <img class='social-media-icon' src='9.twitter.png' alt='x'> <a href='#'> X(Twitter) </a></li>\
//   <li class='li-hover'> <img class='social-media-icon' src='7.facebook.png' alt='fb'> <a href='#'> Facebook </a></li>\
//   <li class='li-hover'> <img class='social-media-icon' src='8.instagram.png' alt='ig'> <a href='#'> Instagram</a></li>\
//   </ul >\
//   </div>\
//     </div>\
//     "

// document.getElementById("nav").innerHTML = html;

// //New Bottom Nav

// const navBottom =
//   "<div class='general-navBottom' >\
//   <ul class='ul-navBottom'>\
//   <li class='li-navBottom'>\
//   <a href='#'>\
//   <p>Events</p>\
//   <img class='icon-navBottom' src = 'event calendar-icon.webp' alt = 'events'>\
//   </a>\
//   </li>\
//   <li class='li-navBottom'>\
//     <a href='https://aynorm.github.io/Evoting/eservices'>\
//   <p>Services</p>\
//   <img class='icon-navBottom' src = 'services hand-shake-icon.webp' alt = 'services'>\
//     </a>\
//   </li>\
//   <li class='li-navBottom'>\
//     <a href='https://aynorm.github.io/Evoting//edashboard'>\
//   <p>Vote</p>\
//   <img class='icon-navBottom' src = 'ballot-box-voting-icon.webp' alt = 'voting'>\
//     </a>\
//   </li>\
//   </li>\
//   <li class='li-navBottom'>\
//    <a href='#'>\
//   <p>Pricing</p>\
//   <img class='icon-navBottom' src = 'pricing hand-money-income-dollar-icon.webp' alt = 'pricing'>\
//     </a>\
//   </li>\
//   <li class='li-navBottom'>\
//   <a href='https://aynorm.github.io/Evoting/eabout'>\
//   <p>About</p>\
//   <img class='icon-navBottom' src = 'about info-circle-line-icon.webp' alt = 'about'>\
//     </a>\
//   </li>\
//   </ul >\
//   </div >\
// "

// document.getElementById("navBottom").innerHTML = navBottom;
