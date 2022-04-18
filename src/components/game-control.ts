import Ball from "./ball";
import Bricks from "./bricks";
import Plate from "./plate";

export default class GameControl {
    // gc可以拿到所有的class，所以決定把邊界檢查放在gc
    bricks: Bricks
    plate: Plate;
    ball: Ball;
    // plate direction
    direction = '';
    // 進行中
    isLive = true;

    constructor() {
        this.bricks = new Bricks(20);
        this.plate = new Plate();
        this.ball = new Ball();
        this.init();
    }

    init() {
        // 沒有bind，this會指向document
        document.addEventListener('keydown', this.handleKeydown.bind(this))
        this.plateMove();
    }

    handleKeydown(event: KeyboardEvent) {
        this.direction = event.key;
    }

    plateMove() {
        let x = this.plate.CurrentX;
        switch (this.direction) {
            case 'ArrowLeft':
            case 'Left':
                x -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                x += 10;
            default:
                break;
        }
        this.plate.CurrentX = x;
        setTimeout(this.plateMove.bind(this), 200)
    }


}