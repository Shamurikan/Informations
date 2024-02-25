var thisWebsite = window.location.href;

alert("define done")

var blocked = [
  "reddit.com",
  "youtube.com",
  "https://www.reddit.com",
  "",
  "",
  "",
  ""
]

alert("define bloked done")

for (block of blocked) {
  alert("check done")
  if (thisWebsite.includes(block) {
    alert("site found done")
    window.location.href = "https://block.com"
  } else {
    continue
  }
}
