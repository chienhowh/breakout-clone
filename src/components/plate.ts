export default class Plate {
    plateStage: HTMLElement;
    stageWidth = 0;
    plate: HTMLElement

    constructor() {
        this.plateStage = document.getElementById('plate-stage') as HTMLElement;
        this.plate = document.getElementById('plate') as HTMLElement;
        this.stageWidth = this.plateStage.clientWidth;
        this.plate.style.width = '80px';
        this.plate.style.height = '20px';
        this.plate.style.left = '45%';
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