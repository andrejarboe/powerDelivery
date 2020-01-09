console.log("Hey What Are You Doing Here?");

var i = 0;
var images = [];
var time = 4000;

// image list
images[0] = "./images/hero/power_guys.png";
images[1] = "./images/hero/trucks.png";
images[2] = "./images/hero/storm.png";
images[3] = "./images/hero/bucket_guy.png";


// change Image
function changeImg() {
  document.slide.src = images[i];
  //   var element = document.getElementById("Slide");

  //   var newP = document.createElement('p');
  if (i < images.length - 1) {
    if (i === 0) {
      console.log("images[0]");
      //   element.innerHTML = "<p>The Future of Training Lives Here.</p>";
    }
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;

