var tapMenu = getElemById('tap-menu');
var galleryTravel = getElemById("gallery-travel");
const travel = getElemById("travel");

const gallery_travel = querySelectElem(".gallery-travel");

//default : hide nav
gallery_travel.style = "left:-267px";

//state obj for images and text
const images = [
  {
    id: "1",
    src: "https://i.ibb.co/4g2CVWz/IMG-20190224-170820.jpg",
    header: "NASA",
    location: "Cape Canaveral , FL",
    title: "Mars Rover Prototype",
    text:
      "Meet the newest concept vehicle designed for navigating the demanding landscape of Mars: the Mars Rover Vehicle Navigator®, or MRVN®. Based on NASA science, the next generation of space explorers could be traveling and working in a high-tech mobile laboratory similar to this rover vehicle. MRVN is an impressive size with its mobile lab, and has massive wheels designed to travel over dunes, rocks and craters. MRVN can often be seen at its permanent home at the visitor complex when it is not on a mission. ",
    style: ""
  },
  {
    id: "2",
    src: "https://i.ibb.co/SB3GDvx/IMG-20190222-185550.jpg",
    header: "Magic Kingdom",
    location: "Orlando , FL",
    title: "Cinderella's Castle",
    text:
      "Cinderella Castle welcomes you to a magical world where dreams come true. The 189-foot landmark boasts lofty spires and ornate turrets and is the gateway to Fantasyland. Surrounded by a tranquil moat, the grounds offer an array of picture-perfect photo ops. Explore lush lawns, gardens and Cinderella’s own wishing well.   "
  },
  {
    id: "3",
    src: "https://i.ibb.co/sFhDvRr/MAXX-PINK.png",
    header: "The Maxx",
    location: "",
    text: ""
  },
  {
    id: "4",
    src: "https://i.ibb.co/k2X6ctX/IMG-20190224-155314.jpg",
    header: "NASA",
    location: "Cape Canaveral , FL",
    text: ""
  },
  {
    id: "5",
    src: "https://i.ibb.co/VqS8Ryz/IMG-20190224-160733.jpg",
    header: "NASA",
    location: "Cape Canaveral , FL",
    text: ""
  },
  {
    id: "6",
    src: "https://i.ibb.co/VpBRMBK/IMG-20190224-141013.jpg",
    header: "NASA",
    location: "Cape Canaveral , FL",
    text: ""
  },
  {
    id: "7",
    src: "https://i.ibb.co/Lgc9bfF/IMG-20190224-152505.jpg",
    header: "NASA",
    location: "Cape Canaveral , FL",
    text: ""
  },
  {
    id: "8",
    src: "https://i.ibb.co/VD4gFTg/IMG-20190224-142143.jpg",
    header: "NASA",
    location: "Cape Canaveral , FL",
    text: ""
  },
  {
    id: "9",
    src: "https://i.ibb.co/RDdXMLL/Seek-Png-com-gorillaz-png-2405094.png",
    header: "",
    location: "",
    text: ""
  },
  {
    id: "10",
    src: "https://i.ibb.co/fvQWNzX/IMG-20190224-161115.jpg",
    header: "Nasa",
    location: "",
    text: ""
  },
  {
    id: "11",
    src: "https://i.ibb.co/9vwXWfB/noodle-phase-1-by-xxsuperfire-d6n548q.png",
    location: "",
    text: ""
  },
  {
    id: "12",
    src: "https://i.ibb.co/L5qpRcd/20171103-104405.jpg",
    header: "Monterey Bay Aquarium ",
    location: "",
    text: ""
  },
  {
    id: "13",
    src: "https://i.ibb.co/4F64f90/20171103-110742.jpg",
    header: "",
    location: "",
    text: ""
  },
  {
    id: "14",
    src: "https://i.ibb.co/RypCh7w/20171103-104736.jpg",
    header: "",
    location: "",
    text: ""
  }
];


const HideImage =(el)=> el.classList.add('isHidden');
const RemoveHide = (el)=> el.classList.remove('isHidden');

const ShowImage =(el)=> el.classList.add('isShowing');
const RemoveShow = (el)=> el.classList.remove('isShowing');

//                  onClick Gallery Thumbnail  LOGIC

//Set both Images to hidden
const animateImgA = querySelectElem('#animate-img-a');
const animateImgB = querySelectElem("#animate-img-b");
const textTravel = querySelectElem(".text-travel");

HideImage(animateImgA); //default: don't show image
HideImage(animateImgB); //default: don't show image


//attach to all thumbnails,
const loadImg = id => {
  let pullImage;

  // GETS THE IMG DATA FROM STATE
  for (var i = 0; i < images.length; i++) {
    if (images[i].id === id) {
      pullImage = images[i];
    }
  }

  //creates img DOM element && img TITLE
  let innerHTMLString = `<div class="image-wrapper"> <header class="image-wrapper__header"><h1>${
    pullImage.header
  }</h1 <p>${pullImage.location}</p> </header>     <img src=${
    pullImage.src
  } alt=''> </div>`;

  let content = `<div class="text-travel__content"><h3>${pullImage.title}</h3>
            <p> ${pullImage.text}
            </p></div> `;

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
