// Get the Hire Me button element
var hireMe = document.getElementById('hireMeBtn');

// Add a click event listener
hireMe.addEventListener('click', function() {
    // Display a confirmation dialog box
    var isConfirmed = confirm("Do you want to hire me?");
    
    // Check if the user confirmed the hiring action
    if (isConfirmed) {
        alert("Then please fill out the contact form below.");
        // Smooth scroll to the contact section
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Hiring action canceled. Feel free to explore more about me.");
    }
});


// Get the contact form element
var contactForm = document.querySelector('.contact form');
var contactFormSubmitButton = document.getElementById('contactForm');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var fullName = document.querySelector('.contact form input[placeholder="Full Name"]').value;
    var email = document.querySelector('.contact form input[placeholder="Email Address"]').value;
    var mobileNumber = document.querySelector('.contact form input[type="number"]').value;
    var emailSubject = document.querySelector('.contact form input[placeholder="Email Subject"]').value;
    var message = document.querySelector('.contact form textarea').value;

    // Validate mobile number length
    if (mobileNumber.length !== 10 || isNaN(mobileNumber) ) {
        alert('Please enter a 10-digit mobile number');
        return;
    }

    // Validate email format
    if (!email.endsWith('@gmail.com')) {
        alert('Please enter a valid email ending with @gmail.com');
        return;
    }

    // Your logic to handle the form data, for example, sending it to a server using AJAX or fetch

    // Display a thank you message
    var isConfirmed = confirm("Thank you for reaching out, " + fullName + "! We have received your message.");
    contactForm.reset();  

    // Scroll to the top of the page after submitting the form
    if (isConfirmed) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top of the page

        // Reset the form
        contactForm.reset();
    }
});


