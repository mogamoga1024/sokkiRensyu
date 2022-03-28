
class QuestionCreater {
    #currentChar = null;

    createQuestion(isRandom) {
        let newChar = null
        if (isRandom) {
            const charList = Gojuon.selectedCharList;

            if (charList.length === 0) {
                this.#currentChar = null;
                return "";
            }

            do {
                newChar = charList[Math.randomInt(charList.length)];
            }
            while (this.#currentChar === newChar && charList.length > 1);
        }
        else {
            newChar = Gojuon.nextSelectedChar(this.#currentChar);
            
            if (newChar === null) {
                this.#currentChar = null;
                return "";
            }
        }
        
        this.#currentChar = newChar;

        return newChar.char;
    }
}

