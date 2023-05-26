// Step 1 Choose the item you want to work on and you can use any method to work on the item, And you can put any name for the variable.

let VariableName = document.getElementById("Element");

// In this Array you put the options you want to appear randomly, And you can put any name for the variable.

let ArrayName = [
"Choose 1",
"Choose 2",
"Choose 3",
"Choose 4"];

// Step 2 Here random numbers will be generated, you can also change the name of the variable.

let randomNumber = Math.floor(Math.random() * ArrayName.length);

// Step 3 In this step you put the item and the things you want to change

VariableName.src = ArrayName[randomNumber];

// You can change the last step depending on the item you want to work on "In this example I was working on an image", And you can put these words inside the function.

// The source : https://youtu.be/ArZsrX3osX0
