
// Bell Alert

const bellLI = document.querySelector('.header-list li:first-child');
const indicator = bellLI.querySelector('.bell-indicator');
const alertBox = document.querySelector('.alert-box');

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

