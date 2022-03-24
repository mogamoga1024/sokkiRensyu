
class Gojuon {
    static #charList = [
        [new CharManager("あ"), new CharManager("い"), new CharManager("う"), new CharManager("え"), new CharManager("お")],
        [new CharManager("か"), new CharManager("き"), new CharManager("く"), new CharManager("け"), new CharManager("こ")],
        [new CharManager("さ"), new CharManager("し"), new CharManager("す"), new CharManager("せ"), new CharManager("そ")],
        [new CharManager("た"), new CharManager("ち"), new CharManager("つ"), new CharManager("て"), new CharManager("と")],
        [new CharManager("な"), new CharManager("に"), new CharManager("ぬ"), new CharManager("ね"), new CharManager("の")],
        [new CharManager("は"), new CharManager("ひ"), new CharManager("ふ"), new CharManager("へ"), new CharManager("ほ")],
        [new CharManager("ま"), new CharManager("み"), new CharManager("む"), new CharManager("め"), new CharManager("も")],
        [new CharManager("や"), null                 , new CharManager("ゆ"), null                 , new CharManager("よ")],
        [new CharManager("ら"), new CharManager("り"), new CharManager("る"), new CharManager("れ"), new CharManager("ろ")],
        [new CharManager("わ"), null                 , null                 , null                 , null                 ],
    ];

    static get charList() {
        return this.#charList;
    }

    static get selectedCharList() {
        return this.#charList.flat().filter(c => c !== null && c.isSelected).map(c => c.char);
    }
};

