// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// //Typing animation
var typed = new Typed(".typing", {
  strings: ["Developer","Azure Engineer","QA Engineer"],
  // strings: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true
});

// Side NavIgation Menu JS Code (Burger menu)
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let toggle = document.querySelector(".toggle-btn");
const theme = document.querySelector("#theme-link");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  // body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
  toggle.style.opacity="0";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  // body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
  toggle.style.opacity="1";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

const chk = document.getElementById('chk');
var element = document.getElementsByClassName('about');

chk.addEventListener('change',() => {

  if(chk.checked == true){
    // if(theme.getAttribute("href") == "light-theme-style.css"){
      //switch to dark theme
      theme.href = "style(dark).css";
    // }
  }
  else{
    theme.href = "style(light).css";
  }

});


//Copyright Year Auto Update

// $(document).ready(function(){
//   $('.autoyearupdate').text(newDate().getFullYear());
// });

// window.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelector('.autoyearupdate').innerHTML = newDate().getFullYear();
// })