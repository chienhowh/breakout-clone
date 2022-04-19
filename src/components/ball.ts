export default class Ball {
    ball: HTMLElement;
    plate: HTMLElement;
    stageWidth = 0;
    stageHeight = 0;
    speedX = 1;
    speedY = -1;
    constructor(stage: HTMLElement) {
        this.plate = document.getElementById('plate') as HTMLElement;
        this.ball = document.getElementById('ball') as HTMLElement;
        this.stageWidth = stage.clientWidth;
        this.stageHeight = stage.clientHeight;
        this.move();
    }

    set CurrentX(value: number) {
        this.ball.style.left = value + 'px';
    }

    get CurrentX() {
        return this.ball.offsetLeft;
    }
    set CurrentY(value: number) {
        this.ball.style.top = value + 'px';
    }

    get CurrentY() {
        return this.ball.offsetTop;
    }

    move() {
        console.log(this.knock(this.ball, this.plate));

        let curX = this.CurrentX;
        let curY = this.CurrentY;
        if (curX < 0 || curX + 20 > this.stageWidth) {
            this.speedX = -this.speedX;
        }
        if (curY < 0) {
            this.speedY = -this.speedY;
        }
        if (curY > this.stageHeight) {
            throw new Error('結束遊戲');
        }
        this.CurrentX = curX + this.speedX;
        this.CurrentY = curY + this.speedY;

        setTimeout(() => this.move(), 5);
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
        console.log(t1, b2);
        console.log(t2, b2);

        if ((r1 > l2 || l1 < r2) && (b1 > t2)) { return true; }
        return false;
    }
}