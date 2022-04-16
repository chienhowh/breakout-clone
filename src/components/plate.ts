export default class Plate {
    plateStage: HTMLElement;
    plate: HTMLElement

    constructor() {
        this.plateStage = document.getElementById('plate-stage') as HTMLElement;
        this.plate = document.getElementById('plate') as HTMLElement;
        this.plate.style.width = '50px';
        this.plate.style.height = '20px';
    }

    set CurrentX(value: number) {
        this.plate.style.left = value + 'px';
    }
    get CurrentX() {
        return this.plate.offsetLeft;
    }

}