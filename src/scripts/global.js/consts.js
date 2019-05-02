var screenWidth = screen.width;
var screenHeight = screen.height;
var textBoxWidth;
var textBoxHeight = 0;
var imgWrapperHeight;

const projectList = {
  isDevConOpen: false,
  isDomNomsOpen: false,
  isVincePhotoOpen: false,
  isSbSitOpen: false
};

//Site URLS
const prevLocation = document.referrer;

const indexURL =
  window.location.protocol +
  "//" +
  window.location.hostname +
  ":" +
  window.location.port +
  "/";
const mixesURL =
  window.location.protocol +
  "//" +
  window.location.hostname +
  ":" +
  window.location.port +
  "/about/mixes";

//LANDING BACKGROUND
var main = document.getElementById("main");
var main_bg_img = document.getElementById("main-bg-img");
var title_index = document.getElementById("title-index");

//ABOUT SECTION
var about = document.getElementById("about");
const arsenal = document.getElementById("arsenal");
const projects = document.getElementById("projects");
const personal = document.getElementById("personal");

const abilities_container = document.getElementById("abilities-container");
const abilities_item = document.getElementsByClassName("abilities-item");

const project_item__icon = document.getElementsByClassName(
  "project-item__icon"
);
const project_item__show = document.getElementsByClassName(
  "project-item__show"
);
const project_item__container__text = document.getElementsByClassName(
  "project-item__container__text"
);
const project_item__container__img_wrapper = document.getElementsByClassName(
  "project-item__container__img-wrapper"
);

const row_project = document.getElementsByClassName("row-project");

const wu_tang = document.getElementsByClassName("wu-tang");

const conversation_icon = document.getElementById("conversation-icon");
const faArrows = document.getElementsByClassName("fa-angle-down");

Object.values(project_item__container__text).forEach(textBox => {
  textBoxWidth = window.getComputedStyle(textBox).getPropertyValue("width");

  textBoxHeight = window.getComputedStyle(textBox).getPropertyValue("height");

  //strip px from textBoxWidth...
  let textBoxWidthStripped = parseInt(textBoxWidth, 10);
  let reSized = Math.floor(textBoxWidthStripped * (1 / 10));

  //  now add the style...
  wu_tang.style = `font-size:${reSized}px`;

});

Object.values(project_item__container__img_wrapper).forEach(img_wrapper => {
  imgWrapperHeight = window
    .getComputedStyle(img_wrapper)
    .getPropertyValue("height");

  // console.log(imgWrapperHeight, "imgWrapperHeight");
});

//Mixes Section
function Track(name) {
  this.name = name;
  return new Audio(`../audio/${this.name}.mp3`);
}

const audio01 = new Track("HopPopMarch2019");
const audio02 = new Track(
  "05_Silk_City_and_Dua_Lipa-Electricity_Xplicid_and_Mikol_Angelo_Remix_Extended"
);

//==========    Define Handlers    ==========
const seekBar01 = document.getElementById("seek-bar-01");
const seekBar02 = document.getElementById("seek-bar-02");
const tracks = document.querySelector(".tracks");

//allows nested fa icon to perform pause and play
const playButton01 = document.getElementById("play-01");
const playButton02 = document.getElementById("play-02");

const fillBar01 = document.querySelector(".fill-01");
const fillBar02 = document.querySelector(".fill-02");

//Elapsed time on mixes targets this dom : playing a track injects elapsed time into this DOM element's pseudo elem.
const track_01_title = document.getElementsByClassName("track-01-title");

