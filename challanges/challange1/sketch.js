//kleuren 
let MuurGeraaktRood = 0;
let MuurGeraaktGroen = 0;
let MuurGeraaktBlauw = 0;

//positieX
let X = 200;
let snelheidX = 1;

//positieY
let Y = 200;
let snelheidY = 1;

// willekeurige afwijking
let offset = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(80);

    //locatieX
    X = X - snelheidX;
    if (X <= 25) {
        snelheidX = snelheidX * -1;
        offset = random(-0.5, 0.5);
        snelheidY = snelheidY + offset;

        MuurGeraaktRood = random(0, 255);
        MuurGeraaktGroen = random(0, 255);
        MuurGeraaktBlauw = random(0, 255);
    }

    if (X >= 375) {
        snelheidX = snelheidX * -1;
        offset = random(-0.5, 0.5);
        snelheidY = snelheidY + offset;

        MuurGeraaktRood = random(0, 255);
        MuurGeraaktGroen = random(0, 255);
        MuurGeraaktBlauw = random(0, 255);
    }

    //locatieY
    Y = Y - snelheidY;
    if (Y <= 25) {
        snelheidY = snelheidY * -1;
        offset = random(-0.5, 0.5);
        snelheidX = snelheidX + offset;

        MuurGeraaktRood = random(0, 255);
        MuurGeraaktGroen = random(0, 255);
        MuurGeraaktBlauw = random(0, 255);
    }

    if (Y >= 375) {
        snelheidY = snelheidY * -1;
        offset = random(-0.5, 0.5);
        snelheidX = snelheidX + offset;

        MuurGeraaktRood = random(0, 255);
        MuurGeraaktGroen = random(0, 255);
        MuurGeraaktBlauw = random(0, 255);
    }

    noStroke();
    fill(MuurGeraaktRood, MuurGeraaktGroen, MuurGeraaktBlauw);
    circle(X, Y, 50);
}

function mousePressed() {
    snelheidY = snelheidY * 1.2;
    snelheidX = snelheidX * 1.2;
}