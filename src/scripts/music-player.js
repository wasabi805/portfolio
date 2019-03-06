console.log('this is the music player');


function Track(name){
    this.name = name;

    return new Audio(`../audio/${this.name}.mp3`);
}



let audio01  = new Track('HopPopMarch2019');
let audio02 = new Track('thx-sound-test');

console.log(audio01);


//==========    Define Handlers    ==========
//NOTE : for more mixes will need to loop through and select each track - 7:50
let seekBar01 = document.getElementById('seek-bar-01');
let seekBar02 = document.getElementById('seek-bar-02');
let tracks = document.querySelector('.tracks');

//allows nested fa icon to perform pause and play
let playButton01 = document.getElementById('play-01');
let playButton02 = document.getElementById('play-02');
let playButtonIcon01 = playButton01.querySelector('i');


let fillBar01 = document.querySelector('.fill-01');
let fillBar02 = document.querySelector('.fill-02');


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

//update fill bar as track time elapses
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





seekBar01.addEventListener('mousedown', function (e) {
    mouseDown = true;

    function Data(clientX,  offsetLeft) {
        this.clientX =  e.clientX;
        this.offsetLeft = seekBar01.offsetLeft;
        this.clientWidth = seekBar01.clientWidth + 'px'
    }

    var clues = new Data();


    console.log(tracks.offsetLeft)
    console.log(clues)


    // let p = (e.clientX - seekBar01.offsetLeft) / seekBar01.clientWidth; //400px

    let p = (e.clientX - (tracks.offsetLeft + 100)) / seekBar01.clientWidth; //400px

    p = clamp(0, p,1);




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



    // let p = (e.clientX - seekBar01.offsetLeft) / seekBar01.clientWidth; //400px

    let p = (e.clientX - (tracks.offsetLeft + 100)) / seekBar01.clientWidth; //400px
    p = clamp(0, p,1);

    fillBar01.style.width = p * 100 + '%';

});


seekBar01.addEventListener('mouseup' , function (e) {
   if(!mouseDown) return;

   mouseDown = false;

    // let p = (e.clientX - seekBar01.offsetLeft) / seekBar01.clientWidth; //400px

    let p = (e.clientX - (tracks.offsetLeft + 100)) / seekBar01.clientWidth; //400px
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