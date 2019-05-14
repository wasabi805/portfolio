

window.onload = function () {
   setCardLogos()
};


function setCardLogos() {
    for(var i =0; i < card_logo.length; i++){
        card_logo[i].src = card_logo[i].dataset.value
    }
}