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


function routeTo(id) {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);

    switch (id) {

        case 'about_url':
            console.log(history)
            window.location.hash = '#personal'
            break;
        case 'contact_url':
            window.location.replace(window.location.href+'contact');

            break
    }

}

