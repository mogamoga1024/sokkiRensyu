
Vue.component("question", {
    template: 
        `<div>
            <div id="question-hiragana">{{question}}</div>
            <div @click.right.prevent="nextQuestion">
                <sokkiCanvas ref="sokkiCanvas" width="600" height="400"></sokkiCanvas>
            </div>
            <div id="button-container">
                <label for="random-checkbox">
                    <input type="checkbox" id="random-checkbox" :checked="isRandom" @click="random" />ランダム
                </label><!--
                --><label for="trace-checkbox">
                    <input type="checkbox" id="trace-checkbox" :checked="isTrace" @click="trace" />トレス
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
            return Common.traceImagePath(this.question);
        }
    },
    created() {
        this.isRandom = this.$cookies.get("isRandom") === "true";
        this.isTrace = this.$cookies.get("isTrace") === "true";
        this.questionCreater = new QuestionCreater();

        // 画像の先読み込み
        for (const char of Gojuon.charList) {
            const imagePath = Common.traceImagePath(char.char);
            const img = document.createElement("img");
            img.src = imagePath;
        }
    },
    mounted() {
        this.nextQuestion();
    },
    methods: {
        random: function() {
            this.isRandom = !this.isRandom;
            this.$cookies.set("isRandom", this.isRandom);
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
            this.question = this.questionCreater.createQuestion(this.isRandom);
            if (this.isTrace) {
                this.$refs.sokkiCanvas.addTraceImage(this.traceImagePath);
            }
        }
    }
});

