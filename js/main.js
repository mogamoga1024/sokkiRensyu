
new Vue({
    el: "#app",
    methods: {
        gotoSettings: function() {
            this.$scrollTo("#gojuon");
        },
    },
    created() {
        this.$cookies.config("1m");
        for (const key of this.$cookies.keys()) {
            
        }
    }
});





