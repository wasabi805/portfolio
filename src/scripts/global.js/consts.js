const screenWidth = screen.width;
const screenHeight = screen.height;

const projectList = {
    isDevConOpen: false,
    isDomNomsOpen: false,
    isVincePhotoOpen: false,
    isSbSitOpen: false
};


//ABOUT SECTION
var arsenal = document.getElementById("arsenal");
var projects = document.getElementById('projects');

var abilities_container = document.getElementById("abilities-container");
var abilities_item = document.getElementsByClassName("abilities-item");

var project_item__icon = document.getElementsByClassName("project-item__icon");
var project_item__show = document.getElementsByClassName("project-item__show");


var row_project = document.getElementsByClassName("row-project");

var wu_tang = document.getElementsByClassName('wu-tang');

var conversation_icon = document.getElementById('conversation-icon')
const faArrows = document.getElementsByClassName('fa-angle-down');


//Mixes Section

console.log('this is the music player');


function Track(name){
    this.name = name;

    return new Audio(`../audio/${this.name}.mp3`);
}

let audio01  = new Track('HopPopMarch2019');
let audio02 = new Track('05_Silk_City_and_Dua_Lipa-Electricity_Xplicid_and_Mikol_Angelo_Remix_Extended');

console.log(audio01);


//==========    Define Handlers    ==========
let seekBar01 = document.getElementById('seek-bar-01');
let seekBar02 = document.getElementById('seek-bar-02');
let tracks = document.querySelector('.tracks');

//allows nested fa icon to perform pause and play
let playButton01 = document.getElementById('play-01');
let playButton02 = document.getElementById('play-02');
let playButtonIcon01 = playButton01.querySelector('i');


let fillBar01 = document.querySelector('.fill-01');
let fillBar02 = document.querySelector('.fill-02');

//Elapsed time on mixes targets this dom : playing a track injects elapsed time into this DOM element's pseudo elem.
let track_01_title = document.getElementsByClassName('track-01-title');

