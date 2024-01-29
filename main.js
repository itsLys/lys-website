// Contact form
function success() {
  const successMessage = document.getElementById('message-sent');
  successMessage.textContent = 'Message sent successfully!'
}
function error() {
  const successMessage = document.getElementById('message-sent');
  successMessage.textContent = 'Something went wrong!'
}
window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_mdq1zw3', 'template_40f1q5o', this)
      .then(function () {
        console.log('SUCCESS!');
        success()
      }, function (error) {
        error();
        console.log('FAILED...', error);
      });
  });
};
// Nav Toggle
(function () {
  var button = document.getElementById('nav-toggle');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    var menu = document.getElementById('nav-list');
    menu.classList.toggle('open');
  });
})();
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

