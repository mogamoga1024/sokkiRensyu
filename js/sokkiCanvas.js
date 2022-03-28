
class SokkiCanvas {
    #context; #traceContext; #lastPosition; #isDrag;

    constructor(canvas, traceCanvas) {
        this.#context = canvas.getContext("2d");
        this.#context.lineCap = "round";
        this.#context.lineJoin = "round";
        this.#context.lineWidth = 5;
        this.#context.strokeStyle = "black";

        this.#traceContext = traceCanvas.getContext("2d");

        this.#lastPosition = {x: null, y: null};
        this.#isDrag = false;
    }

    draw(x, y) {
        if(this.#isDrag === false) {
            return;
        }
    
        if (this.#lastPosition.x === null || this.#lastPosition.y === null) {
            this.#context.moveTo(x, y);
        } else {
            this.#context.moveTo(this.#lastPosition.x, this.#lastPosition.y);
        }
        this.#context.lineTo(x, y);
        this.#context.stroke();
        
        this.#lastPosition.x = x;
        this.#lastPosition.y = y;
    }
    
    drawStart() {
        this.#context.beginPath();
        this.#isDrag = true;
    }
    
    drawEnd(x, y) {
        this.draw(x, y); // クリックのみでドラッグされなかった場合、点を描画するために呼び出す。
        this.#context.closePath();
        this.#isDrag = false;
        this.#lastPosition.x = null;
        this.#lastPosition.y = null;
    }
    
    clear() {
        const canvas = this.#context.canvas;
        this.#context.clearRect(0, 0, canvas.width, canvas.height);
    }

    addTraceImage(imagePath) {
        if (imagePath === null) return;

        const image = new Image();
        image.src = imagePath;
        image.onload = () => {
            const canvas = this.#traceContext.canvas;
            this.#traceContext.drawImage(image, (canvas.width - image.width) / 2, (canvas.height - image.height) / 2);
        };
    }

    removeTraceImage() {
        const canvas = this.#traceContext.canvas;
        this.#traceContext.clearRect(0, 0, canvas.width, canvas.height);
    }
}

