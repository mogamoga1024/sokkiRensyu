
Vue.component("question", {
    template: 
        `<div id="container">
            <div id="question-hiragana">{{question}}</div>
            <canvas id="canvas" width="600" height="400"></canvas>
            <div id="button-container">
                <button id="clear-button" @click="clearCanvas">クリア</button><!--
                --><button id="next-button" @click="nextQuestion">次へ</button>
            </div>
        </div>`,
    data: function() {
        return {
            sokkiCanvas: null,
            questionCreater: null,
            question: ""
        }
    },
    methods: {
        clearCanvas: function() {
            this.sokkiCanvas.clear();
        },
        nextQuestion: function() {
            this.sokkiCanvas.clear();
            this.question = this.questionCreater.createQuestion(this.question);
        }
    },
    mounted() {
        this.sokkiCanvas = new SokkiCanvas(document.getElementById("canvas"));
        this.questionCreater = new QuestionCreater();

        this.nextQuestion();
    }
});

