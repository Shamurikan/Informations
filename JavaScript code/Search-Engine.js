// Step 1 Define the "input" element through its function.

let inputElement = document.getElementById("inputElement");

// Step 2 Create the next event.

inputElement.addEventListener( "keyup", () => {

// Step 3 Type this code on the first function which is "value" means value, "trim" means deleting spaces between texts, and "toUpperCase" to make the letters large "don't worry this won't affect the body text!".

let searchValue = inputElement.value.trim().toUpperCase();

// Step 4 Define “Parent Element” for your list and then add “children” to apply to “Child Element”.

let TheList = document.getElementById("parentElement").children;

// Step 5 Create a repetition so that all existing items are required.

for (let i = 0; i < TheList.length; i++){

let li = TheList[i];

// In the last step we use "if" to write what will happen to Al-Ansar before and after the search.

if (li.textContent.trim().toUpperCase().indexOf(searchValue) == -1){

// All codes here apply to items that are not related to the search.

li.style.display = "none";

} else {

// All codes here apply to search-related items.

li.style.display = "block";

 }}
})

// The source: https://youtu.be/sEqs2B7Ospw
