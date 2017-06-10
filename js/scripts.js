
// Bell Alert
const body = document.querySelector('body');
const bellLI = document.querySelector('.header-list li:first-child');
const indicator = bellLI.querySelector('.bell-indicator');
const alertBox = document.querySelector('.alert-box');
const alertUL = alertBox.querySelector('ul');
const alertCloseBtn = alertBox.querySelector('.alert-close-btn');

// Check if notifications are present and display alert box if so
bellLI.addEventListener('click', (e) => {                     
	if (bellLI.classList.contains('notifications-ready')) {
		bellLI.classList.remove('notifications-ready');
		alertBox.style.display = 'inline-block';
		indicator.style.display = 'none';
	} else {
		bellLI.classList.add('notifications-ready');
		alertBox.style.display = 'none';
	}
});

// click close button to close alert
alertCloseBtn.addEventListener('click', () => {  
	alertBox.style.display = 'none';
});

/*body.addEventListener('click', () => {      // click anywhere on body to remove alert box
	if (alertBox.style.display !== 'none') {
		alertBox.style.display = 'none';
	}
});*/

// remove alert LI buttons
alertUL.addEventListener('click', (e) => {
	if (e.target.classList.contains('remove-btn')) {
		let btn = e.target;
		let li = btn.parentNode;
		alertUL.removeChild(li);
	}
});