function repeatOften() {
  //About page operations:

  (function() {
    if (
      window.location.href === indexURL ||
      window.location.href === "http://localhost:8080/#about"
    ) {
      //      screen size
      screenWidth = (function() {
        return screen.width;
      })();

      screenHeight = (function() {
        return screen.height;
      })();

      //get the icon height;
      const conversation_iconHeight = window
        .getComputedStyle(conversation_icon)
        .getPropertyValue("height");

      if (screen.width < 767) {
        showHeight = (Math.ceil(
          parseInt(conversation_iconHeight, 10) +
            parseInt(textBoxHeight, 10) +
            parseInt(imgWrapperHeight, 10))
        );
      }

      if (screen.width > 767) {
        // showHeight = screen.width / 2;

        showHeight = screen.width * .55 ;
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
    track_01_title[0].dataset.value =
      convertMinsToHrsMins(elapsedMins) + " / " + "1:10:57";
  }

  requestAnimationFrame(repeatOften);
}

requestAnimationFrame(repeatOften);
