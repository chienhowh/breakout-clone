import Ball from "./ball";
import Bricks from "./bricks";
import Plate from "./plate";

export default class GameControl {
    // gc可以拿到所有的class，所以決定把邊界檢查放在gc
    stage = document.getElementById('stage') as HTMLElement;
    brickStage = document.getElementById('brick-stage') as HTMLElement;
    bricks: Bricks
    plate: Plate;
    ball: Ball;
    // plate direction
    direction = '';
    // 進行中
    isLive = true;
    constructor() {
        this.bricks = new Bricks(20);
        this.plate = new Plate(this.stage);
        this.ball = new Ball();
        this.init();
    }

    init() {
        // 沒有bind，this會指向document
        document.addEventListener('keydown', this.handleKeydown.bind(this))
        this.plateMove();
        this.ballMove();
    }

    handleKeydown(event: KeyboardEvent) {
        this.direction = event.key;
    }

    plateMove() {
        let x = this.plate.CurrentX;
        switch (this.direction) {
            case 'ArrowLeft':
            case 'Left':
                x -= 8;
                break;
            case 'ArrowRight':
            case 'Right':
                x += 8;
            default:
                break;
        }
        this.plate.CurrentX = x;
        setTimeout(() => this.plateMove(), 50)
    }

    ballMove() {
        let curX = this.ball.CurrentX;
        let curY = this.ball.CurrentY;
        if (curX < 0 || curX + 20 > this.stage.clientWidth) {
            this.ball.speedX = -this.ball.speedX;
        }
        if (curY < 0) {
            this.ball.speedY = -this.ball.speedY;
        }
        if (curY > this.stage.clientHeight) {
            throw new Error('結束遊戲');
        }
        this.ball.CurrentX = curX + this.ball.speedX;
        this.ball.CurrentY = curY + this.ball.speedY;
        if (this.knock(this.ball.ball, this.plate.plate)) {
            this.ball.speedY = -this.ball.speedY;
        }
        if (this.bricks.bricks) {
            for (let b of this.bricks.bricks) {
                if (this.knock(b, this.ball.ball)) {
                    this.ball.speedY = -this.ball.speedY;
                    b.remove();
                }
            }
        }
        setTimeout(() => this.ballMove(), 3);
    }


    /**
    * 碰撞函式
    */
    knock(node1: HTMLElement, node2: HTMLElement): boolean {
        const l1 = node1.offsetLeft;
        const r1 = node1.offsetLeft + node1.offsetWidth;
        const t1 = node1.offsetTop;
        const b1 = node1.offsetTop + node1.offsetHeight;
        const l2 = node2.offsetLeft;
        const r2 = node2.offsetLeft + node2.offsetWidth;
        const t2 = node2.offsetTop;
        const b2 = node2.offsetTop + node2.offsetHeight;
        if (l2 > r1 || r2 < l1 || t2 > b1 || b2 < t1) {
            return false;
        } else {
            return true;
        }
    }
}