
class QuestionCreater {
    #questionCharList = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわ";

    createQuestion(oldQuestion) {
        let newQuestion = this.#questionCharList[Math.randomInt(this.#questionCharList.length)];
        while (oldQuestion === newQuestion) {
            newQuestion = this.#questionCharList[Math.randomInt(this.#questionCharList.length)];
        }
        return newQuestion;
    }
}

