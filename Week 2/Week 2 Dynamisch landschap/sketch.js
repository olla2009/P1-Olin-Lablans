//variabelen
let move = 0
let move_sun = 0
let pulsing_sun = 0
let move_2 = 0
let move_3 = 0
let move_4 = 0
let move_wolk1 = 0
let move_wolk2 = 0
let move_wolk3 = 0
let random_color = 0

function setup() {
    createCanvas(1000, 800);

    //random color
    random_color = 0 + random(140, 255);
}

function draw() {





    //var

    //snelheid
    move += 0.1 * 20;
    //terug/loopen
    if (move > 1100) {
        move = -750;
    }

    //snelheid
    move_2 += 0.1 * 20;
    //terug/loopen
    if (move_2 > 1100) {
        move_2 = -850;
    }

    //snelheid
    move_3 += 0.1 * 40;
    //terug/loopen
    if (move_3 > 1100) {
        move_3 = -850;
    }

    //snelheid
    move_4 += 0.1 * 40;
    //terug/loopen
    if (move_4 > 1400) {
        move_4 = -950;
    }

    //snelheid
    move_wolk1 += 0.1 * 10;
    //terug/loopen
    if (move_wolk1 > 400) {
        move_wolk1 = -950;
    }
    //snelheid
    move_wolk2 += 0.1 * 15;
    //terug/loopen
    if (move_wolk2 > 800) {
        move_wolk2 = -950;
    }

    //snelheid
    move_wolk3 += 0.1 * 20;
    //terug/loopen
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


    background(136, 206, 235);

    //zon
    push()
    fill(255, 165, 0, 70)
    circle(150 + move_sun, 100, 100 + pulsing_sun)

    circle(150 + move_sun, 100, 200 - pulsing_sun)

    fill("yellow")
    circle(150 + move_sun, 100, 70)

    //wolken 

    //wolk 1
    push()
    fill(200)
    translate(0 - move_wolk1, 0, 0)
    push()
    translate(0, -10, 0)
    circle(120, 80, 70)
    circle(80, 75, 50)
    circle(160, 85, 50)
    pop()
    fill(255, 255, 255)
    circle(120, 80, 70)
    circle(80, 75, 50)
    circle(160, 85, 50)
    pop()

    //wolk2
    push()
    fill(200)
    translate(500 - move_wolk2, 50, 0)
    push()
    translate(0, -10, 0)
    circle(120, 80, 70)
    circle(80, 75, 50)
    circle(160, 85, 50)
    pop()
    fill(255, 255, 255)
    circle(120, 80, 70)
    circle(80, 75, 50)
    circle(160, 85, 50)
    pop()

    //wolk3
    push()
    fill(200)
    translate(850 - move_wolk3, 150, 0)
    push()
    translate(0, -10, 0)
    circle(120, 80, 70)
    circle(80, 75, 50)
    circle(160, 85, 50)
    pop()
    fill(255, 255, 255)
    circle(120, 80, 70)
    circle(80, 75, 50)
    circle(160, 85, 50)
    pop()


    // BERGEN
    push();
    translate(100, 190, 0)
    stroke(0);
    strokeWeight(1);

    // 2. Middelste berg
    fill(64, 64, 64)
    triangle(280, 500, 750, 500, 500, 190);

    // 1. Linker berg
    fill(95, 95, 95)
    triangle(120, 500, 380, 500, 240, 340);

    // 3. Rechter berg
    fill(95, 95, 95)
    triangle(590, 500, 950, 500, 800, 360);
    pop();



    //gras
    fill(0, 128, 0);
    stroke(0, 100, 0);
    strokeWeight(5);
    rect(0, 690, 1000, 10);

    //weg
    fill(95, 95, 95);
    stroke(80, 80, 80);
    strokeWeight(5);
    rect(0, 700, 1000, 100,);

    //outline weer normaal
    strokeWeight(0);

    //strepen van de weg
    push()
    translate(0, 200,)
    fill(192, 192, 192);
    stroke(110, 110, 110);
    strokeWeight(2);
    rect(-10, 540, 100, 15, 20);
    rect(150, 540, 100, 15, 20);
    rect(310, 540, 100, 15, 20);
    rect(310, 540, 100, 15, 20);
    rect(470, 540, 100, 15, 20);
    rect(630, 540, 100, 15, 20);
    rect(790, 540, 100, 15, 20);
    pop()

    //stoplicht

    //functionaliteit



    //tekst
    push()
    translate(430, 485, -10)
    noStroke()

    //grijs(stok)
    fill(113, 121, 126)
    rect(265, 140, 10, 80)
    rect(250, 20, 40, 120)


    //rood
    fill(255, 0, 0)
    circle(270, 40, 30)

    //oranje
    fill(255, 128, 0)
    circle(270, 80, 30)

    //groen
    fill(0, 255, 0)
    circle(270, 40 * 3, 30)
    pop()



    //auto boven 1
    push();
    translate(0 + move_3, -60, 0)

    //body
    fill(255, 0, 0)
    rect(575, 725, 150, 50)
    rect(575, 680, 100, 50)


    // tire
    fill(64)
    circle(700, 770, 50)
    circle(600, 770, 50)
    pop();


    //auto boven 2
    push();
    translate(-1000 + move_4, -60, 0)

    //body
    fill(random_color, random_color, 0)
    rect(575, 725, 150, 50)
    rect(575, 680, 100, 50)


    // tire
    fill(64)
    circle(700, 770, 50)
    circle(600, 770, 50)
    pop();



    //auto onder 1
    noStroke()
    push();
    translate(-200 + move_2, 0, 0)

    //body
    fill(random_color, 0, random_color)
    rect(175, 725, 150, 50)
    rect(175, 680, 100, 50)


    // tire
    fill(64)
    circle(200, 770, 50)
    circle(300, 770, 50)
    pop();


    //auto onder 2
    push();
    translate(0 + move, 0, 0)

    //body
    fill(0, random_color, random_color)
    rect(575, 725, 150, 50)
    rect(575, 680, 100, 50)


    // tire
    fill(64)
    circle(700, 770, 50)
    circle(600, 770, 50)
    pop();
}