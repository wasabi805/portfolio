console.log('hello bro');


var mainWindow = document.getElementById('main');

var mainBgImg = document.getElementById('main-bg-img');
var blackBg = document.getElementById('black-bg');

var landingTitle = document.getElementById('title-index');

//Initial State for landing bg image background
mainBgImg.classList.add('showIndexBg');
blackBg.classList.add('hideIndexBg');

//Title INITIAL
landingTitle.classList.add('title-index-initial');

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
        landingTitle.classList.add('slideLeft')
    }

    //Title 02 of 04
    if(scrollYIndex<50){
        mainBgImg.classList.add('showIndexBg');
        mainBgImg.classList.remove('hideIndexBg');
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




