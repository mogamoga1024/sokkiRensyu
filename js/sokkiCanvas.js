
class SokkiCanvas {
    #canvas; #context; #lastPosition; #isDrag;

    constructor(canvas) {
        this.#canvas = canvas;

        this.#context = canvas.getContext("2d");
        this.#context.lineCap = "round";
        this.#context.lineJoin = "round";
        this.#context.lineWidth = 5;
        this.#context.strokeStyle = "black";

        this.#lastPosition = {x: null, y: null};
        this.#isDrag = false;

        this.#addEvent(canvas);
    }

    #addEvent(canvas) {
        canvas.addEventListener("mousedown", (event) => {
            if (event.button !== 0) return; // 左クリック以外描画不可
            this.#drawStart();
        });
        
        canvas.addEventListener("mouseup", (event) => {
            this.#drawEnd(event.offsetX, event.offsetY);
        });
        
        canvas.addEventListener("mouseout", () => {
            this.#drawEnd();
        });
        
        canvas.addEventListener("mousemove", (event) => {
            this.#draw(event.offsetX, event.offsetY);
        });
    }

    #draw(x, y) {
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
    
    #drawStart() {
        this.#context.beginPath();
        this.#isDrag = true;
    }
    
    #drawEnd(x, y) {
        this.#draw(x, y); // クリックのみでドラッグされなかった場合、点を描画するために呼び出す。
        this.#context.closePath();
        this.#isDrag = false;
        this.#lastPosition.x = null;
        this.#lastPosition.y = null;
    }
    
    clear() {
        this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
    }
}

