var myVar = setInterval(myTimer, 0);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  document.getElementById('time').innerHTML = t;
}
