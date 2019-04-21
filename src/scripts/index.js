
// window.location.pathname


var landingTitle = document.getElementById("title-index");
// landingTitle.classList.add("title-index-initial");

var main = document.getElementById("main");
var about = document.getElementById("about");


var isAboutVisible = false;

//  ==========   Onscroll DOWN   ==========
window.addEventListener("scroll", function() {

  const scrollYIndex = window.scrollY;
  // console.log(scrollYIndex);

  if (scrollYIndex > 40) {
    if (isAboutVisible === false) {
      // console.log('bring in the about page');

      isAboutVisible = true;
      landingTitle.classList.remove("title-index-initial");
      landingTitle.classList.add("slideLeft");
      main.classList.add("hideMain");
      nav_bar.setAttribute("style", "opacity:1; top:0")

      setTimeout(() => {
        scroll(0, 0);
        main.style.display = "none";
        about.style.position = "relative";

        //adds overflow hidden to the <html> to prevent "white" bounce

      }, 1000);
    }
  }
});



//  ==========   On SNES Button Press    ==========

function snesRedirect(id) {

  switch (id) {
    case "y": // y btn
      window.location.href = "/about/mixes";
      break;

    case "x": // x btn
      window.location.href = "";
      break;

    case "b": // b btn
      window.location.href = "/about/travel";
      break;

    case "a": // a btn
      window.location.href = "";
      break;
  }
}

//---------------------------------------------------

