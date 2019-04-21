
console.log('hello')
var showHeight;


function repeatOften() {
  //      screen size
  const screenWidth = (function() {
    return screen.width;
  })();

    const screenHeight = (function() {
        return screen.height;
    })();


  var textBoxWidth;
  var textBoxHeight;

  let imgWrapperHeight;
  // let isProjectList = projectList

  //RESIZE H1 in Text box
  Object.values(project_item__container__text).forEach(textBox => {
    textBoxWidth = window.getComputedStyle(textBox).getPropertyValue("width");
    textBoxHeight = window.getComputedStyle(textBox).getPropertyValue('height')
    //strip px from textBoxWidth...
    let textBoxWidthStripped = parseInt(textBoxWidth, 10);
    let reSized = Math.floor(textBoxWidthStripped * (1 / 10));

    //  now add the style...
    wu_tang.style = `font-size:${reSized}px`;
    // console.log(wu_tang.style = `font-size:${reSized}px`)
    // console.log('dynamicTextBoxHeight', textBoxHeight)
  });

  //Get Project Img-wrapper size
  Object.values(project_item__container__img_wrapper).forEach(img_wrapper =>{
    imgWrapperHeight = window.getComputedStyle(img_wrapper).getPropertyValue('height')
  });


  //add these two values to get px size needed for mobile when open
  // console.log('bt height + img B height',  textBoxHeight , imgWrapperHeight, ' :', )

  if(screen.width < 767){
    showHeight = Math.ceil(
        parseInt(textBoxHeight, 10) +
        parseInt(imgWrapperHeight, 10)) + 150*(50/100);
  }

  if(screen.width > 767){
    showHeight = screen.width/2;
  }


  // console.log(project_item__show[0])

  requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);
