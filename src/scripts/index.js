console.log('hello bro');

var landingTitle = document.getElementById('title-index');
landingTitle.classList.add('title-index-initial');

var main= document.getElementById('main');
var about= document.getElementById('about');




var aboutLink = document.getElementById('about-link');
var about_link_sub_menu =document.getElementById('about-link-sub-menu');
about_link_sub_menu.classList.add('hide-sub-menu');
var show_about_area = document.getElementById('show-about-area');



show_about_area.addEventListener('mouseenter', function (e) {
    // console.log(e.clientX, 'this is e.clientX');
    // console.log(aboutLink.offsetLeft, 'offsetLeft');
    // console.log(e.y -  aboutLink.offsetTop, 'this is y')


    about_link_sub_menu.classList.remove('hide-sub-menu');
    about_link_sub_menu.classList.add('show-sub-menu');
});

(function setToTop() {
    if(document.readyState === 'loading'){
        scroll(0,0)
    }
})();


let preventBounce = ()=>{
    document.documentElement.style.overflow = 'hidden'
};


main.addEventListener('scroll', function (e) {
    const scrollYIndex = main.scrollY;
    console.log(scrollYIndex, 'from main');
});


var isAboutVisible = false;

//  ==========   Onscroll DOWN   ==========
window.addEventListener('scroll', function () {

    const scrollYIndex = window.scrollY;
    console.log(scrollYIndex);

    if(scrollYIndex > 40){

        if(isAboutVisible === false){
            // console.log('bring in the about page');

            isAboutVisible = true;
            landingTitle.classList.remove('title-index-initial');
            landingTitle.classList.add('slideLeft');
            main.classList.add('hideMain');


           setTimeout(()=>{
               scroll(0,0);
               main.style.display = "none";
               about.style.position = 'relative';

               //adds overflow hidden to the <html> to prevent "white" bounce
               preventBounce();


           }, 1000)
        }
    }
});


//  ==========   On SNES Button Press    ==========

function snesRedirect(id) {
    console.log(id);

    let siteUrl = 'http://localhost:8080/';

    switch(id){

        case 'y': // y btn
            window.location.href = siteUrl+'about/mixes';
            break;

        case 'x': // x btn
            window.location.href =  siteUrl+'about/heroes';
            break;

        case 'b': // b btn
            window.location.href =  siteUrl+'about/travel';
            break;

        case 'a': // a btn
            window.location.href = siteUrl+'';
            break;

    }
}




