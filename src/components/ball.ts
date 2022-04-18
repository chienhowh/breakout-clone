export default class Ball {
    ball: HTMLElement;
    // stageWidth = 0;
    // stageWidth = 0;
    speedX = 10;
    speedY = -10;
    constructor() {
        this.ball = document.getElementById('ball') as HTMLElement;
        this.move();
    }

    set CurrentX(value: number) {
        // if (value < 0 || value + 20 >) { return }
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
        this.CurrentX += this.speedX;
        this.CurrentY += this.speedY;
        setTimeout(() => this.move(), 200);
    }
}