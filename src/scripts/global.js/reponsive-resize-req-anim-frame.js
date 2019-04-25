
function repeatOften() {

  //About page operations:
  (function(){
    if (window.location.href === indexURL || "http://localhost:8080/#about") {
      //      screen size
      screenWidth = (function() {
        return screen.width;
      })();

      screenHeight = (function() {
        return screen.height;
      })();



      // let imgWrapperHeight;

      //get the icon height;
      // const conversation_iconHeight = window
      //     .getComputedStyle(conversation_icon)
      //     .getPropertyValue("height");

      //RESIZE H1 in Text box
      // Object.values(project_item__container__text).forEach(textBox => {
      //   textBoxWidth = window.getComputedStyle(textBox).getPropertyValue("width");
      //   textBoxHeight = window.getComputedStyle(textBox).getPropertyValue("height");
      //   //strip px from textBoxWidth...
      //   let textBoxWidthStripped = parseInt(textBoxWidth, 10);
      //   let reSized = Math.floor(textBoxWidthStripped * (1 / 10));
      //
      //   //  now add the style...
      //   wu_tang.style = `font-size:${reSized}px`;
      //   // console.log(wu_tang.style = `font-size:${reSized}px`)
      //   // console.log('dynamicTextBoxHeight', textBoxHeight)
      // });

      //Get Project Img-wrapper size
      // Object.values(project_item__container__img_wrapper).forEach(img_wrapper => {
      //   imgWrapperHeight = window
      //       .getComputedStyle(img_wrapper)
      //       .getPropertyValue("height");
      // });

      // console.log(imgWrapperHeight)

      //add these two values to get px size needed for mobile when open
      // console.log('bt height + img B height',  textBoxHeight , imgWrapperHeight, ' :', )

      // let showHeight;

      if (screen.width < 767) {
        showHeight =
            Math.ceil(
                parseInt(conversation_iconHeight, 10) +
                parseInt(textBoxHeight, 10) +
                parseInt(imgWrapperHeight, 10)
            )
            // + 150 * (50 / 100);
      }

      if (screen.width > 767) {
        // showHeight = screen.width / 2;

        showHeight = screen.width /2;

        // showHeight=Math.ceil(
        //     parseInt(conversation_iconHeight, 10) +
        //     parseInt(textBoxHeight, 10) +
        //     parseInt(imgWrapperHeight, 10)
        // ) +
        // 150 * (50 / 100);


      }
    }

  })();

  let displayCurrentMin = "";

  //==========  ----- Mixes-----  =============
  if (window.location.href === mixesURL) {
    let totalSeconds = audio01.currentTime;
    let totalTime = audio01.duration;

    //total time
    let totalHours = Math.floor(totalTime / 3600);
    let totalMinutes = Math.floor(totalTime / 60);

    //Minutes and seconds
    let elapsedMins = Math.floor(totalSeconds / 60);
    let elapsedSeconds = parseInt(totalSeconds - elapsedMins * 60, 10);

    if (elapsedSeconds < 10) {
      elapsedSeconds = "0" + elapsedSeconds;
    }

    function convertMinsToHrsMins(mins) {
      let h = Math.floor(mins / 60);
      let m = mins % 60;
      let s = elapsedSeconds;

      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      return `${h} : ${m} : ${s}`;
    }

    // console.log(convertMinsToHrsMins(totalMinutes), 'did i convert?')
    //
    // console.log(elapsedMins,":", elapsedSeconds);

    track_01_title[0].dataset.value =
      convertMinsToHrsMins(elapsedMins) + " / " + "1:10:57";
  }

  requestAnimationFrame(repeatOften);
}

requestAnimationFrame(repeatOften);
