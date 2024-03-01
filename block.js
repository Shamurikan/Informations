for (i = 0; i < 1000; i++){
  document.getElementsByTagName("ytm-reel-shelf-renderer")[0].remove();
}

var YouTubeSearchBar = document.querySelector(".title search-bar-text")[0].value;

if (YouTubeSearchBar == "new") {
  document.body.innerHTML = "";
}
