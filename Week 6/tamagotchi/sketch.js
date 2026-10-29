
//classes and functionality
class Stat {
  constructor(value, loseRate, icon, startX, startY, w, h) {
    this.value = value;
    this.loseRate = loseRate;
    this.maxIcons = 5;
    this.icon = icon;
    this.startX = startX;
    this.startY = startY;
    this.w = w;
    this.h = h;
  }

  update(seconds) {
    if (this.value > 0) {
      this.value -= this.loseRate * seconds;
    }
    this.value = constrain(this.value, 0, 100);
    this.updateIcons();
  }

  updateIcons() {
    if (this.value > 80 && this.value <= 100) this.maxIcons = 5;
    else if (this.value > 60 && this.value <= 80) this.maxIcons = 4;
    else if (this.value > 40 && this.value <= 60) this.maxIcons = 3;
    else if (this.value > 10 && this.value <= 40) this.maxIcons = 2;
    else if (this.value <= 10) this.maxIcons = 1;
  }

  display() {
    for (let i = 0; i < this.maxIcons; i++) {
      image(this.icon, this.startX + (i * 30), this.startY, this.w, this.h);
    }
  }

  add(amount) {
    this.value += amount;
    if (this.value > 100) this.value = 100;
  }

  subtract(amount) {
    this.value -= amount;
    if (this.value < 0) this.value = 0;
  }
}

//variables
//stats
let hunger;
let energy;
let luck;
let hp;

//universal
let normalImprove = 10;
let smallImprove = 5;

//Faces
let colorChoice;
let chosenColor;

//Yellow
let yellowHappy;
let yellowSad;
let yellowNeutral;
let yellowHungry;
let yellowDead;

//Blue
let blueHappy;
let blueSad;
let blueNeutral;
let blueHungry;
let blueDead;

//Green
let greenHappy;
let greenSad;
let greenNeutral;
let greenHungry;
let greenDead;

//Red
let redHappy;
let redSad;
let redNeutral;
let redHungry;
let redDead;

//Pink
let pinkHappy;
let pinkSad;
let pinkNeutral;
let pinkHungry;
let pinkDead;

//faces
let Sick;
let Happy
let Sad
let Neutral
let Hungry
let Dead

//bg
let CurrentImg;
let baseBackground;
let gardenImg;
let atticImg;
let gameRoomImg;
let TrashIcon;

//button images
let btn_Normal;
let btn_Hover;
let btn_Pressed;

//Sounds
let bgMusic;
let musicHappinessSad;
let musicHappinessSomber;
let musicHappinessMid;
let musicHappinessMidHappy;
let musicHappinessHappy;


//cleaning
let isCleaning = false;
let trashItems = [];

//icons
let HeartIcon;
let HungerIcon;
let EnergyIcon;
let luckIcon;

//curser images
let CurserHungerIcon;
let CurserHandIcon;

//buttons
let feedButton;
let energyButton;
let PlayButton;
let resetButton;
let cleanButton;

//dropdown menu
let bgChoice;
let chosenBG;

//tamagotchi (tama=tamagotchi)
let xTama = 340;
let yTama = 560;

//name of the tamagotchi
let nameOfTama;
let chosenName;
let savedName;
let xPosName = 370;
let yPosName = 430;

//box
let xBox = 0;
let yBox = 250;
let wBox = 160;
let hBox = 200;
let roundingBox = 30;

//sleep text
let xSleepText = 380;
let ySleepText = 0;

//fonts
let pixelFont;

//actions state
let isFeeding = false;
let isSleeping = false;
let isPlaying = false;


function preload() {
  //emotions
  //Yellow
  yellowHappy = loadImage('../assets/Gezichten/Geel/Happy face.png');
  yellowSad = loadImage('../assets/Gezichten/Geel//Sad face.png');
  yellowNeutral = loadImage('../assets/Gezichten/Geel/Neutral face.png');
  yellowHungry = loadImage('../assets/Gezichten/Geel/Hungry face.png');
  yellowDead = loadImage('../assets/Gezichten/Geel/Dead face.png');

  //Blue
  blueHappy = loadImage('../assets/Gezichten/Blauw/Happy face.png');
  blueSad = loadImage('../assets/Gezichten/Blauw/Sad face.png');
  blueNeutral = loadImage('../assets/Gezichten/Blauw/Neutral face.png');
  blueHungry = loadImage('../assets/Gezichten/Blauw/Hungry face.png');
  blueDead = loadImage('../assets/Gezichten/Blauw/Dead face.png');

  //Green
  greenHappy = loadImage('../assets/Gezichten/Groen/Happy face.png');
  greenSad = loadImage('../assets/Gezichten/Groen/Sad face.png');
  greenNeutral = loadImage('../assets/Gezichten/Groen/Neutral face.png');
  greenHungry = loadImage('../assets/Gezichten/Groen/Hungry face.png');
  greenDead = loadImage('../assets/Gezichten/Groen/Dead face.png');

  //Red
  redHappy = loadImage('../assets/Gezichten/Rood/Happy face.png');
  redSad = loadImage('../assets/Gezichten/Rood/Sad face.png');
  redNeutral = loadImage('../assets/Gezichten/Rood/Neutral face.png');
  redHungry = loadImage('../assets/Gezichten/Rood/Hungry face.png');
  redDead = loadImage('../assets/Gezichten/Rood/Dead face.png');

  //Pink
  pinkHappy = loadImage('../assets/Gezichten/Roze/Happy face.png');
  pinkSad = loadImage('../assets/Gezichten/Roze/Sad face.png');
  pinkNeutral = loadImage('../assets/Gezichten/Roze/Neutral face.png');
  pinkHungry = loadImage('../assets/Gezichten/Roze/Hungry face.png');
  pinkDead = loadImage('../assets/Gezichten/Roze/Dead face.png');

  //universal face
  Sick = loadImage('../assets//Gezichten/Algemene gezichten/Sick face.png');


  //backgrounds
  baseBackground = loadImage('../assets/base_bg.jpeg');
  gardenImg = loadImage('../assets/garden.png');
  atticImg = loadImage('../assets/Attic.png');
  gameRoomImg = loadImage('../assets/Gameroom.png');

  //Icons
  HeartIcon = loadImage('../assets/Health icon.png');
  HungerIcon = loadImage('../assets/Hunger icon.png');
  EnergyIcon = loadImage('../assets/EnergyIcon.png');
  luckIcon = loadImage('../assets/Four leafe clover.png');
  TrashIcon = loadImage('../assets/garbagebag.png');

  //btn images
  btn_Normal = loadImage('../assets/btn_Normal.png');
  btn_Hover = loadImage('../assets/btn_Pressed.png');
  btn_Pressed = loadImage('../assets/btn_Hover.png');

  //music
  bgMusic = loadSound('../assets/bg_sound.mp3');
  musicHappinessSad = loadSound('../assets/happines 1-5.mp3');
  musicHappinessSomber = loadSound('../assets/Happines 2-5.mp3');
  musicHappinessMid = loadSound('../assets/Happines 3-5.mp3');
  musicHappinessMidHappy = loadSound('../assets/Happines 4-5.mp3');
  musicHappinessHappy = loadSound('../assets/Happines 5-5.mp3');

  //font 
  pixelFont = loadFont('../assets/PressStart2P-Regular.ttf');
}


function setup() {
  createCanvas(800, 600);
  textFont(pixelFont);

  hp = new Stat(100, 0.3, HeartIcon, 0, 250, 40, 40);
  energy = new Stat(100, 0.5, EnergyIcon, 0, 300, 40, 40);
  hunger = new Stat(100, 0.6, HungerIcon, -20, 330, 70, 70);
  luck = new Stat(100, 0.7, luckIcon, -5, 400, 50, 50);

  nameOfTama = createInput('').attribute('placeholder', 'name');
  nameOfTama.position(5, 100);

  //bg select
  bgChoice = createSelect();
  bgChoice.position(5, 10);

  bgChoice.option('Woonkamer');
  bgChoice.option('Tuin');
  bgChoice.option('Zolder');
  bgChoice.option('Game kamer');

  bgChoice.selected('Woonkamer');

  colorChoice = createSelect();
  colorChoice.position(5, 55);

  colorChoice.option('Yellow');
  colorChoice.option('Blue');
  colorChoice.option('Green');
  colorChoice.option('Red');
  colorChoice.option('Pink');

  colorChoice.selected('Yellow')

  Happy = yellowHappy
  CurrentImg = Happy;

  //Get the saved items
  let SavedHunger = getItem("Hunger");
  if (SavedHunger !== null) {
    hunger.value = SavedHunger;
  }

  let savedEnergy = getItem("Energy");
  if (savedEnergy !== null) {
    energy.value = savedEnergy;
  }

  let savedLuck = getItem("Luck");
  if (savedLuck !== null) {
    luck.value = savedLuck;
  }

  let savedHP = getItem("HP");
  if (savedHP !== null) {
    hp.value = savedHP;
  }

  savedName = getItem("Name");
  if (savedName !== null) {
    chosenName = savedName;
    nameOfTama.value(chosenName);
  }

  let savedColor = getItem("Color");
  if (savedColor !== null) {
    colorChoice.selected(savedColor);
  }

  let savedBG = getItem("Background");
  if (savedBG !== null) {
    bgChoice.selected(savedBG);
  }

  //The buttons
  feedButton = createButton('klik om te voeden');
  feedButton.mousePressed(Feed);
  feedButton.position(5, 550);

  energyButton = createButton('klik om te slapen');
  energyButton.mousePressed(GiveEnergy);
  energyButton.position(150, 550);

  PlayButton = createButton('klik om te aaien');
  PlayButton.mousePressed(Play);
  PlayButton.position(505, 550);

  cleanButton = createButton('klik om schoon te maken');
  cleanButton.mousePressed(Clean);
  cleanButton.position(650, 550);

  resetButton = createButton('klik om opnieuw te beginnen');
  resetButton.mousePressed(resetGame);
  resetButton.position(640, 10);

  bgChoice.style('text-align: center;');

  btn_styles();
}

function draw() {
  background(180);
  chosenBG = bgChoice.value();
  //backgrounds and the boxes behind the icons
  if (chosenBG === 'Woonkamer') {
    image(baseBackground, 0, 0);
    push();
    fill(255, 150, 150, 100);
    rect(xBox, yBox, wBox, hBox, roundingBox);
    pop();
  } else if (chosenBG === 'Tuin') {
    image(gardenImg, 0, 0, 800, 600);
    push();
    fill(210, 255, 210, 100);
    rect(xBox, yBox, wBox, hBox, roundingBox);
    pop();
  } else if (chosenBG === 'Zolder') {
    image(atticImg, 0, 0, 800, 600);
    push();
    fill(255, 215, 185, 100);
    rect(xBox, yBox, wBox, hBox, roundingBox);
    pop();
  } else if (chosenBG === 'Game kamer') {
    image(gameRoomImg, 0, 0, 800, 600);
    push();
    fill(190, 190, 255, 100);
    rect(xBox, yBox, wBox, hBox, roundingBox);
    pop();
  }




  chosenColor = colorChoice.value()
  if (chosenColor === 'Yellow') {
    Happy = yellowHappy
    Sad = yellowSad
    Neutral = yellowNeutral
    Hungry = yellowHungry
    Dead = yellowDead
  } else if (chosenColor === 'Blue') {
    Happy = blueHappy
    Sad = blueSad
    Neutral = blueNeutral
    Hungry = blueHungry
    Dead = blueDead
  } else if (chosenColor === 'Green') {
    Happy = greenHappy
    Sad = greenSad
    Neutral = greenNeutral
    Hungry = greenHungry
    Dead = greenDead
  } else if (chosenColor === 'Red') {
    Happy = redHappy
    Sad = redSad
    Neutral = redNeutral
    Hungry = redHungry
    Dead = redDead
  } else if (chosenColor === 'Pink') {
    Happy = pinkHappy
    Sad = pinkSad
    Neutral = pinkNeutral
    Hungry = pinkHungry
    Dead = pinkDead
  }





  //changing curser based on action
  UpdateStats();
  if (isFeeding) {
    cursor('../assets/meatCursur.png', 16, 16);
  } else if (isPlaying) {
    cursor('../assets/handcursur.png', 16, 16);
  } else {
    cursor(ARROW);
  }

  chosenName = nameOfTama.value();
  push();
  fill(255);
  textSize(15);
  text(chosenName, xPosName, yPosName);
  pop();
  image(CurrentImg, xTama, yTama);
  sleeping();
  stat();
  drawTrash();
  ImgStatChange();
  saveScore();
}

//Reset function
function resetGame() {
  hunger.value = 100;
  energy.value = 100;
  luck.value = 100;
  hp.value = 100;

  removeItem('Hunger');
  removeItem('Energy');
  removeItem('Luck');
  removeItem('HP');

  nameOfTama.value('');
  chosenName = '';
  colorChoice.value('Yellow');
  bgChoice.value('Woonkamer');


  saveScore();
}

//sleep function
function sleeping() {
  if (isSleeping == true) {
    let Seconds = deltaTime / 1000;

    push();
    tint(0, 0, 0, 200);
    image(CurrentImg, xTama, yTama);
    if (chosenBG === 'Woonkamer') {
      yTama = 300;
      ySleepText = 260;
      yPosName = 300;
    }
    pop();

    textSize(25);
    text("Zzz...", xSleepText, ySleepText);
    energy.add(normalImprove * Seconds);
    hp.add(smallImprove * Seconds);
  }
  if (isSleeping == false) {
    tint(255);
    yTama = 460;
    ySleepText = 400;
    yPosName = 430;
  }
}

function mouseClicked() {
  //Function for the music to start when you clicked
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
  }

  //Feeding functionality
  if (isFeeding) {
    if (mouseX > 370 && mouseX < 470 && mouseY > 440 && mouseY < 600) {

      if (hunger.value >= 98) {
        hp.subtract(normalImprove);
      } else {
        hunger.add(normalImprove);
        energy.add(smallImprove);
      }
      isFeeding = false;
    }
  }

  //Playing functionality
  if (isPlaying) {
    if (mouseX > 370 && mouseX < 470 && mouseY > 440 && mouseY < 600) {
      luck.add(normalImprove);
      energy.subtract(smallImprove);
    }
  }
  //Cleaning functionality
  if (isCleaning) {
    for (let i = trashItems.length - 1; i >= 0; i--) {
      let t = trashItems[i];
      let d = dist(mouseX, mouseY, t.x, t.y);

      if (d < t.size / 2) {
        trashItems.splice(i, 1);
        hp.add(smallImprove);
      }
    }

    if (trashItems.length === 0) {
      isCleaning = false;
    }
  }
}

//Thrash spawn functionality
function drawTrash() {
  if (isCleaning) {
    for (let i = 0; i < trashItems.length; i++) {
      let t = trashItems[i];

      if (TrashIcon) {
        image(TrashIcon, t.x - t.size / 2, t.y - t.size / 2, t.size, t.size);
      }
    }
  }
}

function spawnTrash() {
  trashItems = [];
  let amount = floor(random(3, 7));
  for (let i = 0; i < amount; i++) {
    trashItems.push({
      x: random(100, 700),
      y: random(430, 570),
      size: 100
    });
  }
}

//display for the icons
function stat() {
  hp.display();
  energy.display();
  hunger.display();
  luck.display();
}

//functionality so that only 1 action can be performed at the same time
function Feed() {
  isFeeding = !isFeeding;
  if (isFeeding) {
    isPlaying = false;
    isSleeping = false;
    isCleaning = false;
  }
}

function GiveEnergy() {
  energy.add(normalImprove);
  isSleeping = !isSleeping;
  if (isSleeping) {
    isPlaying = false;
    isFeeding = false;
    isCleaning = false;
  }
}

function Play() {
  isPlaying = !isPlaying;
  if (isPlaying) {
    isFeeding = false;
    isSleeping = false;
    isCleaning = false;
  }
}

function Clean() {
  isCleaning = !isCleaning;
  if (isCleaning) {
    isFeeding = false;
    isPlaying = false;
    isSleeping = false;

    spawnTrash();
  } else {
    trashItems = [];
  }
}



//functionality for the image to change with the corresponding stats
function ImgStatChange() {
  let worstStat = min(hp.value, hunger.value, energy.value);

  if (hp.value <= 0) {
    CurrentImg = Dead;
  } else if (worstStat <= 20) {
    CurrentImg = Sick;
  } else if (worstStat <= 40) {
    CurrentImg = Sad;
  } else if (worstStat <= 60) {
    CurrentImg = Hungry;
  } else if (worstStat <= 80) {
    CurrentImg = Neutral;
  } else {
    CurrentImg = Happy;
  }
}




function UpdateStats() {
  let Seconds = deltaTime / 1000;

  hunger.update(Seconds);
  energy.update(Seconds);
  luck.update(Seconds);
  hp.update(Seconds);
}


//styles for the buttons 
function btn_styles() {
  let buttons = [feedButton, energyButton, PlayButton, cleanButton, resetButton, nameOfTama];

  for (let btn of buttons) {
    btn.size(140, 50);
    btn.style('background-image', "url('../assets/btn_Normal.png')");
    btn.style('background-size', 'contain');
    btn.style('background-repeat', 'no-repeat');
    btn.style('background-color', 'transparent');
    btn.style('border', 'none');
    btn.style('outline', 'none');
    btn.style('color', 'white');
    btn.style('font-size', '8px');
    btn.style('font-family', 'PressStart2P-Regular');
    btn.style('padding-left', '15px');
    btn.style('padding-right', '15px');
  }

  let selectorsStyle = [bgChoice, colorChoice]
  for (let selector of selectorsStyle) {
    selector.size(150, 60);
    selector.style('background-image', "url('../assets/btn_Normal.png')");
    selector.style('background-size', 'contain');
    selector.style('background-repeat', 'no-repeat');
    selector.style('background-color', 'transparent');
    selector.style('border', 'none');
    selector.style('color', 'white');
    selector.style('font-size', '12px');
    selector.style('font-family', 'PressStart2P-Regular');
    selector.style('padding-left', '15px');
    selector.style('padding-right', '15px');
  }
}




//functionality to save the items
function saveScore() {
  storeItem("Hunger", hunger.value);
  storeItem("Energy", energy.value);
  storeItem("Luck", luck.value);
  storeItem("HP", hp.value);
  storeItem("Name", nameOfTama.value());
  storeItem("Color", colorChoice.value());
  storeItem("Background", bgChoice.value());
}
