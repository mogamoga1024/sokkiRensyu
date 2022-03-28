
class QuestionCreater {
    #questionCharIndex = 0;
    #prevIsRandom = true;

    createQuestion(oldQuestion, isRandom) {
        const questionCharList = Gojuon.selectedCharList;
        
        if (questionCharList.length === 0) return "";

        let newQuestion = "";
        if (isRandom) {
            do {
                newQuestion = questionCharList[Math.randomInt(questionCharList.length)];
            }
            while (oldQuestion === newQuestion && questionCharList.length > 1);
        }
        else {
            if (this.#prevIsRandom || this.#questionCharIndex >= questionCharList.length - 1) {
                this.#questionCharIndex = 0;
                newQuestion = questionCharList[this.#questionCharIndex];
            }
            else {
                newQuestion = questionCharList[++this.#questionCharIndex];
            }

            if (this.#prevIsRandom && oldQuestion === newQuestion && questionCharList.length > 1) {
                newQuestion = questionCharList[++this.#questionCharIndex];
            }
        }
        
        this.#prevIsRandom = isRandom;

        return newQuestion;
    }
}

