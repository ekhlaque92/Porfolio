// // Get the Hire Me button element
// var hireMe = document.getElementById('hireMeBtn');

// // Add a click event listener
// hireMe.addEventListener('click', function() {
//     // Display a confirmation dialog box
//     var isConfirmed = confirm("Do you want to hire me?");
    
//     // Check if the user confirmed the hiring action
//     if (isConfirmed) {
//         alert("Then please fill out the contact form below.");
//         // Smooth scroll to the contact section
//         document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
//     } else {
//         alert("Hiring action canceled. Feel free to explore more about me.");
//     }
// });


// // Get the contact form element
// var contactForm = document.querySelector('.contact form');
// var contactFormSubmitButton = document.getElementById('contactForm');

// // Add a submit event listener to the form
// contactForm.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     var fullName = document.querySelector('.contact form input[placeholder="Full Name"]').value;
//     var email = document.querySelector('.contact form input[placeholder="Email Address"]').value;
//     var mobileNumber = document.querySelector('.contact form input[type="number"]').value;
//     var emailSubject = document.querySelector('.contact form input[placeholder="Email Subject"]').value;
//     var message = document.querySelector('.contact form textarea').value;

//     // Validate mobile number length
//     if (mobileNumber.length !== 10 || isNaN(mobileNumber) ) {
//         alert('Please enter a 10-digit mobile number');
//         return;
//     }

//     // Validate email format
//     if (!email.endsWith('@gmail.com')) {
//         alert('Please enter a valid email ending with @gmail.com');
//         return;
//     }

//     // Your logic to handle the form data, for example, sending it to a server using AJAX or fetch

//     // Display a thank you message
//     var isConfirmed = confirm("Thank you for reaching out, " + fullName + "! We have received your message.");
//     contactForm.reset();  

//     // Scroll to the top of the page after submitting the form
//     if (isConfirmed) {
//         window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top of the page

//         // Reset the form
//         contactForm.reset();
//     }
// });


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

   var fullName = document.querySelector('.contact input[placeholder="Full Name"]').value;
   var email = document.querySelector('.contact input[placeholder="Email Address"]').value;
   var mobileNumber = document.querySelector('.contact input[type="number"]').value;
   var emailSubject = document.querySelector('.contact input[placeholder="Email Subject"]').value;
   var message = document.querySelector('.contact textarea').value;

   // Validate mobile number length
   if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
       alert('Please enter a 10-digit mobile number');
       return;
   }

   // Validate email format
//    if (!email.endsWith('@gmail.com')) {
//        alert('Please enter a valid email ending with @gmail.com');
//        return;
//    }

   // Create a confirmation message for the user
   var confirmationMessage = "Please verify the information entered:\n\n" + 
                            "Full Name: " + fullName + "\n" +
                            "Email Address: " + email + "\n" +
                            "Mobile Number: " + mobileNumber + "\n" +
                            "Email Subject: " + emailSubject + "\n" +
                            "Message: " + message + "\n\n" +
                            "If everything looks correct, click OK to submit.";

   if (confirm(confirmationMessage)) {
       // Your logic to handle the form data, for example, sending it to a server using AJAX or fetch

       // Display a thank you message
       alert("Thank you for your submission, " + fullName + "! Your message has been received.");
       contactForm.reset(); // Reset the form after submission

       // Scroll to the top of the page after submitting the form
       window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top of the page
   }
});

function contactWhatsApp() {
    const mobileNumber = '9867747164'; // Your mobile number
    const message = 'Please contact me on my WhatsApp number - ' + mobileNumber;
    const confirmCopy = confirm(message + '\n\nWould you like to copy the mobile number?');
  
    if (confirmCopy) {
      copyToClipboard(mobileNumber);
      alert('Mobile number copied to clipboard: ' + mobileNumber);
    } else {
      alert('Feel free to reach out to me on WhatsApp!');
    }
  }
  
  function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
  