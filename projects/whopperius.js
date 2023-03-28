// What is whopperius.js?
// whopperius.js is basically a funny whopper ad virus in a bookmarklet that I made. How it works is that it opens a window and spams it over and over again while bypassing the google popup blocker.
// Credit to https://stackoverflow.com/questions/4609936/how-a-bookmarklet-can-avoid-the-popup-blocker for the popup block evader
var popupProperties='width=10000,height=10000,toolbar=0,location=0,resizable=1';
var newA = document.createElement("a");
var url = 'https://www.youtube.com/watch?v=9cPxh2DikIA&ab_channel=BURGERKING';
newA.setAttribute("href","javascript:window.open(url,'Hi',popupProperties);");
newA.setAttribute("style","position:fixed;z-index:9999999;top:0;left:0;width:100px;height:100px;color:#000;background:#fff;display:block;");
var newT = document.createTextNode("want a whopper?");
newA.appendChild(newT);
function innitiateFun(){
  document.body.appendChild(newA);
}
setInterval(function() { innitiateFun() }, 500); 
