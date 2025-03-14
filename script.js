let cards = [
    { question: "Was ist die Hauptstadt von Deutschland?", answer: "Berlin" },
    { question: "Was ist 5 + 3?", answer: "8" },
    { question: "Wer schrieb 'Faust'?", answer: "Goethe" }
];

let currentIndex = 0;
let flipped = false;

function flipCard() {
    let card = document.getElementById("card");
    card.classList.toggle("flipped");
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    document.getElementById("front-text").innerHTML = "Frage: " + cards[currentIndex].question;
    document.getElementById("back-text").innerHTML = "Antwort: " + cards[currentIndex].answer;
}

function editCard() {
    let text = prompt("Bearbeite die Antwort:", document.getElementById("back-text").innerHTML);
    if (text !== null) {
        document.getElementById("back-text").innerHTML = text;
    }
}

function addBold() {
    let textElement = document.getElementById("back-text");
    textElement.innerHTML = "<b>" + textElement.innerHTML + "</b>";
}

function addItalic() {
    let textElement = document.getElementById("back-text");
    textElement.innerHTML = "<i>" + textElement.innerHTML + "</i>";
}

function addColor() {
    let color = prompt("Gib eine Farbe ein (z.B. 'red', 'blue' oder Hex-Code):", "#972D54");
    document.getElementById("back-text").style.color = color;
}

function saveCard() {
    alert("Karteikarte gespeichert!");
}

function addImage(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "100px";
            img.style.maxHeight = "100px";
            document.getElementById("back-text").appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}
