// JS Goes here - ES6 supported

!function() {
  "querySelector" in window.document && "addEventListener" in window && (window.document.documentElement.className += "js");
}();

var internal = location.host.replace("www.", "");
internal = new RegExp(internal, "i");
var a = document.getElementsByTagName("a"); // then, grab every link on the page
for (var i = 0; i < a.length; i++) {
  var href = a[i].host; // set the host of each link
  if (!internal.test(href)) { // make sure the href doesn't contain current site's host
    a[i].setAttribute("target", "_blank"); // if it doesn't, set attributes
  }
}
