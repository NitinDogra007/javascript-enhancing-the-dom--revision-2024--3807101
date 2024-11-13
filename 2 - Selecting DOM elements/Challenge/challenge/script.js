// Challenge 1: Select an element by ID and print it to the console
// TODO: Select the element with id 'actionButton' and print it

let actionButton = document.getElementById('actionButton');

let actionButtonQuery = document.querySelector('#actionButton');

console.log(actionButton.textContent);
console.log(actionButtonQuery);

// Challenge 2: Select all elements with a certain class and print all of them to the console
// TODO: Select all elements with class 'info' and print each one

let infoElement = document.querySelectorAll('.info');

infoElement.forEach((item) => console.log(item));

// Challenge 3: Select elements by tag and print all of them to the console
// TODO: Select all <p> elements and print each one

let pTag = document.querySelectorAll('p');

pTag.forEach((item) => console.log(item));

// Challenge 4: Select elements with a combination of tag name and class name, and print them
// TODO: Select all elements that are <span> with class 'highlight' and print each one

let highlight = document.querySelectorAll('span.highlight');

highlight.forEach((item) => console.log(item));
