console.log('hello bro');

// AOS.init({
//     duration:1200
// });



function handleClickAbout(){
    console.log('will route to about')

}


$(document).ready(function(){

    //      Make Relative Parent Height Larger than Absolute/ Fixed Children
   // https://stackoverflow.com/questions/9061520/auto-height-on-parent-container-with-absolute-fixed-children
   // var MainContainerHeight = 0;
   //
   //  $("#main").each(function(){
   //      // If this elements height is bigger than the biggestHeight
   //      if ($(this).height() > MainContainerHeight ) {
   //          // Set the biggestHeight to this Height
   //          MainContainerHeight = $(this).height('100vh');
   //      }
   //  });
   //
   //
   //
   //  // Set the container height
   //  $("#main").height(MainContainerHeight);
   //
   //
   //  var rect01ContainerHeight = 0;
   //
   //  $(".rectangle-01-container *").each(function(){
   //      // If this elements height is bigger than the biggestHeight
   //      if ($(this).height() > rect01ContainerHeight ) {
   //          // Set the biggestHeight to this Height
   //          rect01ContainerHeight = $(this).height();
   //      }
   //  });
   //
   //  // Set the container height
   //  $(".rectangle-01-container").height(rect01ContainerHeight);

});

function findChange() {
    let num = 59;

    let a = Math.floor(num /20);  //2

    console.log(a);

    if (a>0) num -= 20;



    let b = num /10; //
    let c = num /5;
    let d = num / 1;


}

findChange();