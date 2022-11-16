
const Common = {};

Common.traceImagePath = function(char) {
    return document.location.href + "assets/sample/" + char + ".png";
};

/**
 * 0以上max未満のランダムな整数を返す。
 * @param {number} max 
 * @returns
 */
Math.randomInt = function(max) {
    return Math.floor(Math.random() * max);
};

