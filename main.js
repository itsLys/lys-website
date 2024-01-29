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