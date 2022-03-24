
Vue.component("sokkiCanvas", {
    template:
        `<canvas id="canvas" :width="width" :height="height"
            @mousedown="drawStart($event)"
            @mousemove="draw($event)"
            @mouseup="drawEnd($event)"
            @mouseout="drawEnd($event)"
        ></canvas>`,
    props: ["width", "height"],
    data: function() {
        return {
            sokkiCanvas: null
        }
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
        }
    },
    mounted() {
        this.sokkiCanvas = new SokkiCanvas(this.$el);
    }
});

