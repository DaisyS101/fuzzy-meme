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







// API integration for random dog facts
async function fetchRandomDogFact() {
    const factEl = document.getElementById('quote-text');
    const authorEl = document.getElementById('quote-author');
    const historyEl = document.getElementById('quote-history');

    if (!factEl || !authorEl || !historyEl) {
        return;
    }

    factEl.textContent = 'Fetching a fresh dog fact...';
    authorEl.textContent = '';

    try {
        const response = await fetch('https://www.mspca.org/pet_resources/interesting-facts-about-dogs/');
        if (!response.ok) throw new Error('Oops! look like a doggy chewed the cables!');

        const data = await response.json();
        const factText = Array.isArray(data.facts) && data.facts.length > 0 ? data.facts[0] : 'No fact found.';

        factEl.textContent = factText;
        authorEl.textContent = '— from dog facts API';

        const item = document.createElement('li');
        item.textContent = factText;
        item.style.marginBottom = '0.3rem';
        historyEl.insertBefore(item, historyEl.firstChild);

        while (historyEl.childNodes.length > 8) {
            historyEl.removeChild(historyEl.lastChild);
        }
    } catch (error) {
        factEl.textContent = 'Looks Like the doggy wants to keep their secrets hidden!';
        authorEl.textContent = 'Please check your connection or try again.';
        console.error('Dog fact API error:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const quoteButton = document.getElementById('refresh-quote');
    if (quoteButton) {
        quoteButton.addEventListener('click', fetchRandomDogFact);
    }
    fetchRandomDogFact();
});
