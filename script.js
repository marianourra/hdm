document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".animated-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});


function toggleDescription(card) {
    card.classList.toggle('show-description');
    const img = card.querySelector('img');
    const cardText = card.querySelector('.card-text');
    if (card.classList.contains('show-description')) {
        img.style.filter = 'grayscale(0%)';
        cardText.style.maxHeight = cardText.scrollHeight + "px"; // Dynamically set the max-height to the scrollHeight of the element
    } else {
        img.style.filter = 'grayscale(100%)';
        cardText.style.maxHeight = "0";
    }
}



// Set the date we're counting down to
const countdownDate = new Date("Oct 15, 2024 00:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countdownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_4pdd21l'; // Reemplaza con tu service_id de EmailJS
    const templateID = 'template_c9rww15'; // Reemplaza con tu template_id de EmailJS

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Mensaje enviado exitosamente!');
            document.getElementById('contactForm').reset();
        }, (err) => {
            alert(JSON.stringify(err));
        });
});
