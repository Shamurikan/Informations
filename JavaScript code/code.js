// Get the value from the input.
const fileInput = document.getElementById('fileInput');

// Get an elemet to embed the text.
const fileContent = document.getElementById('fileContent');

// Event call a function if the value of input has been changed.
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.readAsText(file);

  reader.onload = () => {
    fileContent.innerText = reader.result;
  };
});
