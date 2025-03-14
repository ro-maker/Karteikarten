function flipCard() {
    document.getElementById("card").classList.toggle("flipped");
}

function saveEdit() {
    let newText = document.getElementById("editText").value;
    document.getElementById("answer").innerHTML = newText;
}

function addImage(event) {
    let reader = new FileReader();
    reader.onload = function(){
        let img = document.createElement("img");
        img.src = reader.result;
        img.style.maxWidth = "100%";
        document.getElementById("answer").appendChild(img);
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Zeichnen aktivieren
let canvas = document.getElementById("drawCanvas");
let ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 200;
canvas.style.border = "1px solid black";
canvas.style.marginTop = "10px";

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
