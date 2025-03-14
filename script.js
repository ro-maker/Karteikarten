let flipped = false;
let currentIndex = 0;

let cards = [
    { question: "Was ist die Hauptstadt von Deutschland?", answer: "Berlin" },
    { question: "Was ist 5 + 3?", answer: "8" },
    { question: "Wer schrieb 'Faust'?", answer: "Goethe" }
];

function flipCard() {
    flipped = !flipped;
    document.getElementById("card").classList.toggle("flipped", flipped);
    document.getElementById("buttons").classList.toggle("hidden", !flipped);
}

function rateCard(difficulty) {
    if (difficulty === "easy") {
        cards.splice(currentIndex, 1);
    } else {
        currentIndex = (currentIndex + 1) % cards.length;
    }
    updateCard();
}

function updateCard() {
    if (cards.length === 0) {
        document.getElementById("question").innerText = "Alle Karten erledigt!";
        document.getElementById("answer").innerText = "";
        return;
    }
    flipped = false;
    document.getElementById("card").classList.remove("flipped");
    document.getElementById("buttons").classList.add("hidden");
    document.getElementById("question").innerText = "Frage: " + cards[currentIndex].question;
    document.getElementById("answer").innerText = "Antwort: " + cards[currentIndex].answer;
}

// ✨ Bearbeiten der Karte
function editCard() {
    let answerDiv = document.getElementById("answer");
    let questionDiv = document.getElementById("question");

    answerDiv.innerHTML = `<textarea id="editAnswer">${cards[currentIndex].answer}</textarea>`;
    questionDiv.innerHTML = `<textarea id="editQuestion">${cards[currentIndex].question}</textarea>`;

    CKEDITOR.replace("editAnswer"); 
    CKEDITOR.replace("editQuestion");

    document.getElementById("saveButton").classList.remove("hidden");
}

// ✨ Speichern der bearbeiteten Karte
function saveCard() {
    let answerText = CKEDITOR.instances.editAnswer.getData();
    let questionText = CKEDITOR.instances.editQuestion.getData();

    cards[currentIndex].answer = answerText;
    cards[currentIndex].question = questionText;

    document.getElementById("question").innerHTML = "Frage: " + questionText;
    document.getElementById("answer").innerHTML = "Antwort: " + answerText;

    document.getElementById("saveButton").classList.add("hidden");
}

// ✨ Bild hochladen und anzeigen
document.getElementById("imageUpload").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (!file) return;

    let reader = new FileReader();
    reader.onload = function(e) {
        let img = document.createElement("img");
        img.src = e.target.result;
        img.style.width = "100%";
        document.getElementById("answer").appendChild(img);
    };
    reader.readAsDataURL(file);
});

// ✨ Zeichnen auf der Karte
let canvas = document.getElementById("drawCanvas");
let ctx = canvas.getContext("2d");
let drawing = false;

canvas.width = 280;
canvas.height = 150;

function startDrawing() {
    drawing = true;
}

function stopDrawing() {
    drawing = false;
}

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#972D54";
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}
