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
  for(var i=0; i<imageCollection.length; i++){

    if(imageCollection[i].complete){
      console.log('im complete')
    }else{
      console.log('not completed')
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
  console.log('i still function!!' , id);
  // let pullImage;
  let findByClickedId = id;

  const retrieveImg = async (clickId)=>{
    console.log('The clicked ID is : ', clickId);

    const response = await fetch('/state');
    let state = await response.json(); //extract JSON from the http response
    // do something with myJson

    let StateImages = state.gallery_col; //shorten for logic below

    for(var i=0; i<StateImages.length; i++) {
      if(StateImages[i].id === clickId){
        // alert(state.gallery_col[i].name)
        let header = StateImages[i].header;
        let location = StateImages[i].location;
        let src = StateImages[i].src;

        innerHTMLString =
            `<div class="image-wrapper"> <header class="image-wrapper__header"><h1>${header}</h1> 
                <p>${location}</p> </header>     
                <img src=${src} alt=''> 
            </div>`;

        let content =
            `<div class="text-travel__content"><h3>"Show a title"</h3>
                <p> SHow some text</p>
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



  //creates img DOM element && img TITLE
  // let innerHTMLString = `<div class="image-wrapper"> <header class="image-wrapper__header"><h1>${
  //   pullImage.header
  // }</h1 <p>${pullImage.location}</p> </header>     <img src=${
  //   pullImage.src
  // } alt=''> </div>`;

  // let content = `<div class="text-travel__content"><h3>${pullImage.title}</h3>
  //           <p> ${pullImage.text}
  //           </p></div> `;

  //Stage 1
  // if (animateImgA.classList.contains("isHidden")) {
  //   querySelectElem(".initial-content").style = "display : none";
  //   animateImgA.innerHTML = innerHTMLString;
  //   textTravel.innerHTML = content;
  //
  //   setTimeout(function() {
  //     HideImage(animateImgB);
  //     RemoveShow(animateImgB);
  //     ShowImage(animateImgA);
  //     RemoveHide(animateImgA);
  //   }, 100);
  //
  //   //Prevent Gap on Bottom
  //   getElemById("animate-img-a").style = "display: block;";
  //   getElemById("animate-img-b").style = "display: none;";
  // }

  // //Stage2:
  // if (animateImgA.classList.contains("isShowing")) {
  //   querySelectElem(".initial-content").style = "display : none";
  //   getElemById("animate-img-b").innerHTML = innerHTMLString;
  //   textTravel.innerHTML = content;
  //
  //   setTimeout(function() {
  //     HideImage(animateImgA);
  //     RemoveShow(animateImgA);
  //     ShowImage(animateImgB);
  //     RemoveHide(animateImgB);
  //   }, 100);
  //
  //   //Prevent Gap on Bottom
  //   getElemById("animate-img-b").style = "display: block;";
  //   getElemById("animate-img-a").style = "display: none;";
  // }
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
  document.body.style = "overflow: scroll;";
});
