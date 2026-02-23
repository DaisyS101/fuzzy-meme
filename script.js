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

function greetUser() {
    const userName = prompt("Please enter your name:"); // Prompts the user for their name
    alert("Hello, " + userName + "!"); // Displays an alert message
}