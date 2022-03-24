
const sokkiCanvas = new SokkiCanvas(document.getElementById("canvas"));

const question = new Question(document.getElementById("question-hiragana"), sokkiCanvas);

const clearButton = document.getElementById("clear-button");
const nextButton = document.getElementById("next-button");

clearButton.addEventListener("click", () => {
    sokkiCanvas.clear();
});

nextButton.addEventListener("click", () => {
    question.giveQuestion();
});

question.giveQuestion();

