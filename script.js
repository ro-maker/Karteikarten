let cards = [
    { question: "Was ist die Hauptstadt von Deutschland?", answer: "Berlin" },
    { question: "Was ist 5 + 3?", answer: "8" },
    { question: "Wer schrieb 'Faust'?", answer: "Goethe" }
];

let currentIndex = 0;
let flipped = false;

function flipCard() {
    document.querySelector(".card").classList.toggle("flip");
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    flipped = false;
    document.getElementById("front").textContent = "Frage: " + cards[currentIndex].question;
    document.getElementById("back").textContent = "Antwort: " + cards[currentIndex].answer;
    document.querySelector(".card").classList.remove("flip");
}

// Setzt die erste Karte beim Laden
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("front").textContent = "Frage: " + cards[currentIndex].question;
    document.getElementById("back").textContent = "Antwort: " + cards[currentIndex].answer;
});
