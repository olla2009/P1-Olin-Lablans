//stats

//hunger
let Hunger = 100;
let DisplayHunger;
let LoseHunger = 0.4;

//Energy
let Energy = 100;
let DisplayEnergy;
let LoseEnergy = 0.5;

//luck
let Luck = 100;
let DisplayLuck;
let LoseLuck = 0.7;

//health
let HP;
let DisplayHP;

//universal
let Status;

//iamges
let Happy;
let Sad;
let Neutral;
let Hungry;
let CurrentImg;

//buttons
let FeedButton;
let EnergyButton;
let LuckButton;

function preload() {
  Happy = loadImage('/assets/happy.png')
  Sad = loadImage('/assets/Sad.png')
  Neutral = loadImage('/assets/Neutral.png')
  Hungry = loadImage('/assets/Hungry.png')
}


function setup() {
  createCanvas(800, 600);
  //Feed button with functionality
  FeedButton = createButton('klik om te voeden')
  FeedButton.mousePressed(Feed);
  FeedButton.position(0, 250)

  EnergyButton = createButton('klik om hem weer energie te geven')
  EnergyButton.mousePressed(GiveEnergy);
  EnergyButton.position(0, 300)

  LuckButton = createButton('klik om hem weer gelukig te maken')
  LuckButton.mousePressed(GiveLuck);
  LuckButton.position(0, 350)

}

function draw() {
  background(170);
  UpdateStats()




  textSize(20);
  fill(0);
  textFont(BOLD);

  //hunger text
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

  ImgChanger()
  image(CurrentImg, 20, 0)


}



function Feed() {
  Hunger = Hunger + 10
}

function GiveEnergy() {
  Energy = Energy + 10
}

function GiveLuck() {
  Luck = Luck + 10
}

function ImgChanger() {
  if (HP > 70 && HP <= 100) {
    CurrentImg = Happy;
  } else if (HP > 50 && HP <= 70) {
    CurrentImg = Neutral;
  } else if (HP > 20 && HP <= 50) {
    CurrentImg = Hungry;
  }
  else if (HP <= 20) {
    CurrentImg = Sad;
  }
}

function UpdateStats() {
  let Seconds = deltaTime / 1000

  if (Hunger > 1) {
    Hunger -= LoseHunger * Seconds
  }

  if (Energy > 1) {
    Energy -= LoseEnergy * Seconds
  }

  if (Luck > 1) {
    Luck -= LoseLuck * Seconds
  }

  HP = (Hunger + Energy + Luck) / 3

}