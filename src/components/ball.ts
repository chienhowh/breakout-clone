export default class Ball {
    ball: HTMLElement;
    plate: HTMLElement;
    speedX = 1;
    speedY = -1;
    constructor() {
        this.plate = document.getElementById('plate') as HTMLElement;
        this.ball = document.getElementById('ball') as HTMLElement;
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

}