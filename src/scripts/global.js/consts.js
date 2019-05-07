var screenWidth = screen.width;
var screenHeight = screen.height;
var textBoxWidth;
var textBoxHeight = 0;
var imgWrapperHeight;

const site = window.location;

function getElemById(id) {
  return document.getElementById(`${id}`);
}

function getElemByClass(className) {
  return document.getElementsByClassName(`${className}`);
}

const querySelectElem = el => document.querySelector(el);

const projectList = {
  isDevConOpen: false,
  isDomNomsOpen: false,
  isVincePhotoOpen: false,
  isSbSitOpen: false
};

//Site URLS
const prevLocation = document.referrer;

// const indexURL = site.protocol + "//" + site.hostname + ":" + site.port + "/";
// const mixesURL =
//   site.protocol + "//" + site.hostname + ":" + site.port + "/about/mixes";

//  Use when Deploying
const indexURL =
  window.location.protocol + "//" + site.hostname + "/";
const mixesURL =
  window.location.protocol + "//" + site.hostname + "/about/mixes";

//LANDING BACKGROUND
const main = getElemById("main");
var main_bg_img = getElemById("main-bg-img");
var title_index = getElemById("title-index");

//ABOUT SECTION
var about = getElemById("about");
const arsenal = getElemById("arsenal");
const projects = getElemById("projects");
const personal = getElemById("personal");

const abilities_container = getElemById("abilities-container");
const abilities_item = getElemByClass("abilities-item");

const project_item__icon = getElemByClass("project-item__icon");
const project_item__show = getElemByClass("project-item__show");

const project_item__container__text = getElemByClass(
  "project-item__container__text"
);
const project_item__container__img_wrapper = getElemByClass(
  "project-item__container__img-wrapper"
);

const row_project = getElemByClass("row-project");

const wu_tang = getElemByClass("wu-tang");

const conversation_icon = getElemById("conversation-icon");
const faArrows = getElemByClass("fa-angle-down");

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
const seekBar01 = getElemById("seek-bar-01");
const seekBar02 = getElemById("seek-bar-02");
const tracks = document.querySelector(".tracks");

//allows nested fa icon to perform pause and play
const playButton01 = getElemById("play-01");
const playButton02 = getElemById("play-02");

const fillBar01 = querySelectElem(".fill-01");
const fillBar02 = querySelectElem(".fill-02");

//Elapsed time on mixes targets this dom : playing a track injects elapsed time into this DOM element's pseudo elem.
const track_01_title = getElemByClass("track-01-title");
