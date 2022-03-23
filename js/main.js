
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

context.lineCap = "round";
context.lineJoin = "round";
context.lineWidth = 5;
context.strokeStyle = "black";

const lastPosition = {x: null, y: null};

let isDrag = false;

function draw(x, y) {
    if(isDrag === false) {
        return;
    }

    if (lastPosition.x === null || lastPosition.y === null) {
        context.moveTo(x, y);
    } else {
        context.moveTo(lastPosition.x, lastPosition.y);
    }
    context.lineTo(x, y);
    context.stroke();
    
    lastPosition.x = x;
    lastPosition.y = y;
}

function dragStart() {
    context.beginPath();
    isDrag = true;
}

function dragEnd() {
    context.closePath();
    isDrag = false;
    lastPosition.x = null;
    lastPosition.y = null;
}

canvas.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return; // 左クリック以外描画不可
    dragStart();
});
canvas.addEventListener("mouseup", (event) => {
    draw(event.layerX, event.layerY);
    dragEnd();
});
canvas.addEventListener("mouseout", dragEnd);
canvas.addEventListener("mousemove", (event) => {
    draw(event.layerX, event.layerY);
});

