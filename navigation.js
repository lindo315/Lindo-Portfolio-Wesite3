 // Create a new button element
 var button = document.createElement("button");

 // Add a class to the button
button.classList.add("custom-button");
button.classList.add("essay-title");


          
 // Set the button text
 button.innerHTML = "DESIGN";

 // Assign an onclick event handler
 button.onclick = function() {
   // Change the window location to the desired URL
   window.location.href = "design.html";
 };

 // Append the button to the buttonContainer element
 var buttonContainer = document.getElementById("buttonContainer");
 buttonContainer.appendChild(button);