
Vue.component("sokkiCanvas", {
    props: ["width", "height"],
    template:
        `<div id="canvas-container">
            <canvas ref="traceCanvas" :width="width" :height="height"></canvas>
            <canvas ref="drawingCanvas" :width="width" :height="height"
                @mousedown="drawStart($event)"
                @mouseover="drawStart($event)"
                @mousemove="draw($event)"
                @mouseup="drawEnd($event)"
                @mouseout="drawEnd($event)"
            ></canvas>
        </div>`,
    data: function() {
        return {
            sokkiCanvas: null
        }
    },
    mounted() {
        this.sokkiCanvas = new SokkiCanvas(this.$refs.drawingCanvas, this.$refs.traceCanvas);
    },
    methods: {
        drawStart: function(event) {
            if (event.buttons !== 1) return; // 左クリック以外描画不可
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
        },
        removeTraceImage: function() {
            this.sokkiCanvas.removeTraceImage();
        }
    }
});

