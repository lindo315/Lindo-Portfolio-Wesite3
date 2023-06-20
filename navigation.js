// Button element
var button = document.createElement("button");

// Class button
button.classList.add("custom-button");
button.classList.add("essay-title");


          
// Button text
button.innerHTML = "DESIGN";

// Onclick event handler
button.onclick = function() {
  // Change the window location to the desired URL
  window.location.href = "design.html";
};

// Append button to buttonContainer element
var buttonContainer = document.getElementById("buttonContainer");
buttonContainer.appendChild(button);