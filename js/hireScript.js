// hireScript.js

// Get the Hire Me button element
var hireMe = document.getElementById('hireMeBtn');

// Add a click event listener
hireMe.addEventListener('click', function() {
    // Display a confirmation dialog box
    var isConfirmed = confirm("Are you sure you want to hire this candidate?");
    
    // Check if the user confirmed the hiring action
    if (isConfirmed) {
        alert("Thank you for hiring the candidate! Please fill out the contact form below.");
        // Smooth scroll to the contact section
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Hiring action canceled. Feel free to explore more about the candidate.");
    }
});
