
Vue.component("question", {
    template: 
        `<div id="container">
            <div id="question-hiragana">{{question}}</div>
            <sokkiCanvas ref="sokkiCanvas" width="600" height="400"></sokkiCanvas>
            <div id="button-container">
                <button id="clear-button" @click="clearCanvas">クリア</button><!--
                --><button id="next-button" @click="nextQuestion">次へ</button>
            </div>
        </div>`,
    data: function() {
        return {
            questionCreater: null,
            question: ""
        }
    },
    methods: {
        clearCanvas: function() {
            this.$refs.sokkiCanvas.clear();
        },
        nextQuestion: function() {
            this.$refs.sokkiCanvas.clear();
            this.question = this.questionCreater.createQuestion(this.question);
        }
    },
    mounted() {
        this.questionCreater = new QuestionCreater();

        this.nextQuestion();
    }
});

