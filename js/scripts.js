// Bell Alert
const body = document.querySelector('body');
const bellLI = document.querySelector('.header-list li:first-child');
const indicator = bellLI.querySelector('.bell-indicator');
const alertBox = document.querySelector('.alert-box');
const alertUL = alertBox.querySelector('ul');
const alertCloseBtn = alertBox.querySelector('.alert-close-btn');
const mainAlert = document.querySelector('.main-alert');
const trafficSection = document.querySelector('section.traffic');
const trafficList = document.querySelector('.traffic-list');

displayNotificationNumber();

//Store number of notifications 
function displayNotificationNumber() {
	let notificationNumber = alertUL.children.length;
	indicator.textContent = notificationNumber;
}


function toggleAlertBox() {
	if (alertBox.style.display === 'inline-block') {
		alertBox.style.display = 'none';
	} else {
		alertBox.style.display = 'inline-block';
	}
}

function checkNotificationIcon() {
	if (bellLI.classList.contains('notifications-ready')) {
		/*bellLI.classList.remove('notifications-ready');*/
		/*indicator.style.display = 'none';*/
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
		displayNotificationNumber();
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
	displayNotificationNumber();
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
const hourlyTraffic = document.getElementById('hourly-traffic');
const dailyTraffic = document.getElementById('daily-traffic');
const weeklyTraffic = document.getElementById('weekly-traffic');
const monthlyTraffic = document.getElementById('monthly-traffic');
const barDailyTraffic = document.getElementById('bar-daily-traffic');
const mobileUsers = document.getElementById('mobile-users');

Chart.defaults.global.animation.onComplete = () => {
	mainAlert.style.opacity = '0.9';
	mainAlert.style.backgroundColor = "#000000";
}


let hourlyChart = new Chart(hourlyTraffic, {
	type: 'line',
	data: {
		labels: ['12 AM - 5 AM', '6 AM - 11 AM', '12 PM - 5 PM', '6 PM - 11:59PM'],
		datasets: [
			{
				label: "Hourly Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "#72dff7", //$light-blue
				borderColor: "#a111af",
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [12,23,32,19]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});



let dailyChart = new Chart(dailyTraffic, {
	type: 'line',
	data: {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				label: "Daily Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "#a111af", //$light-purple
				borderColor: "#72dff7", //$light-blue
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [33,59,78,63,69,55,40]
			}
		]
	},
	options: {
		responsive: true,
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});




let weeklyChart = new Chart(weeklyTraffic, {
	type: 'line',
	data: {
		labels: ['1', '2', '3', '4', '5', '6', '7'],
		datasets: [
			{
				label: "Weekly Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "#e8ff1e", //$yellow
				borderColor: "#a111af", //$light-purple
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [153,175,164,186, 178, 181, 186]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: false
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});

let monthlyChart = new Chart(monthlyTraffic, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
		datasets: [
			{
				label: "Weekly Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "#a111af", //$light-purple
				borderColor: "#e8ff1e", //$yellow
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "#e8ff1e",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [433,459,494,533,606,578,612,633]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: false
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});


// Select traffic-list li 

hourlyTraffic.style.display = 'none';
weeklyTraffic.style.display = 'none';
monthlyTraffic.style.display = 'none';

trafficList.addEventListener('click', (e) => {
	if (e.target.tagName === 'LI') {
		let li = e.target;
		let lis = trafficList.children;
		for (let i = 0; i < lis.length; i++) {  // remove .traffic-selected when another li is clicked
			if (lis[i].classList.contains('traffic-selected')) {
				let curLi = lis[i];
				curLi.classList.remove('traffic-selected');
			}
		}
		li.classList.add('traffic-selected'); // add .traffic-selected to clicked li
		//Display chart if corresponding li is selected
		if (li.classList.contains('hourly')) {
			hourlyTraffic.style.display = 'block';
		} else {
			hourlyTraffic.style.display = 'none';
		}
		if (li.classList.contains('daily')) {
			dailyTraffic.style.display = 'block';
		} else {
			dailyTraffic.style.display = 'none';
		}
		if (li.classList.contains('weekly')) {
			weeklyTraffic.style.display = 'block';
		} else {
			weeklyTraffic.style.display = 'none';
		}
		if (li.classList.contains('monthly')) {
			monthlyTraffic.style.display = 'block';
		} else {
			monthlyTraffic.style.display = 'none';
		}
	}
});

// Daily Traffic Bar Chart
let barDailyChart = new Chart(barDailyTraffic, {
	type: 'bar',
	data: {
		labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		datasets: [
			{
				label: "Daily Traffic",
				fill: true,
				lineTension: 0.5,
				backgroundColor: "#e8ff1e", //$yellow
				borderColor: "#a111af", //$light-purple
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [33,59,78,63,69,55,40]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "#000000",
					display: false
				}
			}],
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				gridLines: {
          			color: "#000000",
          			display: false
        		}
			}]
		},
		legend: {
            display: false
         }
	}
});

//Mobile Users Doughnut Chart
let mobileUsersChart = new Chart(mobileUsers, {
	type: 'doughnut',
	data: {
		labels: ['Phones', 'Tablets', 'Desktop'],
		datasets: [
			{
				label: "Mobile Users",
				fill: true,
				lineTension: 0.5,
				backgroundColor: ["#a111af", "#e8ff1e", "#72dff7"],
				borderColor: "#000000"/*"#a111af"*/, 
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: "#fff",
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: "rgba(66,212,244,1)",
				pointHoverBorderColor: "rgba(220,220,220,1)",
				pointHoverBorderWidth: 2,
				pointRadius: 7,
				pointHitRadius: 10,
				data: [63, 7, 30]
			}
		]
	},
	options: {
		cutoutPercentage: 20,
		animation: {
			animationScale: true
		},
		legend: {
			position: 'right'
		}
	}
});

// ===========
// Message User form Functionality and Settings Buttons
// ===========

const users = [
	'Arwen Welsh',
	'Moya Welsh',
	'Athena Welsh',
	'Jazmin Welsh',
	'Lily Welsh',
	'Odo Stiles',
	'Rufus the Cat',
	'Harlo the Dog',
	'Jessie the Dog',
	'Pilot the Dog',
	'John Crichton',
	'Aeryn Sun',
	'Ka D\'Argo',
	'Pilot',
	'Dominar Rygel XVI',
	'Chiana',
	'Zaan',
	'Harvey',
	'Scorpius',
	'Sikozu'
];
const userSearchInput = document.getElementById('user-search');  //search input element
const autocomplete = document.getElementById('search-autocomplete'); //div containing drop down list
const userMessageBox = document.getElementById('message-user-box'); //text area 
const autocompleteList = document.querySelector('.autocomplete-list'); // ul containing search queries
const submitButton = document.getElementById('submit-btn');
const submitNotification = document.querySelector('.submit-notification');
const settingsButtonWrap = document.querySelector('.settings-button-wrap');
const settingsNotification = document.querySelector('.settings-notification');

//Check if search query is in users array and display matches in autocomplete field
userSearchInput.addEventListener('keyup', (e) => { 
	const input = e.target;
	let search = input.value.toLowerCase();
	for (let i = 0; i < users.length; i += 1) {
		if (users[i].toLowerCase().includes(search)) { // if user list contains search, add names to user list 
			let name = users[i];
			let li = document.createElement('li');
			li.textContent = name;
			li.classList.add('member-name');
			autocompleteList.appendChild(li);	
		} 
	}
	let items = autocompleteList.children;   // check autocompleteList and if value of search is not in the items, remove it
	let check;
	for (let i = 0; i < items.length; i += 1) {
		if (items[i].textContent.includes(search)) {
			check = true;
		} else {
			check = false;
		}
		if (check === false) {
			autocompleteList.removeChild(items[i]);
			}
	}
	if (search === "") {     // if search field is blank remove list contents
		autocompleteList.innerHTML = ""; 
	}
});

//Enable search field to fill with result of clicking drop down item
autocomplete.addEventListener('click', (e) => {
	let item = e.target;
	let text = item.textContent;
	userSearchInput.value = text;
	autocompleteList.innerHTML = "";
});

//When submit button is clicked, display message if user or message is not filled, or notify if message is sent 
submitButton.addEventListener('click', (e) => {
	e.preventDefault();
	submitNotification.classList.add('appear');
	removeTimeout();
	if (userSearchInput.value === "") {
		submitNotification.textContent = "Please select a user";
	} else if (userMessageBox.value === "") {
		let name = userSearchInput.value;
		submitNotification.textContent = "Please type a message for " + name;
	} else {
		submitNotification.textContent = "Your message has been sent";
		userSearchInput.value = "";
		userMessageBox.value = "";
	}

});

function removeAppear() {
	submitNotification.classList.remove('appear');
	settingsNotification.classList.remove('appear');
}
function removeTimeout() {
	window.setTimeout(removeAppear, 3000);
}

//Display alert when Settings section buttons are pressed
settingsButtonWrap.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		removeTimeout();
		settingsNotification.classList.add('appear');
	}
});