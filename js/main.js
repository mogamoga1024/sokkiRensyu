
new Vue({
    el: "#app",
    methods: {
        gotoTop: function() {
            this.$scrollTo("#app");
        },
        gotoSettings: function() {
            this.$scrollTo("#gojuon");
        },
    },
    created() {
        this.$cookies.config("1m");
        const charDic = Gojuon.charDic;
        for (const key in charDic) {
            if (this.$cookies.isKey(key)) {
                charDic[key].isSelected = this.$cookies.get(key) === "true";
            }
        }
    }
});





