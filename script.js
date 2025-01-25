// script.js

// Function to load a game frame dynamically from the Flask server
function loadGameFrame() {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    fetch('/game_frame')
        .then(response => response.blob())
        .then(blob => {
            const img = new Image();
            const objectURL = URL.createObjectURL(blob);
            img.onload = function() {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                ctx.drawImage(img, 0, 0); // Draw the new game frame
                URL.revokeObjectURL(objectURL); // Revoke the object URL after use
            };
            img.src = objectURL; // Start loading the image
        })
        .catch(error => console.error('Error loading game frame:', error));
}

// Example to initiate the game frame loading when the page is loaded
window.onload = function() {
    if (document.getElementById("gameCanvas")) {
        // If there's a canvas element, start loading game frames
        loadGameFrame();
    }

    // Additional event listeners can go here for other game logic or actions
};
