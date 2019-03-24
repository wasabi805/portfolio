//MAP KEYBOARD for SNES Controller

//Map A button : code 65
document.addEventListener("keydown", function(event) {
    //can also use "keyPress"


    console.log(event.which); //find key-code:

    let pressed_button = event.which;
    //can use keyCode,

    let siteUrl = 'http://localhost:8080/';

    switch(pressed_button){

        case 72: // h btn : HOME
            window.location.href = siteUrl;
            console.log('home was pressed')



            break;

        case 88: // x btn
            window.location.href =  siteUrl+'about';
            break;

        case 65: // a btn
            window.location.href = siteUrl+'portfolio';
            break;

    };


});
