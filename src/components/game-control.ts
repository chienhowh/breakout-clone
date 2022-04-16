import Bricks from "./bricks";
import Plate from "./plate";

export default class GameControl {
    bricks: Bricks
    plate: Plate;
    // plate direction
    direction?: string;
    constructor() {
        this.bricks = new Bricks(20);
        this.plate = new Plate();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.handleKeydown)
    }

    handleKeydown(event: KeyboardEvent) {
        this.direction = event.key;
        console.log(this)
        this.move();
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
        console.log(this.plate.CurrentX);

    }
}