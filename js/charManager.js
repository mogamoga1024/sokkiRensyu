
class CharManager {
    static #nextOrder = 0;
    #order; #char;

    constructor(char) {
        this.#char = char;
        this.#order = CharManager.#nextOrder++;
        this.isSelected = true;
    }

    get char() {
        return this.#char;
    }

    get order() {
        return this.#order;
    }
}


