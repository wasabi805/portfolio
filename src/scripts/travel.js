
//state obj for images and text
var images = [
    {id: '1' , src: "https://i.ibb.co/4g2CVWz/IMG-20190224-170820.jpg", text: 'This is the concept mars rover' },
    {id: '2' , src: "https://i.ibb.co/SB3GDvx/IMG-20190222-185550.jpg", text: "This is the Disney's Magic Kingdom "},
    {id: '3' , src: "https://i.ibb.co/sFhDvRr/MAXX-PINK.png", text: '' },
    {id: '4' , src: "https://i.ibb.co/k2X6ctX/IMG-20190224-155314.jpg", text: '' },
    {id: '5' , src: "https://i.ibb.co/VqS8Ryz/IMG-20190224-160733.jpg", text: '' },
    {id: '6' , src: "https://i.ibb.co/VpBRMBK/IMG-20190224-141013.jpg", text: '' },
    {id: '7' , src: "https://i.ibb.co/Lgc9bfF/IMG-20190224-152505.jpg", text: '' },
    {id: '8' , src: "https://i.ibb.co/VD4gFTg/IMG-20190224-142143.jpg", text: '' },
    {id: '9' , src: "https://i.ibb.co/RDdXMLL/Seek-Png-com-gorillaz-png-2405094.png", text: '' },
    {id: '10' , src: "https://i.ibb.co/fvQWNzX/IMG-20190224-161115.jpg", text: '' },
    {id: '11' , src: "https://i.ibb.co/9vwXWfB/noodle-phase-1-by-xxsuperfire-d6n548q.png", text: '' },
    {id: '12' , src: "https://i.ibb.co/L5qpRcd/20171103-104405.jpg", text: '' },
    {id: '13' , src: "https://i.ibb.co/4F64f90/20171103-110742.jpg", text: '' },
    {id: '14' , src: "https://i.ibb.co/RypCh7w/20171103-104736.jpg", text: '' },
];


//                  onClick Gallery Thumbnail  LOGIC

//Set both Images to hidden
var animateImgA = document.querySelector('#animate-img-a');
animateImgA.classList.add('isHidden');

var animateImgB = document.querySelector('#animate-img-b');
animateImgB.classList.add('isHidden');


//attach to all thumbnails,
const loadImg = (id) =>{
    let pullImage;

    // GETS THE IMG DATA FROM STATE
    for (var i=0; i<images.length; i++){
        if(images[i].id === id){
            pullImage = images[i]
        }
    }

    //creates img DOM element
    innerHTMLString = `<div class="wuTang"> <img src=${pullImage.src} alt=''></div>`;

    //Stage 1
    if(animateImgA.classList.contains("isHidden")){

        console.log('stage1 triggered');

        const clientHeight = document.querySelector('.modal-travel');
        console.log(clientHeight.clientHeight);


        document.querySelector('#animate-img-a').innerHTML = innerHTMLString;
        setTimeout(function(){
            animateImgB.classList.remove('isShowing');
            animateImgB.classList.add("isHidden");

            animateImgA.classList.remove('isHidden');
            animateImgA.classList.add("isShowing");

        },200);
    }

    //Stage2:
    if(animateImgA.classList.contains("isShowing")){

        console.log('stage2 triggered');
        const clientHeight = document.querySelector('.modal-travel');

        animateImgA.classList.remove('isShowing');
        animateImgA.classList.add("isHidden");


        setTimeout(function(){
            document.querySelector('#animate-img-b').innerHTML = innerHTMLString;
            animateImgB.classList.remove('isHidden');
            animateImgB.classList.add("isShowing");

        },200);
    }
};

//                 SHOW GALLERY LOGIC
//          On HOVER LEFT SIDE OF THE SCREEN, ShOW GALLERY

tapMenu = document.getElementById('tap-menu');
galleryTravel = document.getElementById('gallery-travel');

window.addEventListener('mousemove', function (e) {
    console.log(e)
//
}); //the object contains x & y cords


tapMenu.addEventListener('mouseenter', function () {
    galleryTravel.classList.add('showMeTheMoney') // make left: 0px

});

tapMenu.addEventListener('mouseleave', function () {
    galleryTravel.classList.remove('showMeTheMoney') //make left: -val

});




