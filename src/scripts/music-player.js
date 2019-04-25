
console.log('this is the music player');

let playButtonIcon01 = playButton01.querySelector('i');


//==========    Clamps   ==========

// let p = audio01.currentTime / audio01.duration;

//==========    PLAY BUTTON FUNCTIONALITY   ==========
playButton01.addEventListener('click', function () {

    console.log('btn1')
    //these are predefined in js lib
    if(audio01.paused){
        audio01.play();
        audio02.currentTime = 0;
        audio02.pause();


    }else{
        audio01.pause();
    }
});

playButton02.addEventListener('click', function () {
    console.log('btn2')
    //these are predefined in js lib
    if(audio02.paused){
        audio02.play();
        audio01.currentTime = 0;
        audio01.pause();
    }else{
        audio02.pause();
    }
});


//Toggle play and pause
audio01.addEventListener('play', function () {
    playButtonIcon01.className='far fa-play-circle icon-pause';
});

audio01.addEventListener('pause', function () {
    playButtonIcon01.className='far fa-play-circle icon-play';
});


// ==========   Traverse Track  =========

// update fill bar as track time elapses
audio01.addEventListener('timeupdate', function () {
    let p = audio01.currentTime / audio01.duration;
    fillBar01.style.width = p * 100 + '%'

});

audio02.addEventListener('timeupdate', function () {
    let p = audio02.currentTime / audio02.duration;

    fillBar02.style.width = p * 100 + '%'

});


// ==========   Make Marker Drag-able  =========
let mouseDown = false;

//helper for func seekBar01.addEventListener('mousedown',....)
function clamp(min, val, max){
    return Math.min( Math.max(min , val), max)
}

function getP(e){
    let p = (e.clientX - (seekBar01.offsetLeft)) / seekBar01.clientWidth ; //400px
    return p;
}



seekBar01.addEventListener('mousedown', function (e) {
    mouseDown = true;

    let p = (e.clientX - (tracks.offsetLeft + 125)) / seekBar01.clientWidth; //400px
    // let p = getP(e);
    p = clamp(0,p,1);



    fillBar01.style.width = p * 100 + '%' //fill the status bar with elapsed track progress
});

seekBar02.addEventListener('mousedown', function (e) {
    mouseDown = true;


    p = clamp(0, p,1);

    fillBar02.style.width = p * 100 + '%' //fill the status bar with elapsed track progress
});


//==========    Jump Track based on marker  ==========

seekBar01.addEventListener('mousemove', function (e) {

    if(!mouseDown) return;


    let p = (e.clientX - (tracks.offsetLeft  + 125)) / seekBar01.clientWidth; //400px
    p = clamp(0, p,1);

    fillBar01.style.width = p * 100 + '%';

});


window.addEventListener('mouseup' , function (e) {
   if(!mouseDown) return;

   mouseDown = false;

    // let p = (e.clientX - seekBar01.offsetLeft) / seekBar01.clientWidth; //400px

    let p = (e.clientX - (tracks.offsetLeft + 125)) / seekBar01.clientWidth; //400px
    p = clamp(0, p,1);

    audio01.currentTime =p * audio01.duration

});

//----  ---


seekBar02.addEventListener('mousemove', function (e) {

    if(!mouseDown) return;

    let p = (e.clientX - seekBar02.offsetLeft) / seekBar02.clientWidth;
    p = clamp(0, p,1);

    fillBar02.style.width = p * 100 + '%';

});

seekBar02.addEventListener('mouseup' , function (e) {

    if(!mouseDown) return;
    mouseDown = false;

    let p = (e.clientX - seekBar02.offsetLeft) / seekBar02.clientWidth;
    p = clamp(0, p,1);

    audio02.currentTime =p * audio02.duration

});



