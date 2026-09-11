//variabelen
let move = 0


function setup() {
    createCanvas(800, 600);
}

function draw() {





    //var

    //snelheid
    move += 0.1 * deltaTime;
    //terug/loopen
    if (move > 700) {
        move = -350;
    }

    background(136, 206, 235);

    //bergen

    //berg 1
    push();
    translate(200, 100);
    fill(64, 64, 64)
    noStroke();
    triangle(100, 400, 500, 400, 300, 100);
    pop();

    //berg 2
    push();
    translate(0, 100);
    fill(95, 95, 95)
    noStroke();
    triangle(300, 400, 500, 400, 400, 200);
    pop();



    //gras
    fill(0, 128, 0);
    stroke(0, 100, 0);
    strokeWeight(5);
    rect(0, 490, 800, 10);

    //weg
    fill(95, 95, 95);
    stroke(80, 80, 80);
    strokeWeight(5);
    rect(0, 500, 800, 100,);

    //outline weer normaal
    strokeWeight(0);

    //strepen van de weg
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


    //stoplicht

    //functionaliteit



    //tekst
    push()
    translate(430, 285, -10)
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



    //auto
    noStroke()
    push()
    translate(0 + move, 0, 0)

    //body
    fill(0, 0, 255)
    rect(175, 525, 150, 50)
    rect(175, 480, 100, 50)


    // tire
    fill(64)
    circle(600, 570, 50)
    circle(700, 570, 50)
    pop()


    //auto2
    noStroke()
    push()
    translate(0 + move, 0, 0)

    //body
    fill(0, 0, 255)
    rect(575, 525, 150, 50)
    rect(575, 480, 100, 50)


    // tire
    fill(64)
    circle(200, 570, 50)
    circle(300, 570, 50)
    pop()

}