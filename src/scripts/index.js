console.log('hello bro');

var mainWindow = document.getElementById('main');

var mainBgImg = document.getElementById('main-bg-img');
var blackBg = document.getElementById('black-bg');

var landingTitle = document.getElementById('title-index');

var blueLines = document.getElementById('blue-lines');
var tiles = document.getElementById('tiles');


//  GET STARTED HEADER
var getStarted = document.getElementById('get-started');

//  Controller Group
var controllerContainer = document.getElementById('controller-container');
var controllerShadow = document.getElementById('controller-shadow');


//  SNES buttons
var yBtn = '';
var xBtn = '';
var bBtn = '';
var aBtn = '';

//https://javascript.info/onload-ondomcontentloaded
(function hideStuff(){

    if(document.readyState === 'loading'){
        //Initial State for landing bg image background
        console.log("I'm hiding stuff");


        mainBgImg.classList.add('showIndexBg');
        blackBg.classList.add('hideIndexBg');



        // tiles.classList.add('hide-tiles');

        //Title INITIAL
        landingTitle.classList.add('title-index-initial');


        //GET STARTED HEADER
        getStarted.classList.add('hide-get-started-start');
        getStarted.classList.add('shrink');

        //CONTROLLER GROUP
        blueLines.classList.add('hide-controller-group-start');
        controllerContainer.classList.add('hide-controller-group-start');
        controllerShadow.classList.add('hide-controller-group-start');

    }
})();

//  ==========   Onscroll UP && DOWN   ==========
window.addEventListener('scroll', function () {
    const scrollYIndex = window.scrollY;
    console.log(scrollYIndex);

    if(scrollYIndex > 50){
        console.log('scroll me');

        //Crossfade Img
        mainBgImg.classList.add('hideIndexBg');
        mainBgImg.classList.remove('showIndexBg');

        //Title 01 of 04
        landingTitle.classList.remove('title-index-initial');
        landingTitle.classList.add('slideLeft');


        // tiles.classList.add('show-tiles');
        // tiles.classList.remove('hide-tiles');


        //SHOW GET STARTED HEADER
        getStarted.classList.add('show-get-started');
        getStarted.classList.remove('hide-get-started-start');
        getStarted.classList.remove('shrink');

        //SHOW Controller GROUP
        blueLines.classList.add('show-controller-group');
        controllerContainer.classList.add('show-controller-group');
        controllerShadow.classList.add('show-controller-group');

        blueLines.classList.remove('hide-controller-group');
        controllerContainer.classList.remove('hide-controller-group');
        controllerShadow.classList.remove('hide-controller-group');
    }

    //Title 02 of 04
    if(scrollYIndex<50){
        mainBgImg.classList.add('showIndexBg');
        mainBgImg.classList.remove('hideIndexBg');

        //HIDE GET STARTED HEADER
        getStarted.classList.add('hide-get-started');
        getStarted.classList.remove('show-get-started');
        getStarted.classList.add('shrink');


        //HIDE Controller GROUP
        blueLines.classList.add('hide-controller-group');
        controllerContainer.classList.add('hide-controller-group');
        controllerShadow.classList.add('hide-controller-group');

        blueLines.classList.remove('show-controller-group');
        controllerContainer.classList.remove('show-controller-group');
        controllerShadow.classList.remove('show-controller-group');


    }

    //Title 03 of 04
    if(landingTitle.className === 'slideLeft' && scrollYIndex<50){
        console.log('trigger the correct function now');
        landingTitle.classList.add('slideRight');
        landingTitle.classList.remove('slideLeft');
    }

    //Title 04 of 04
    if(landingTitle.className === 'slideRight slideLeft' && scrollYIndex>50){
        landingTitle.classList.remove('slideRight');
    }

});


//  ==========   On SNES Button Press    ==========

function snesRedirect(id) {
    console.log(id);

    let siteUrl = 'http://localhost:8080/';

    switch(id){

        case 'x': // x btn
            window.location.href =  siteUrl+'about';
            break;

        case 'a': // a btn
            window.location.href = siteUrl+'portfolio';
            break;

    }
}



