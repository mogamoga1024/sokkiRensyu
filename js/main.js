
const sokkiCanvas = new SokkiCanvas(document.getElementById("canvas"));

const questionHiragana = document.getElementById("question-hiragana");

const questionCharList = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわ";

function changeQuestion() {
    sokkiCanvas.clear();

    const currentChar = questionHiragana.innerText;
    let nextChar = questionCharList[Math.floor(Math.random() * questionCharList.length)];
    while (currentChar === nextChar) {
        nextChar = questionCharList[Math.floor(Math.random() * questionCharList.length)];
    }
    questionHiragana.innerText = nextChar;
}


const clearButton = document.getElementById("clear-button");
const nextButton = document.getElementById("next-button");

clearButton.addEventListener("click", () => {
    sokkiCanvas.clear();
});

nextButton.addEventListener("click", () => {
    changeQuestion();
});

changeQuestion();

