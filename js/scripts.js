
// Bell Alert
const body = document.querySelector('body');
const bellLI = document.querySelector('.header-list li:first-child');
const indicator = bellLI.querySelector('.bell-indicator');
const alertBox = document.querySelector('.alert-box');
const alertUL = alertBox.querySelector('ul');
const alertCloseBtn = alertBox.querySelector('.alert-close-btn');


function toggleAlertBox() {
	if (alertBox.style.display === 'inline-block') {
		alertBox.style.display = 'none';
	} else {
		alertBox.style.display = 'inline-block';
	}
}

function checkNotificationIcon() {
	if (bellLI.classList.contains('notifications-ready')) {
		bellLI.classList.remove('notifications-ready');
		indicator.style.display = 'none';
	} else {
		bellLI.classList.add('notifications-ready');
	}
}

// Check if notifications are present and display alert box if so
bellLI.addEventListener('click', (e) => { 
	toggleAlertBox();
	checkNotificationIcon();
	
});

// click close button to close alert
alertCloseBtn.addEventListener('click', () => {  
	alertBox.style.display = 'none';
});

//click anywhere outside of alert box to close
/*body.addEventListener('click', () => {
	if (alertBox.style.display === 'inline-block') {
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

// Add notifications 
alertBox.addEventListener('click', (e) => {
	if (e.target.classList.contains('add-notification-btn')) {
		let btn = e.target;
		let input = document.querySelector('.item-text-box');
		let inputValue = input.value;
		// removwe button 
		let rmvBtn = document.createElement('span');
		rmvBtn.textContent = 'x';
		rmvBtn.classList.add('remove-btn');
		//
		let li = document.createElement('li');
		li.textContent = inputValue;
		li.appendChild(rmvBtn);
		alertUL.appendChild(li);
		input.value = "";
	}
});