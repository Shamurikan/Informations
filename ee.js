var x = document.getElementByTagName("span")

for( i=0; i< x.length; i++) {
  if (x[i].innerText = "For you") {
    console.log("exsit")
    }
    console.log(i)
}

console.log("not exist")