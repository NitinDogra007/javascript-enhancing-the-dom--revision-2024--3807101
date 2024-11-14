// Challenge Instructions:
// 1. Craft and add a new button element with the text “Add” to the content area.
//    Hint: Use createElement and appendChild.

let contentDiv = document.querySelector('#contentArea');
let newButton = document.createElement('button');
newButton.textContent = 'Add';
contentDiv.appendChild(newButton);

// 2. Summon a new list item and add it to the existing list 'taskList'.
//    Hint: Create an 'li' element and use appendChild.

let taskList = document.querySelector('#taskList');
let newItem = document.createElement('li');
newItem.textContent = 'New task';
taskList.appendChild(newItem);

// 3. Clone an element and add its twin to the page.
//    Hint: Use cloneNode on an existing element.

// let existingItem = document.querySelector('ul > li:first-child');
// let cloneItem = taskList.firstElementChild.cloneNode(true);
// cloneItem.textContent = 'Cloned Item';
// taskList.appendChild(cloneItem);

let cloneItem = newItem.cloneNode(true);
cloneItem.textContent = 'Cloned Item';
taskList.appendChild(cloneItem);

// 4. Replace the old paragraph at the top of the page with a new one.
//    Hint: Create a new 'p' element and use replaceChild.

let newPara = document.createElement('p');
newPara.textContent = 'new info';
let oldPara = document.querySelector('p');
contentDiv.replaceChild(newPara, oldPara);

// 5. Make the image of the puppy vanish from the page. (I know, terrible!)
//    Hint: Use removeChild on the parent of the 'puppyImage'.

let puppyImg = document.querySelector('#puppyImage');
contentDiv.removeChild(puppyImg);
// or
// puppyImg.parentNode.removeChild(puppyImg);

