
// Bell Alert
const body = document.querySelector('body');
const bellLI = document.querySelector('.header-list li:first-child');
const indicator = bellLI.querySelector('.bell-indicator');
const alertBox = document.querySelector('.alert-box');
const alertUL = alertBox.querySelector('ul');
const alertCloseBtn = alertBox.querySelector('.alert-close-btn');
const mainAlert = document.querySelector('.main-alert');


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

function addNotification(e) {
	if (e.target.classList.contains('add-notification-btn')) {
		let btn = e.target;
		let input = document.querySelector('.item-text-box');
		let inputValue = input.value;
		// remove button 
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
	addNotification(e);
});

// close main body alert box
mainAlert.addEventListener('click', (e) => {
	if (e.target.classList.contains('remove-btn')) {
		mainAlert.style.display = 'none';
	}
});

//============================
//Charts
//============================
const weeklyTraffic = document.getElementById('weekly-traffic');
let lineChart = new Chart(weeklyTraffic, {
	type: 'line',
	data: {
		labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		datasets: [
			{
				label: "Weekly Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "rgba(75,192,192,0.4)",
				borderColor: "rgba(75,192,192,1)",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(75,192,192,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [65,59,80,81,56,55,40]
			}
		]
	}
});