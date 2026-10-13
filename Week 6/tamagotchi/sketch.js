//stats

//hunger
let Hunger = 100;
let DisplayHunger;

//Energy
let Energy = 100;
let DisplayEnergy;

//luck
let Luck = 100;
let DisplayLuck;

//health
//look how to change it so that it is a average
let HP;
let DisplayHP;

//universal
let time;
let Status;

//iamges
let Happy;
let Sad;
let Neutral;
let Hungry;
let CurrentImg;


function preload() {
  Happy = loadImage('/Week 6/assets/happy.png')
  Sad = loadImage('/Week 6/assets/Sad.png')
  Neutral = loadImage('/Week 6/assets/Neutral.png')
  Hungry = loadImage('/Week 6/assets/Hungry.png')
}


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(170);


  textSize(20);
  fill(0);
  textFont(BOLD);

  //hunger text
  UpdateStats()
  DisplayHunger = (floor(Hunger))
  text(DisplayHunger, 300, 30)

  //Energy text
  DisplayEnergy = (floor(Energy))
  text(DisplayEnergy, 350, 30)

  //Luck text
  DisplayLuck = (floor(Luck))
  text(DisplayLuck, 400, 30)

  //HP text
  DisplayHP = (floor(HP))
  text(DisplayHP, 450, 30)

  ColorHunger()
  fill(Status)
  rect(400, 300, 80, 80)

  ImgChanger()
  image(CurrentImg, 20, 0)
}



function ColorHunger() {
  if (Hunger > 70 && Hunger <= 100) {
    Status = 'Green'
  } else if (Hunger > 50 && Hunger <= 70) {
    Status = 'Blue'
  } else if (Hunger > 20 && Hunger <= 50) {
    Status = 'Orange'
  } else if (Hunger <= 20) {
    Status = 'Red'
  }
}

function ImgChanger() {
  if (Hunger > 70 && Hunger <= 100) {
    CurrentImg = Happy;
  } else if (Hunger > 50 && Hunger <= 70) {
    CurrentImg = Neutral;
  } else if (Hunger > 20 && Hunger <= 50) {
    CurrentImg = Hungry;
  }
  else if (Hunger <= 20) {
    CurrentImg = Sad;
  }
}

function UpdateStats() {
  if (Hunger > 1) {
    Hunger -= 0.5 * (deltaTime / 1000);
  }

  if (Energy > 1) {
    Energy -= 0.7 * (deltaTime / 1000);
  }

  if (Luck > 1) {
    Luck -= 1 * (deltaTime / 1000);
  }

  HP = (Hunger + Energy + Luck) / 3

}