export default class Plate {
    stageWidth = 0;
    plate: HTMLElement

    constructor(stage: HTMLElement) {
        this.plate = document.getElementById('plate') as HTMLElement;
        this.stageWidth = stage.clientWidth;
    }

    set CurrentX(value: number) {
        if (value < 0 || value + 80 > this.stageWidth) {
            // throw new Error('撞牆了');
            return;
        }
        this.plate.style.left = value + 'px';
    }
    get CurrentX() {
        return this.plate.offsetLeft;
    }

}