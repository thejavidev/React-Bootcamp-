let text = document.getElementById("greeting")

document.getElementById('colorButton').addEventListener('click', function () {
    // TODO: Complete the function to change the 'greeting' element's color to a random color
    text.style.backgroundColor = getRandomColor()
});

// Task 2: Change the text content of the greeting
document.getElementById('textButton').addEventListener('click', function () {
    // TODO: Complete the function to change the text of the 'greeting' element to "Hello, JavaScript!"
    text.innerHTML = 'Hello, JavaScript!'
});

// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}