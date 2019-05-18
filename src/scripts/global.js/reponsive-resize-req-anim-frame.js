var showHeight = 0;
var currentScreenWidth = 0;
var currentScreenHeight = 0;

function repeatOften() {

  currentScreenWidth = screen.width;
  currentScreenHeight = screen.height;

  //About page operations:
  let x = screen.width * 0.01;

  if (
    window.location.href === indexURL ||
    window.location.href === indexURL+"#projects"
  ) {
    //      screen size
    screenWidth = function() {
      return screen.width;
    };

    screenHeight = function() {
      return screen.height;
    };

    if (screen.width < 767) {
      showHeight = "100%";
      // showHeight = `${x}px`
    }

    if (screen.width > 767) {
      // showHeight = '90vh'
      showHeight = `${x * 75}px`;
    }

    if (screen.width > 1080) {
      showHeight = `${x * 60}px`;
    }

    if (screen.width > 1440) {
      showHeight = `${x * 50}px`;
    }
    // console.log(showHeight, "what is this ? showHeight");
  }

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




