// Step 1 Create a "function".

function functionName() {

// Step 2 Create tags "textarea" and one tag "iframe" and then knew them in variables.


let HTML = document.querySelector("textarea for HTML Elements").value;

let CSS = "<style>"+document.querySelector("textarea for CSS Elements").value+"</style>";

let JS = document.querySelector("textarea fo JS Elements").value;

let IFRAME = document.querySelector("iframe Tag");
			
// Step 3 Write this code in order for the application to be done.

IFRAME.contentDocument.body.innerHTML = HTML+CSS ;

IFRAME.contentWindow.eval(JS);
}

// The last step in order when we type anything in the hashtag "textarea" is applied immediately.

document.querySelector("textarea for HTML Elements").addEventListener("keyup", functionName);

document.querySelector("textarea for CSS Elements").addEventListener("keyup", functionName);

document.querySelector("textarea for JS Elements").addEventListener("keyup", functionName);

// The source : https://youtu.be/NmFyv8pnQhM
