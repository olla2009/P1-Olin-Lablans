let MijnLoop = 0


function setup() {
    createCanvas(800, 400);
}

function draw() {
    background(220);
    for (MijnLoop = 0; MijnLoop < 10; MijnLoop++) {
        if (MijnLoop === 7) {
            fill(0, 0, 255)
        }
        else {
            fill("grey")
        }
        rect(MijnLoop * 50, 0, 50, 50)

    }


    for (MijnLoop = 0; MijnLoop < 5; MijnLoop++) {
        fill(0 + 100 * MijnLoop)
        rect(0, 60 + 50 * MijnLoop, 50, 50)

    }

}
