var x = document.getElementsByTagName("span");

let found = false; // Flag to check if "For you" exists

for (let i = 0; i < x.length; i++) {
  if (x[i].innerText === "For you") {
    console.log("exist");
    found = true;
    break; // Exit the loop once found
  }
  console.log(i);
}

if (!found) {
  console.log("not exist");
}

alert("holllllllllla");