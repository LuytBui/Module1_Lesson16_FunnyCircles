function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function clearCanvas(canvas, context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

