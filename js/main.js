
new Vue({
    el: "#app",
    methods: {
        gotoSettings: function() {
            this.$scrollTo("#gojuon");
        },
    },
    created() {
        this.$cookies.config("1m");
        const charDic = Gojuon.charDic;
        for (const key of this.$cookies.keys()) {
            charDic[key].isSelected = this.$cookies.get(key) === "true";
        }
    }
});





