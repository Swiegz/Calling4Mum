const rob="Robert Schwieger";
console.log("Entering .js file");

function myFunction() {
    document.getElementById("header-txt").innerHTML=rob;
    document.getElementById("karen-img").style.borderColor="green";
} 
// Set up listeners for Call buttons 
function callButtonListeners() {
  document.getElementById("header-txt").addEventListener("click", function() {myFunction()});
  document.getElementById("body-id").addEventListener("onkeyup", function() {openFullscreen("body-id")});
  const theseElements= document.getElementsByClassName("callButton");
   for (let i=0; i<theseElements.length;i++) {
     const thisId=theseElements[i].id;
     const thisElement=theseElements[i];
     console.log(typeof thisId + "       "+ thisId);
     thisElement.addEventListener("click", function() {openFullscreen(thisId)});
    };  
  console.log("at end");
} 

// This function handles click events
function onCallClick (clickObjectId) {
   openFullscreen(clickObjectId);

}
// This function opens the element represented by the passed id in full screen mode
function openFullscreen(whatToOpen) {
  var elem1=document.getElementById(whatToOpen);
  elem1.style.borderColor="green";
  if (elem1.fullscreenChanged) {
        elem1.exitFullscreen();
  } else if (elem1.requestFullscreen) {
        console.log("First Full Screen Request");
        elem1.requestFullscreen();
  } else if (elem1.mozRequestFullScreen) { /* Firefox */
    elem1.mozRequestFullScreen();
  } else if (elem1.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    console.log("Chrome");
    elem1.webkitRequestFullscreen();
  } else if (elem1.msRequestFullscreen) { /* IE/Edge */
    elem1.msRequestFullscreen();
  }
}

console.log("in js body");

function goFullscreen() {
    // Must be called as a result of user interaction to work
    mf = document.getElementById("main_frame");
    mf.webkitRequestFullscreen();
    mf.style.display="";
}
function fullscreenChanged() {
    if (document.webkitFullscreenElement == null) {
        mf = document.getElementById("main_frame");
        mf.style.display="none";
    }
}
//document.onwebkitfullscreenchange = fullscreenChanged;
//document.documentElement.onclick = goFullscreen;
//document.onkeydown = goFullscreen;

