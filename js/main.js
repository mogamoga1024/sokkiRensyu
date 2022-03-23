
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

function drawStart() {
    context.beginPath();
    isDrag = true;
}

function drawEnd(x, y) {
    draw(x, y); // クリックのみでドラッグされなかった場合、点を描画するために呼び出す。
    context.closePath();
    isDrag = false;
    lastPosition.x = null;
    lastPosition.y = null;
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

const questionHiragana = document.getElementById("question-hiragana");

const questionCharList = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわ";

function changeQuestion() {
    clear();

    const currentChar = questionHiragana.innerText;
    let nextChar = questionCharList[Math.floor(Math.random() * questionCharList.length)];
    while (currentChar === nextChar) {
        nextChar = questionCharList[Math.floor(Math.random() * questionCharList.length)];
    }
    questionHiragana.innerText = nextChar;
}

canvas.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return; // 左クリック以外描画不可
    drawStart();
});

canvas.addEventListener("mouseup", (event) => {
    drawEnd(event.layerX, event.layerY);
});

canvas.addEventListener("mouseout", drawEnd);

canvas.addEventListener("mousemove", (event) => {
    draw(event.layerX, event.layerY);
});

const clearButton = document.getElementById("clear-button");
const nextButton = document.getElementById("next-button");

clearButton.addEventListener("click", clear);

nextButton.addEventListener("click", changeQuestion);
