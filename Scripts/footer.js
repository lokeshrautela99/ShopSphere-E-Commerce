document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    document.getElementById('subscription-message').textContent = `Thank you for subscribing with ${email}`;
    document.getElementById('email').value = '';
});