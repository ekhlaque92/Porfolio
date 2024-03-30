
var hireMe = document.getElementById('hireMeBtn');


hireMe.addEventListener('click', function() {
   
   var isConfirmed = confirm("Do you want to hire me?");
   
   
   if (isConfirmed) {
       alert("Then please fill out the contact form below.");
       
       document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
   } else {
       alert("Hiring action canceled. Feel free to explore more about me.");
   }
});

var contactForm = document.querySelector('.contact form');
var contactFormSubmitButton = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
   event.preventDefault(); 

   var fullName = document.querySelector('.contact input[placeholder="Full Name"]').value;
   var email = document.querySelector('.contact input[placeholder="Email Address"]').value;
   var mobileNumber = document.querySelector('.contact input[type="number"]').value;
   var emailSubject = document.querySelector('.contact input[placeholder="Email Subject"]').value;
   var message = document.querySelector('.contact textarea').value;

   if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
       alert('Please enter a 10-digit mobile number');
       return;
   }

   var confirmationMessage = "Please verify the information entered\n\n" + 
                            "Full Name: " + fullName + "\n" +
                            "Email Address: " + email + "\n" +
                            "Mobile Number: " + mobileNumber + "\n" +
                            "Email Subject: " + emailSubject + "\n" +
                            "Message: " + message + "\n\n" +
                            "Click OK to submit.";

   if (confirm(confirmationMessage)) {
       alert("Thank you for your submission, " + fullName + "! Your message has been received.");
       contactForm.reset(); 
       window.scrollTo({ top: 0, behavior: 'smooth' }); 
   }
});

function contactWhatsApp() {
    const mobileNumber = '+91-9867747164';
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
  