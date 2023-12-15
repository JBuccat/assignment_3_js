// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
var submit_button = document.getElementById('submit-button');
var contact_page = document.getElementById('contact-page');

submit_button.addEventListener('click', function(event) {
    event.preventDefault();

    contact_page.innerHTML = '';

    var thank_you_message = document.createElement('p');
    thank_you_message.textContent = 'Thank you for your message';
    thank_you_message.style.fontSize = '24px';

    contact_page.appendChild(thank_you_message);
});
