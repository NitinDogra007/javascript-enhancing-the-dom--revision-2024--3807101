document.addEventListener('DOMContentLoaded', () => {
	// Task: React to a button click by changing text in the paragraph with id 'para1'.
	// Add event listener to 'changeTextButton' and modify text of 'para1' when clicked.

	let para1 = document.querySelector('#para1');

	let btn = document.querySelector('#changeTextButton');
	btn.addEventListener('click', () => {
		para1.textContent = 'Button Clicked';
	});

	// Task: Change the style of 'para1' on mouseover and mouseout.
	// Add mouseover and mouseout event listeners to 'para1' and change its style.

	//when there is only one expression you can remove the brackets

	para1.addEventListener('mouseover', () => (para1.style.color = 'red'));

	para1.addEventListener('mouseout', () => (para1.style.color = 'black'));

	// Task: Use event delegation on 'itemList' to display which item was clicked.
	// Add click event listener to 'itemList' and identify the clicked list item.

	let itemList = document.querySelector('#itemList');

	itemList.addEventListener('click', (e) => {
		if (e.target.tagName === 'LI') {
			alert(`${e.target.textContent} has been clicked`);
		}
	});

	// Task: Prevent navigating to the link URL with preventDefault and show text in 'para2'.
	// Add click event listener to 'preventLink' and prevent default action.

	let exampleLink = document.querySelector('#preventLink');
	let para2 = document.querySelector('#para2');

	exampleLink.addEventListener('click', (e) => {
		e.preventDefault();
		para2.textContent = 'link has been clicked';
	});
});
