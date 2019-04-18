// Tab to Show NavBar
let nav_tab = document.getElementById('nav-tab');

nav_tab.addEventListener('mouseenter', function (e) {
    console.log('im in');

    nav_tab.classList.add('slideNavTabUp');
    nav_bar.classList.add('slideNavBarDown')
});