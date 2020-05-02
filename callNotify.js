// Check that browser supports serviceWorker and PushManager
//
console.log("In callNotify");



// I added a function that can be used to register a service worker.
const check = () => {
    if (!('serviceWorker' in navigator)) {
      throw new Error('No Service Worker support!')
    }
    if (!('PushManager' in window)) {
      throw new Error('No Push API Support!')
    }
  }
const registerServiceWorker = async () => {
    const swRegistration = await navigator.serviceWorker.register('serviceWorker.js'); //notice the file name
    console.log("in reg sw",swRegistration.scope);
    return swRegistration;
}
const main = async () => { //notice I changed main to async function so that I can use await for registerServiceWorker
    check();
    const swRegistration = await registerServiceWorker();
}
main();









//
// Set up Service Worker
//
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('serviceWorker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }





//function to request permission for notifications
//
function requestPermission() {
    if (!('serviceWorker' in navigator)) { 
        // Service Worker isn't supported on this browser, disable or hide UI. 
        return; 
      }
      
      if (!('PushManager' in window)) { 
        // Push isn't supported on this browser, disable or hide UI. 
        return; 
      }
    return new Promise(function(resolve, reject) {
        const permissionResult = Notification.requestPermission(function(result) {
        // Handling deprecated version with callback.
        resolve(result);
        });

        if (permissionResult) {
        permissionResult.then(resolve, reject);
        }
    })
.then(function(permissionResult) {
    if (permissionResult !== 'granted') {
    throw new Error('Permission not granted.');
    }
});
}
requestPermission();


function notifyMe(message) {
    if (Notification.requestPermission ="granted") {
        console.log("Notification permisison granted.  notifyMe called with message: ", message);
        
        var notify = new Notification(message);
        notify.addEventListener("error", (e)=>console.log("Notification Error",e));
        
    }
}
console.log("Past request permission"); 