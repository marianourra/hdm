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

