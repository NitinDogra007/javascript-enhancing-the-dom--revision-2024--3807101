function changeStyle() {

    // Add this variable to toggle bold
    // let isBold = false;

	// Challenge Instructions:
	// 1. When the button is clicked, change the background color of 'dynamicText' to 'lightblue'.

	let colorChange = document.querySelector('#dynamicText');

	colorChange.style.backgroundColor = 'lightblue';

	// 2. Change the font size of 'dynamicText' to '18px'.

	colorChange.style.fontSize = '18px';

	// 3. Toggle the font weight of 'dynamicText' between 'normal' and 'bold' on each button click.

	colorChange.classList.toggle('fontBold');

	/*Or you can do this:

    // Toggling font weight
    colorChange.style.fontWeight = isBold ? 'normal' : 'bold';
    isBold = !isBold;
    
    */

	// 4. Change the text color of 'dynamicText' to 'green'.

	colorChange.style.color = 'green';
}
