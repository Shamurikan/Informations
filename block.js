alert("start done");

var thisWebsite = window.location;

if (thisWebsite.includes("reddit.com")) {
  alert("site found done");
  window.location = "https://block.com";
} else if (thisWebsite.includes("youtube.com")) {
  alert("site found done");
  window.location = "https://block.com";
} else if (thisWebsite.includes("facebook.com")) {
  alert("site found done");
  window.location = "https://block.com";
}
