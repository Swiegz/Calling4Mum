const rob="Robert Schwieger";
console.log("Entering .js file");

function myFunction() {
    document.getElementById("header-txt").innerHTML=rob;
    document.getElementById("karen-img").style.borderColor="green";
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

// SKYPE SDK ------------------------------------------

// Reference to SkypeBootstrap.min.js
// Implements the Skype object model via https://swx.cdn.skype.com/shared/v/1.2.35/SkypeBootstrap.min.js

// Call the application object
console.log("We are entering Skype Code !!!");


//From https://docs.microsoft.com/en-us/skype-sdk/websdk/docs/getapientrysignin
var config = {
    apiKey: 'a42fcebd-5b43-4b89-a065-74450fb91255', // SDK
    apiKeyCC: '9c967f6b-a846-4df2-b43d-5167e47d81e1' // SDK+UI
   }; 
   
   Skype.initialize({ apiKey: config.apiKey }, function (api) {
     Application = api.application; // this is the Application constructor
   }, function (err) {
     console.log("cannot load the sdk package", err);
   });

   const api= new Application();

   
   // Sign-in code typically follows here.
   console.log("About to sign in");
   var application = api.WebApplicationInstance;
   application.signInManager.signIn({
       version: version,
       username: "j@schwiegerfamily.net",
       password: "mumdad2020"
   }).then(function () {
       console.log('Signed in successfully.');
   }, function (error) {
       console.log('Failed to sign in.');
   }).then(reset);

  
