import Bricks from "./bricks";
import Plate from "./plate";

export default class GameControl {
    bricks: Bricks
    plate: Plate;
    // plate direction
    direction = '';
    // 進行中
    isLive = true;
    constructor() {
        this.bricks = new Bricks(20);
        this.plate = new Plate();

        this.init();
    }

    init() {
        // 沒有bind，this會指向document
        document.addEventListener('keydown', this.handleKeydown.bind(this))
        this.move();
    }

    handleKeydown(event: KeyboardEvent) {
        this.direction = event.key;
    }

    move() {
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
        this.isLive && setTimeout(this.move.bind(this), 200)
    }
}