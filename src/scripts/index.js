
var landingTitle = document.getElementById("title-index");
var about = document.getElementById("about");
var isAboutVisible = false;

function initialLoad() {
  if (site.href === indexURL) {
    bg_img.classList.add("show");
    title_index.classList.add("fadeIn");
    scroll_down_container.classList.add("fadeIn02");
    black_bg.style = "opacity : .3";
    console.log(scroll_down_container, "what is this?");
  }else {
    lds_roller[0].style = "opacity: 1"
  }
}

function scrollToProject() {
  if (site.href === indexURL + "#projects") {
    setTimeout(() => {
      landing.style = "background: black; display: none";
      nav_bar.setAttribute("style", "opacity:1; top:0");
      about.style.position = "relative";

      console.log("handles scroll position for Projects on nav header");
      projects.scrollIntoView(true);
      window.scrollBy(0, -140);
    }, 2000);
  }
}

function insertProfilePic() {
  console.log(profile_img, "what is profile_img????????????");
  profile_img.src = profile_img.dataset.value
}

function insertProjectId() {
  for(var i=0; i<project_item__icon.length; i++){
    project_item__icon[i].id = project_item__icon[i].dataset.value
  }
}

function insertProjectPic(){ //This is to get around placing src's with Handlebars
  for(var i =0; i<project_pic.length; i++){
    project_pic[i].src = project_pic[i].dataset.value
  }
}
function insertProjectUrl(){
  for(var i=0; i<project_url.length; i++){
    project_url[i].href = project_url[i].dataset.value
  }
}

window.onload = function() {
  console.log(window.location.href, "window.location.href");
  initialLoad();
  scrollToProject();
  insertProfilePic();
  insertProjectId();
  insertProjectUrl();
  insertProjectPic();

};

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
      landing.classList.add("hideMain");
      nav_bar.setAttribute("style", "opacity:1; top:0");

      setTimeout(() => {
        // scroll(0, 0);
        landing.style.display = "none";
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
      window.location.href = "/about/acba";
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
