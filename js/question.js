
class Question {
    #questionCharList = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわ";
    #questionDom; #sokkiCanvas;

    constructor(questionDom, sokkiCanvas) {
        this.#questionDom = questionDom;
        this.#sokkiCanvas = sokkiCanvas;
    }

    giveQuestion() {
        this.#sokkiCanvas.clear();

        const currentChar = this.#questionDom.innerText;
        let nextChar = this.#questionCharList[Math.randomInt(this.#questionCharList.length)];
        while (currentChar === nextChar) {
            nextChar = this.#questionCharList[Math.randomInt(this.#questionCharList.length)];
        }
        this.#questionDom.innerText = nextChar;
    }
}

