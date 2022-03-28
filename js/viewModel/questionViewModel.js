
Vue.component("question", {
    template: 
        `<div>
            <div id="question-hiragana">{{question}}</div>
            <sokkiCanvas ref="sokkiCanvas" width="600" height="400"></sokkiCanvas>
            <div id="button-container">
                <label for="random-checkbox">
                    <input type="checkbox" id="random-checkbox" v-model="isRandom" @click="random" />ランダム
                </label><!--
                --><label for="trace-checkbox">
                    <input type="checkbox" id="trace-checkbox" v-model="isTrace" @click="trace" />トレス
                </label><!--
                --><button id="clear-button" @click="clearCanvas">クリア</button><!--
                --><button id="next-button" @click="nextQuestion">次へ</button>
            </div>
        </div>`,
    data: function() {
        return {
            questionCreater: null,
            question: "",
            isRandom: false,
            isTrace: false,
        }
    },
    computed: {
        traceImagePath: function() {
            if (this.question === "") return null;
            return document.location.href + "assets/sample/" + this.question + ".png";
        }
    },
    created() {
        this.isTrace = this.$cookies.get("isTrace") === "true";
        this.questionCreater = new QuestionCreater();
    },
    mounted() {
        this.nextQuestion();
    },
    methods: {
        random: function() {
            this.isRandom = !this.isRandom;
            
        },
        trace: function() {
            this.isTrace = !this.isTrace;
            this.$cookies.set("isTrace", this.isTrace);
            if (this.isTrace) {
                this.$refs.sokkiCanvas.addTraceImage(this.traceImagePath);
            }
            else {
                this.$refs.sokkiCanvas.removeTraceImage();
            }
        },
        clearCanvas: function() {
            this.$refs.sokkiCanvas.clear();
        },
        nextQuestion: function() {
            this.$refs.sokkiCanvas.clear();
            this.$refs.sokkiCanvas.removeTraceImage();
            this.question = this.questionCreater.createQuestion(this.question);
            if (this.isTrace) {
                this.$refs.sokkiCanvas.addTraceImage(this.traceImagePath);
            }
        }
    }
});

