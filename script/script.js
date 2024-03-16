document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre inscription ! Nous vous tiendrons informés des dernières nouvelles.');
    this.reset();
});
