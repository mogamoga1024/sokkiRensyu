
class CharManager {
    #char;

    constructor(char) {
        this.#char = char;
        this.isSelected = true;
    }

    get char() {
        return this.#char;
    }
}


