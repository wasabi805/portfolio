// window.location.pathname

var landingTitle = document.getElementById("title-index");
var about = document.getElementById("about");
var isAboutVisible = false;

console.log(prevLocation, "prevLocation");

console.log(indexURL, 'sup!!')

function initialLoad() {
  if (window.location.href === indexURL) {
    main_bg_img.classList.add("show");
    title_index.classList.add("fadeIn");
  }
}

function scrollToProject() {
  if (window.location.href === indexURL+"#projects") {
    setTimeout(() => {
      // alert('from the setTimeOut')

      main.style = "background: black; display: none";
      nav_bar.setAttribute("style", "opacity:1; top:0");
      about.style.position = "relative";

      console.log("hello");
      projects.scrollIntoView(true);
      window.scrollBy(0, -80);

      //adds overflow hidden to the <html> to prevent "white" bounce
    }, 2000);
  }
}

window.onload = function() {
  console.log(window.location.href, "window.location.href");
  initialLoad();
  scrollToProject();
};

function testToScrollTo() {
  console.log("i fired");
  window.location = "#projects";
}

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
      nav_bar.setAttribute("style", "opacity:1; top:0");

      setTimeout(() => {
        // scroll(0, 0);
        main.style.display = "none";
        about.style.position = "relative";
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
