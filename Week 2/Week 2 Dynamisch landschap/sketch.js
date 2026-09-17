//variabelen

//UFO
let move_UFO = -5000;

//auto's
let Minimal_space = 400;
let move_auto_1 = 0;
let move_auto_2 = 0;
let move_auto_3 = 0;
let move_auto_4 = 0;

//zon
let move_sun = 0;
let pulsing_sun = 0;

//wolken
let move_wolk1 = 0;
let move_wolk2 = 0;
let move_wolk3 = 0;

let random_color = 0;

//timer/stoplicht
let timer = 0;
let statusStoplicht = "groen";

function keyPressed() {
    if (keyCode == 13) {
        if (statusStoplicht == "groen") {
            statusStoplicht = "oranje";
            return;
        }
        if (statusStoplicht == "oranje") {
            statusStoplicht = "rood";
            return;
        }
        if (statusStoplicht == "rood") {
            statusStoplicht = "groen";
            return;
        }
    }
}


function setup() {
    createCanvas(1000, 800);

    //random color
    random_color = 0 + random(140, 255);
}

function draw() {
    background(136, 206, 235);

    timer = timer + 1;

    if (timer > 450) {
        timer = 0;
    }

    //UFO loopen
    move_UFO += 0.1 * 200
    if (move_UFO > 10000) {
        move_UFO = -750;
    }

    //auto's loopen
    if (move_auto_3 > 1100) {
        move_auto_3 = min(move_auto_4 - Minimal_space, -850);
    }


    if (move_auto_4 > 1100) {
        move_auto_4 = min(move_auto_3 - Minimal_space, -850);
    }



    if (move_auto_1 > 1100) {
        move_auto_1 = min(move_auto_2 - Minimal_space, -850);
    }


    if (move_auto_2 > 1100) {
        move_auto_2 = min(move_auto_1 - Minimal_space, -850);
    }




    //wolken

    //snelheid
    move_wolk1 += 0.1 * 10;

    //terug loopen
    if (move_wolk1 > 400) {
        move_wolk1 = -950;
    }

    move_wolk2 += 0.1 * 15;
    if (move_wolk2 > 800) {
        move_wolk2 = -950;
    }

    move_wolk3 += 0.1 * 20;
    if (move_wolk3 > 900) {
        move_wolk3 = -950;
    }

    //zon 
    move_sun += 0.05 * deltaTime;
    //terug loopen
    if (move_sun > 400) {
        move_sun = 60;
    }

    //zon pulseren 
    pulsing_sun += 0.1 * deltaTime;
    //terug/loopen
    if (pulsing_sun > 100) {
        pulsing_sun = 0;
    }

    //bladeren bewegen
    let Move_leaves_1 = 4 * sin(frameCount * 0.03)
    let Move_leaves_2 = 7 * sin(frameCount * 0.03 + 0.5)
    let Move_leaves_3 = 10 * sin(frameCount * 0.03 + 1.0)
    let Move_leaves_4 = 13 * sin(frameCount * 0.03 + 1.5)

    //zon
    push();
    fill(255, 165, 0, 70);
    circle(150 + move_sun, 100, 100 + pulsing_sun);
    circle(150 + move_sun, 100, 200 - pulsing_sun);
    fill(255, 255, 0);
    circle(150 + move_sun, 100, 70);
    pop();

    //wolken 

    //wolk 1
    push();
    fill(200);
    translate(0 - move_wolk1, 0, 0);
    push();
    translate(0, -10, 0);
    circle(120, 80, 70);
    circle(80, 75, 50);
    circle(160, 85, 50);
    pop();
    fill(255, 255, 255);
    circle(120, 80, 70);
    circle(80, 75, 50);
    circle(160, 85, 50);
    pop();

    //wolk2
    push();
    fill(200);
    translate(500 - move_wolk2, 50, 0);
    push();
    translate(0, -10, 0);
    circle(120, 80, 70);
    circle(80, 75, 50);
    circle(160, 85, 50);
    pop();
    fill(255, 255, 255);
    circle(120, 80, 70);
    circle(80, 75, 50);
    circle(160, 85, 50);
    pop();

    //wolk3
    push();
    fill(200);
    translate(850 - move_wolk3, 150, 0);
    push();
    translate(0, -10, 0);
    circle(120, 80, 70);
    circle(80, 75, 50);
    circle(160, 85, 50);
    pop();
    fill(255, 255, 255);
    circle(120, 80, 70);
    circle(80, 75, 50);
    circle(160, 85, 50);
    pop();

    // BERGEN
    push();
    translate(100, 190, 0);
    stroke(0);
    strokeWeight(1);

    // 2. Middelste berg
    fill(64, 64, 64);
    triangle(280, 500, 750, 500, 500, 190);

    // 1. Linker berg
    fill(95, 95, 95);
    triangle(120, 500, 380, 500, 240, 340);

    // 3. Rechter berg
    fill(95, 95, 95);
    triangle(590, 500, 950, 500, 800, 360);
    pop();


    // bomen achter

    //stamen
    fill(107, 73, 43)

    rect(190, 550, 20, 150)
    rect(490, 550, 20, 150)
    rect(850, 550, 20, 150)

    //bladeren
    fill(120, 200, 85)
    circle(190 + Move_leaves_1, 550, 80)

    fill(78, 169, 59)
    circle(190 + Move_leaves_2, 550, 80)

    fill(47, 127, 52)
    circle(190 + Move_leaves_3, 550, 80)

    fill(27, 77, 34)
    circle(190 + Move_leaves_4, 550, 80)


    fill(120, 200, 85)
    circle(490 + Move_leaves_1, 550, 84)


    fill(78, 169, 59)
    circle(490 + Move_leaves_2, 550, 84)

    fill(47, 127, 52)
    circle(490 + Move_leaves_3, 550, 84)


    fill(27, 77, 34)
    circle(490 + Move_leaves_4, 550, 84)


    fill(120, 200, 85)
    circle(850 + Move_leaves_1, 550, 84)


    fill(78, 169, 59)
    circle(850 + Move_leaves_2, 550, 84)

    fill(47, 127, 52)
    circle(850 + Move_leaves_3, 550, 84)


    fill(27, 77, 34)
    circle(850 + Move_leaves_4, 550, 84)



    //gras
    fill(0, 128, 0);
    stroke(0, 100, 0);
    strokeWeight(5);
    rect(0, 690, 1000, 10);

    //weg
    fill(95, 95, 95);
    stroke(80, 80, 80);
    strokeWeight(5);
    rect(0, 700, 1000, 100);

    //outline weer normaal
    strokeWeight(0);

    //strepen van de weg
    push();
    translate(0, 200);
    fill(192, 192, 192);
    stroke(110, 110, 110);
    strokeWeight(2);
    rect(-10, 540, 100, 15, 20);
    rect(150, 540, 100, 15, 20);
    rect(310, 540, 100, 15, 20);
    rect(470, 540, 100, 15, 20);
    rect(630, 540, 100, 15, 20);
    rect(790, 540, 100, 15, 20);
    pop();

    //stoplicht
    push();
    translate(650, 485, -10);
    noStroke();

    //stok zwart
    fill(0, 0, 0);
    rect(265, 140, 10, 80);
    rect(250, 20, 40, 120);

    //rood
    fill(100, 0, 0);
    circle(270, 40, 30);

    //oranje
    fill(150, 100, 0);
    circle(270, 80, 30);

    //groen
    fill(0, 100, 0);
    circle(270, 120, 30);


    if (statusStoplicht == "groen") {
        fill(13, 219, 13);
        circle(270, 120, 30);

        move_auto_1 += 0.1 * 50;
        move_auto_2 += 0.1 * 50;
        move_auto_3 += 0.1 * 100;
        move_auto_4 += 0.1 * 100;
    }

    if (statusStoplicht == "oranje") {
        fill(255, 102, 0);
        circle(270, 80, 30);

        move_auto_1 += 0.1 * 15;
        move_auto_2 += 0.1 * 15;
        move_auto_3 += 0.1 * 30;
        move_auto_4 += 0.1 * 30;
    }

    if (statusStoplicht == "rood") {
        fill(255, 0, 0);
        circle(270, 40, 30);
    }

    pop();

    //auto boven 1
    push();
    translate(0 + move_auto_3, -60, 0);

    //body
    fill(random_color, 20, 50);


    //body
    fill(random_color, 100, 80);
    rect(575, 630, 100, 50);
    rect(575, 725, 150, 50);
    rect(575, 680, 100, 50);

    rect(470, 630, 110, 50);
    rect(470, 725, 160, 50);
    rect(470, 680, 110, 50);

    // tire
    fill(64);
    circle(700, 770, 50);
    circle(620, 770, 50);
    circle(490, 770, 50);
    circle(560, 770, 50);

    //windows
    strokeWeight(5);
    stroke("black")
    fill(144, 213, 255)
    rect(480, 660, 80, 50, 20);
    rect(580, 660, 80, 50, 20);
    pop();

    //auto boven 2
    push();
    translate(-300 + move_auto_4, -60, 0);

    //body
    fill(random_color, random_color, 0);
    rect(575, 725, 150, 50);
    rect(575, 680, 100, 50);

    //hat
    fill(0, 0, random_color,)
    rect(575, 655, 100, 25, 0)
    rect(575, 645, 100, 25, 100)

    // tire
    fill(64);
    circle(700, 770, 50);
    circle(600, 770, 50);
    pop();

    //auto onder 1
    noStroke();
    push();
    translate(-200 + move_auto_2, 0, 0);

    //body
    fill(random_color, 0, random_color);
    rect(175, 725, 150, 50);
    rect(175, 680, 100, 50);

    // tire
    fill(64);
    circle(200, 770, 50);
    circle(300, 770, 50);
    pop();

    //auto onder 2
    push();
    translate(0 + move_auto_1, 0, 0);

    //body
    fill(0, random_color, random_color);
    rect(575, 725, 150, 50);
    rect(575, 680, 100, 50);

    // tire
    fill(64);
    circle(700, 770, 50);
    circle(600, 770, 50);
    pop();


    //ufo
    push()
    translate(move_UFO, 0, 0)

    fill(0, 255, 0)
    ellipse(150, 160, 25, 40,)

    fill(0, 0, 0)
    rect(145, 150, 10, 10, 100)

    fill(0, 0, 255, 90)
    circle(150, 180, 80)


    fill(150, 150, 150)
    ellipse(150, 200, 200, 50,)

    fill(0, 0, 255)
    ellipse(150, 220, 25, 10,)

    fill(0, 0, 0)
    rect(50, 195, 200, 10, 100)
    pop()





    //boom voor

    //stam
    fill(107, 73, 43)
    rect(45, 660, 20, 150)

    //bladeren

    fill(120, 200, 85)
    circle(40 + Move_leaves_1, 650, 90)


    fill(78, 169, 59)
    circle(40 + Move_leaves_2, 650, 90)

    fill(47, 127, 52)
    circle(40 + Move_leaves_3, 650, 90)


    fill(27, 77, 34)
    circle(40 + Move_leaves_4, 650, 90)
    line(mouseX, 100, mouseX, 100);

}