// Your tasks:
// 1. Find the parent element of a cat and log it to the console.

let cat = document.querySelector('#animalFamilyTree li:nth-Child(2)');
let catParent = cat.parentNode;

console.log('Parent element of cat is:' + catParent);

// 2. List all the children of the cat’s parent and log them.

let catChildren = catParent.children;

//This prints each child
Array.from(catChildren).forEach((child) => {
	console.log("Child of Cat's Parent:", child.textContent);
});

// 3. Identify the cat’s parent's next sibling in the tree and log it.

//nextElementSibling unlike nextSibling skips white space and comment nodes

let parentNextSibling = catParent.nextElementSibling;
console.log(
	"Cat's Parent Next Sibling:",
	parentNextSibling ? parentNextSibling.textContent : 'No next sibling'
);
