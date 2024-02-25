alert("start done");

var thisWebsite = window.location;

if (thisWebsite == "https://www.reddit.com") {
  alert("site found done");
  window.location = "https://block.com";
}
