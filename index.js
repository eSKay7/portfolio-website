// Select all cards in the carousel
const cards = document.querySelectorAll(".card");

// Info panel (shows section title when hovering over a card)
const infoPanel = document.getElementById("card-info");

// Reference to <body> (used for background color changes)
const body = document.body;

// Track currently active card
let activeCard = null;

// Select all text sections
const sections = document.querySelectorAll(".text");

// Hide all sections by default (nothing visible at load)
sections.forEach(section => section.style.display = "none");

// Add hover behavior for each card
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        // Get the section title from the card’s data-title attribute
        const title = card.getAttribute("data-title");

        // Position the info panel directly below the hovered card
        infoPanel.style.left = card.offsetLeft + "px";
        infoPanel.style.top = card.offsetTop + card.offsetHeight + "px";

        // Remove highlight from previously active card (if any)
        infoPanel.textContent = title;
        if (activeCard != null){
            activeCard.classList.remove("active");
        }
        
        // Highlight the current card
        activeCard = card;
        activeCard.classList.add("active");

        // Hide all sections, then show only the one matching this card
        sections.forEach(section => section.style.display = "none");
        document.querySelector(`.text[data-title = "${title}"]`).style.display = "flex";

        // Update background color based on active section
        switch (infoPanel.textContent) {
            case "Home":
                body.style.backgroundColor = "steelblue";
                break;
            case "About Me":
                body.style.backgroundColor = "darkslateblue";
                break
            case "Experience":
                body.style.backgroundColor = "darkslategrey";
                break;
            case "Projects":
                body.style.backgroundColor = "dimgray";
                break;
            case "Relevant Coursework":
                body.style.backgroundColor = "darkolivegreen";
                break;
            case "Technical Skills":
                body.style.backgroundColor = "cadetblue";
                break;
            case "Contact":
                body.style.backgroundColor = "cornflowerblue";
                break;
        }
    })
});