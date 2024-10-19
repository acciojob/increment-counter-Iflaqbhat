//your JS code here. If required.
const incrementBtn = document.getElementById('incrementBtn');

// Add an event listener for the 'click' event
incrementBtn.addEventListener('click', function() {
let counterElement = document.getElementById("counter");
let currentValue = parseInt(counterElement.innerText) || 0;  // Start with 0 if empty
counterElement.innerText = currentValue + 1;
	counterElement.innerText = currentValue;
    alert(currentValue);
});
