let flipped = false;
const card = document.getElementById("card");
const buttons = document.getElementById("buttons");

// Quill-Editor für Vorder- & Rückseite
const quillFront = new Quill("#editor-front", { theme: "snow" });
const quillBack = new Quill("#editor-back", { theme: "snow" });

function flipCard() {
    flipped = !flipped;
    card.classList.toggle("flipped");

    if (flipped) {
        buttons.classList.remove("hidden");
    } else {
        buttons.classList.add("hidden");
    }
}

// Bilder hochladen
document.getElementById("imageUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            img.style.maxWidth = "100%";
            document.getElementById("editor-back").appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});

// Zeichenfunktion
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

// Funktion: Karte als "Einfach" markieren und aus dem Set nehmen
function markAsEasy() {
    alert("Diese Karte wurde als einfach markiert und entfernt.");
    card.style.display = "none";
}
