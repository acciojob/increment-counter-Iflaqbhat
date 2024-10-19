
// Initializing the counter value
let count = 0;

// Selecting the elements
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

// Adding an event listener to the button
incrementButton.addEventListener('click', function () {
    // Show the alert with the un-incremented value
    alert(`The current value is: ${count}`);
    
    // Increment the counter value after alert
    count++;
    
    // Update the counter display after incrementing
    counterDisplay.textContent = count;
});
