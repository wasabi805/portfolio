//  The Header NavBar
var nav_bar = document.getElementById("nav-bar");
var about_link = document.getElementById("about-link");
var mixes_url = document.getElementById("mixes-url");

console.log(window.history, "window.history yo");
nav_bar.addEventListener("mouseenter", function(e) {
  console.log("i in now");
});

nav_bar.addEventListener("mouseleave", function(e) {
  console.log("i out now");
  nav_bar.classList.remove("slideNavBarDown");
  nav_tab.classList.remove("slideNavTabUp");
});

about_link.addEventListener("mouseenter", function(e) {
  about_link.style = "height : 180px";
});

about_link.addEventListener("mouseleave", function(e) {
  about_link.style = "height : 24px";
});
