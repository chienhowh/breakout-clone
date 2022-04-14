
// 建立方塊
function generateBricks(n: number) {
    const stage = document.getElementById('stage');
    const stageWidth = stage.clientWidth;
    for (let i = 0; i < n; i++) {
        const brick = document.createElement('div');
        brick.style.width = `${stageWidth / 10}px`;
        brick.style.height = '20px';
        brick.style.backgroundColor = generateColor();
        stage.appendChild(brick);
    }

    const bricks = stage.getElementsByTagName('div');
    for (let b of bricks) {
        // 取得當下位置
        b.style.display = 'inline-block';
        b.style.left = b.offsetLeft + "px";
        b.style.top = b.offsetTop + "px";
        // 全部位置設置完才能拿到正確位置
        setTimeout(() => {
            b.style.position = 'absolute'
        }, 0);
        ;
    }

}


generateBricks(20);


function generateColor(): string {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16).toString(16);
    }
    return color
}