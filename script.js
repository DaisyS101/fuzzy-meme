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

ctx.fillStyle = "royalblue"; // Blue is a better color to be honest but hey thats me
ctx.fillRect(0, 0, 150, 75); // Draw a filled rectangle (x, y, width, height) will this work? whos to say!

