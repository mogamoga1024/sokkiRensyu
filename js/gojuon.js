
class Gojuon {
    static #charDic = {
        "あ": new CharManager("あ"), "い": new CharManager("い"), "う": new CharManager("う"), "え": new CharManager("え"), "お": new CharManager("お"),
        "か": new CharManager("か"), "き": new CharManager("き"), "く": new CharManager("く"), "け": new CharManager("け"), "こ": new CharManager("こ"),
        "さ": new CharManager("さ"), "し": new CharManager("し"), "す": new CharManager("す"), "せ": new CharManager("せ"), "そ": new CharManager("そ"),
        "た": new CharManager("た"), "ち": new CharManager("ち"), "つ": new CharManager("つ"), "て": new CharManager("て"), "と": new CharManager("と"),
        "な": new CharManager("な"), "に": new CharManager("に"), "ぬ": new CharManager("ぬ"), "ね": new CharManager("ね"), "の": new CharManager("の"),
        "は": new CharManager("は"), "ひ": new CharManager("ひ"), "ふ": new CharManager("ふ"), "へ": new CharManager("へ"), "ほ": new CharManager("ほ"),
        "ま": new CharManager("ま"), "み": new CharManager("み"), "む": new CharManager("む"), "め": new CharManager("め"), "も": new CharManager("も"),
        "や": new CharManager("や"), "ゆ": new CharManager("ゆ"), "よ": new CharManager("よ"),
        "ら": new CharManager("ら"), "り": new CharManager("り"), "る": new CharManager("る"), "れ": new CharManager("れ"), "ろ": new CharManager("ろ"),
        "わ": new CharManager("わ")
    };

    static #charTable = [
        [this.#charDic["あ"], this.#charDic["い"], this.#charDic["う"], this.#charDic["え"], this.#charDic["お"]],
        [this.#charDic["か"], this.#charDic["き"], this.#charDic["く"], this.#charDic["け"], this.#charDic["こ"]],
        [this.#charDic["さ"], this.#charDic["し"], this.#charDic["す"], this.#charDic["せ"], this.#charDic["そ"]],
        [this.#charDic["た"], this.#charDic["ち"], this.#charDic["つ"], this.#charDic["て"], this.#charDic["と"]],
        [this.#charDic["な"], this.#charDic["に"], this.#charDic["ぬ"], this.#charDic["ね"], this.#charDic["の"]],
        [this.#charDic["は"], this.#charDic["ひ"], this.#charDic["ふ"], this.#charDic["へ"], this.#charDic["ほ"]],
        [this.#charDic["ま"], this.#charDic["み"], this.#charDic["む"], this.#charDic["め"], this.#charDic["も"]],
        [this.#charDic["や"], null               , this.#charDic["ゆ"], null               , this.#charDic["よ"]],
        [this.#charDic["ら"], this.#charDic["り"], this.#charDic["る"], this.#charDic["れ"], this.#charDic["ろ"]],
        [this.#charDic["わ"], null               , null               , null               , null               ],
    ];
    
    static get charDic() {
        return this.#charDic;
    }

    static get charTable() {
        return this.#charTable;
    }

    static get selectedCharList() {
        return this.#charTable.flat().filter(c => c !== null && c.isSelected).map(c => c.char);
    }
};

