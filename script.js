// script.js
// This script adds interactivity to the webpage

// Function to toggle the visibility of the cat image
function toggleCatImage() {
    const catImage = document.querySelector('.content img');    
    if (catImage.style.display === 'none') {
        catImage.style.display = 'inline-block';
    } else {
        catImage.style.display = 'none';
    }
}

// Add event listener to the cat image to toggle visibility on click
document.addEventListener('DOMContentLoaded', () => {
    const catImage = document.querySelector('.content img');
    catImage.addEventListener('click', toggleCatImage);
});




const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "lightgreen"; // used a different color becaause i kept using blues too often
ctx.fillRect(0, 0, 150, 75); // Draw a filled rectangle (x, y, width, height) will this work? whos to say!





// adding a break here just in case where something is. below is for jQuery. this is to remind myself in case i forget after spring break and coding can be stressful.


$('#test').draggable({
    start: function(event, ui) {
        console.log(event); // The original browser event
        console.log(ui);    // The jQuery UI specific object
    }
});
