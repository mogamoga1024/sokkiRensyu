
Vue.component("sokkiCanvas", {
    props: ["width", "height"],
    template:
        `<canvas id="canvas" :width="width" :height="height"
            @mousedown="drawStart($event)"
            @mousemove="draw($event)"
            @mouseup="drawEnd($event)"
            @mouseout="drawEnd($event)"
        ></canvas>`,
    data: function() {
        return {
            sokkiCanvas: null
        }
    },
    mounted() {
        this.sokkiCanvas = new SokkiCanvas(this.$el);
    },
    methods: {
        drawStart: function(event) {
            if (event.button !== 0) return; // 左クリック以外描画不可
            this.sokkiCanvas.drawStart();
        },
        drawEnd: function(event) {
            this.sokkiCanvas.drawEnd(event.offsetX, event.offsetY);
        },
        draw: function(event) {
            this.sokkiCanvas.draw(event.offsetX, event.offsetY);
        },
        clear: function() {
            this.sokkiCanvas.clear();
        },
        addTraceImage: function(imagePath) {
            this.sokkiCanvas.addTraceImage(imagePath);
        }
    }
});

