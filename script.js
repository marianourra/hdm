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


document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('typed-text');
    const text = textElement.textContent;
    textElement.textContent = '';
    
    let index = 0;
    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here (milliseconds)
        } else {
            textElement.style.borderRight = "none"; // Remove the cursor after typing is done
        }
    }

    type();
});
