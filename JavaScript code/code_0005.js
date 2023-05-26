// Get the text from an input field or textarea
const text = document.getElementById('input-field').value;

// Create a new Blob object with the text and specify the file type
const blob = new Blob([text], { type: 'text/plain' });

// Create a new URL object from the Blob
const url = URL.createObjectURL(blob);

// Create a link element to download the file
const link = document.createElement('a');
link.href = url;
link.download = 'filename.txt'; // Specify the filename and extension

// Click on the link to download the file
link.click();

// Clean up by revoking the URL object
URL.revokeObjectURL(url);
