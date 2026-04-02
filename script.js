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
    const cardText = card.querySelector('.card-text');
    if (card.classList.contains('show-description')) {
        cardText.style.maxHeight = cardText.scrollHeight + "px"; // Set max-height to scrollHeight
    } else {
        cardText.style.maxHeight = "0";
    }
}




// Set the date we're counting down to
const countdownDate = new Date("Feb 16, 2026 00:00:00").getTime();

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


window.addEventListener('load', function() {
    var rectangle = document.querySelector('.sliding-rectangle');
    setTimeout(function() {
        rectangle.classList.add('visible'); // Agrega la clase 'visible' para iniciar la animación
    }, 100); // Tiempo de espera antes de que comience el deslizamiento (100 ms en este caso)
});

// Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Navegación móvil
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');
    const navbarClose = document.getElementById('navbar-close');

        navbarToggle.addEventListener('click', () => {
        navbarLinks.classList.add('active');
        });

        navbarClose.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
        });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', () => {
                navbarLinks.classList.remove('active');
        });
    });

    // Botones de llamada a la acción
    const bookButton = document.getElementById('bookButton');

    bookButton.addEventListener('click', () => {
        window.location.href = '#contact';
    });

    // Carrusel de imágenes
    const carouselImages = document.querySelectorAll('.carousel-image');
    const prevButtons = document.querySelectorAll('.carousel-prev');
    const nextButtons = document.querySelectorAll('.carousel-next');
    let currentIndex = 0;

    function updateCarousel(index) {
        carouselImages.forEach(img => img.classList.remove('active'));
        carouselImages[index].classList.add('active');
    }

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
            updateCarousel(currentIndex);
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % carouselImages.length;
            updateCarousel(currentIndex);
        });
    });

    // Animaciones de scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Deshabilitar el botón durante el envío
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        // Obtener los valores del formulario
        const formData = {
            to_email: 'mariano@hijosdelmarsurf.com',
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            reply_to: document.getElementById('email').value,
            message: document.getElementById('message').value,
            to_name: 'Hijos del Mar'
        };

        // Enviar el email usando EmailJS
        emailjs.send('service_0884mls', 'template_c9rww15', formData)
            .then(function() {
                alert('¡Gracias por contactarnos! Te responderemos pronto.');
                contactForm.reset();
            })
            .catch(function(error) {
                alert('Lo sentimos, hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
                console.error('Error:', error);
            })
            .finally(function() {
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar Mensaje';
            });
    });
});

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.faq-toggle');
        
        // Toggle active class on answer
        answer.classList.toggle('active');
        
        // Toggle active class on question
        question.classList.toggle('active');
        
        // Toggle arrow rotation
        toggle.classList.toggle('active');
        
        // Close other answers
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.classList.contains('active')) {
                otherAnswer.classList.remove('active');
                otherAnswer.previousElementSibling.classList.remove('active');
                otherAnswer.previousElementSibling.querySelector('.faq-toggle').classList.remove('active');
            }
        });
    });
});

// Initialize EmailJS
(function() {
    emailjs.init("VusqYbeKiY0F4UlTl");
})();

// Close popup when clicking the close button or outside the popup
document.querySelector('.close-popup-btn').addEventListener('click', function() {
    document.getElementById('confirmationPopup').classList.remove('active');
});

document.getElementById('confirmationPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

