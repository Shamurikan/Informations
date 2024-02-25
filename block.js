var thisWebsite = window.location.href;

var blocked = [
  "reddit.com",
  "youtube.com",
  "https://www.reddit.com",
  "",
  "",
  "",
  ""
]

for (block of blocked) {
  if (thisWebsite.includes(block) {
    window.location = "block"
  } else {
    continue
  }
}
