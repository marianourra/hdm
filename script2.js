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
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');
    const navbarClose = document.getElementById('navbar-close');

    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    }

    if (navbarClose) {
        navbarClose.addEventListener('click', () => {
            navbarLinks.classList.remove('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100; // Increased offset for better visibility
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navbarLinks.classList.remove('active');
            }
        });
    });

    // Book button functionality
    const bookButton = document.getElementById('bookButton');
    if (bookButton) {
        bookButton.addEventListener('click', function() {
            // Scroll to contact form
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Schedule call button functionality
    const scheduleButton = document.getElementById('scheduleButton');
    if (scheduleButton) {
        scheduleButton.addEventListener('click', function() {
            window.open('https://calendly.com/mariano-hijosdelmarsurf/30min', '_blank');
        });
    }

    // Contact section Schedule a Call button functionality
    const contactScheduleButton = document.querySelector('.contact-info .btn-secondary');
    if (contactScheduleButton) {
        contactScheduleButton.addEventListener('click', function() {
            window.open('https://calendly.com/mariano-hijosdelmarsurf/30min', '_blank');
        });
    }

    // Request Custom Quote button functionality
    const quoteButton = document.querySelector('.pricing-card .btn-primary');
    if (quoteButton) {
        quoteButton.addEventListener('click', function() {
            window.open('https://calendly.com/mariano-hijosdelmarsurf/30min', '_blank');
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Parallax effect for hero section
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        });
    }

    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-image');
        const prevButton = carousel.parentElement.querySelector('.carousel-prev');
        const nextButton = carousel.parentElement.querySelector('.carousel-next');
        let currentIndex = 0;
        let interval;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        // Auto-rotate images every 5 seconds
        function startAutoRotate() {
            interval = setInterval(nextImage, 5000);
        }

        function stopAutoRotate() {
            clearInterval(interval);
        }

        // Event listeners for carousel controls
        if (prevButton && nextButton) {
            prevButton.addEventListener('click', () => {
                stopAutoRotate();
                prevImage();
                startAutoRotate();
            });

            nextButton.addEventListener('click', () => {
                stopAutoRotate();
                nextImage();
                startAutoRotate();
            });

            // Pause auto-rotate when hovering over carousel
            carousel.addEventListener('mouseenter', stopAutoRotate);
            carousel.addEventListener('mouseleave', startAutoRotate);
        }

        // Start auto-rotation
        startAutoRotate();
    });

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.fade-in');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check for elements in view
    revealOnScroll();

    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
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

// Recipient for retreat/contact form notifications (must match EmailJS template "To email" if using {{to_email}})
const RETREAT_NOTIFICATION_EMAIL = 'mariano@hijosdelmarsurf.com';

// Initialize EmailJS
(function() {
    emailjs.init("VusqYbeKiY0F4UlTl");
})();

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Get form values
    const contactName = document.getElementById('contactName').value;
    const companyName = document.getElementById('companyName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Prepare template parameters
    const templateParams = {
        to_email: RETREAT_NOTIFICATION_EMAIL,
        to_name: "Almas del Mar Team",
        from_name: contactName,
        company: companyName,
        from_email: email,
        reply_to: email,
        phone: phone,
        message: `Company: ${companyName}\nContact Name: ${contactName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    };

    // Log the parameters for debugging
    console.log('Sending email with parameters:', templateParams);

    // Send email using EmailJS
    emailjs.send('service_0884mls', 'template_c9rww15', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            
            // Show success popup
            document.getElementById('confirmationPopup').classList.add('active');
            
            // Reset form
            document.getElementById('contactForm').reset();
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
        })
        .finally(function() {
            // Reset button state
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        });
});

// Close popup when clicking the close button or outside the popup
document.querySelector('.close-popup-btn').addEventListener('click', function() {
    document.getElementById('confirmationPopup').classList.remove('active');
});

document.getElementById('confirmationPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

