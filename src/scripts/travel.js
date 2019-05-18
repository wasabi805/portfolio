var tapMenu = getElemById("tap-menu");
var galleryTravel = getElemById("gallery-travel");
const travel = getElemById("travel");

const gallery_travel = querySelectElem(".gallery-travel");

//default : hide nav
gallery_travel.style = "left:-267px";

setImages([gallery_travel_image]);

//Hide and show CSS classes for images
const HideImage = el => el.classList.add("isHidden");
const RemoveHide = el => el.classList.remove("isHidden");

const ShowImage = el => el.classList.add("isShowing");
const RemoveShow = el => el.classList.remove("isShowing");

//renders a spinner until image is completed
function onImageLoadedComplete(imageCollection) {
  //loop through collection
  for (var i = 0; i < imageCollection.length; i++) {
    if (imageCollection[i].complete) {
      console.log("im complete");
    } else {
      console.log("not completed");
    }
  }
}

onImageLoadedComplete(gallery_travel_image);

//                  onClick Gallery Thumbnail  LOGIC

//Set both Images to hidden
const animateImgA = querySelectElem("#animate-img-a");
const animateImgB = querySelectElem("#animate-img-b");
const textTravel = querySelectElem(".text-travel");

HideImage(animateImgA); //default: don't show image
HideImage(animateImgB); //default: don't show image

//attach to all thumbnails,
const loadImg = id => {
  // let pullImage;
  let findByClickedId = id;

  const retrieveImg = async clickId => {
    // console.log("The clicked ID is : ", clickId);
    console.log(currentScreenWidth, 'from the btn click')

    const response = await fetch("/state");
    let state = await response.json(); //extract JSON from the http response
    // do something with myJson

    let StateImages = state.gallery_col; //shorten for logic below

    for (var i = 0; i < StateImages.length; i++) {
      if (StateImages[i].id === clickId) {

        var image = StateImages[i];

        var header = image.header;
        var header_pos = image.header_pos;
        var location = image.location;
        var src = image.src;
        var header_style = image.header_style;
        var sub_header_style = image.sub_header_style;
        var context_title = image.context_title;
        var context = image.context;
        var style = image.style;
        var font_size;
        var width;
        var mobile_header_style = image.mobile_header_style;
        var mobile_header_pos = image.mobile_header_pos;


        //sets the font for mobile and tablet
        if(currentScreenWidth < 1024){
          style = "";
          font_size = 'font-size : 18px;';
          width = 'width : initial; padding 0 1em';
          header_style = mobile_header_style;
          header_pos = 'position: initial;padding:';
        }


        innerHTMLString = `<div class="image-wrapper"> <header class="image-wrapper__header" style="${header_pos}" ><h1 style="${header_style}" >${header}</h1> 
                <p style="${sub_header_style}">${location}</p> </header>     
                <img id="current-img-displayed" src=${src} alt=''> 
            </div>`;

        var content = `<div class="text-travel__content" style="${style} ${font_size} ${width} "><h3>"${context_title}"</h3>
                <p> ${context}</p>
            </div> `;

        //Stage 1
        if (animateImgA.classList.contains("isHidden")) {
          querySelectElem(".initial-content").style = "display : none";
          animateImgA.innerHTML = innerHTMLString;
          textTravel.innerHTML = content;

          setTimeout(function() {
            HideImage(animateImgB);
            RemoveShow(animateImgB);
            ShowImage(animateImgA);
            RemoveHide(animateImgA);
          }, 100);

          //Prevent Gap on Bottom
          getElemById("animate-img-a").style = "display: block;";
          getElemById("animate-img-b").style = "display: none;";
        }

        //Stage2:
        if (animateImgA.classList.contains("isShowing")) {
          querySelectElem(".initial-content").style = "display : none";
          getElemById("animate-img-b").innerHTML = innerHTMLString;
          textTravel.innerHTML = content;

          setTimeout(function() {
            HideImage(animateImgA);
            RemoveShow(animateImgA);
            ShowImage(animateImgB);
            RemoveHide(animateImgB);
          }, 100);

          //Prevent Gap on Bottom
          getElemById("animate-img-b").style = "display: block;";
          getElemById("animate-img-a").style = "display: none;";
        }

      }
    }
  };



  retrieveImg(findByClickedId);
};

function handleImgClick(id) {
  loadImg(id);
}

//                 SHOW GALLERY LOGIC
//          On HOVER LEFT SIDE OF THE SCREEN, ShOW GALLERY

gallery_travel.addEventListener("mouseover", function() {
  gallery_travel.style = "left:0px";
  document.body.style = "overflow: hidden;";
});

gallery_travel.addEventListener("mouseout", function() {
  gallery_travel.style = "left:-267px";
  document.body.style = "overflow: initial;";
});
