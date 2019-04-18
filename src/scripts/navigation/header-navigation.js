

//  The Header NavBar
let nav_bar = document.getElementById('nav-bar');


nav_bar.addEventListener('mouseenter', function (e) {
    console.log('i in now')
});

nav_bar.addEventListener('mouseleave', function (e) {
    console.log('i out now');
    nav_bar.classList.remove('slideNavBarDown');
    nav_tab.classList.remove('slideNavTabUp')
});




