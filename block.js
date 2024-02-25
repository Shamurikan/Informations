alert("start done");

var thisWebsite = window.location.href;

alert("define done");

var blocked = [
  "reddit.com",
  "youtube.com",
  "https://www.reddit.com",
  "",
  "",
  "",
  ""
];

alert("define blocked done");

for (i = 0; i < blocked.length; i++) {
  alert("check done");
  if (thisWebsite.includes(blocked[i])) {
    alert("site found done");
    window.location.href = "https://block.com";
  } else {
    continue;
  }
}
