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

//stats
let hunger;
let energy;
let luck;
let hp;

//universal
let normalImprove = 10;
let smallImprove = 5;

//images
let Happy;
let Sad;
let Neutral;
let Hungry;
let Sick;
let Dead;

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
  Happy = loadImage('../assets/Happy face.png');
  Sad = loadImage('../assets/Sad face.png');
  Neutral = loadImage('../assets/Neutral face.png');
  Hungry = loadImage('../assets/Hungry face.png');
  Sick = loadImage('../assets/Sick face.png');
  Dead = loadImage('../assets/Dead face.png');

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

  //hand curers
  CurserHungerIcon = loadImage('../assets/test2.png');
  CurserHandIcon = loadImage('../assets/hand cursor.png');

  //btn images
  btn_Normal = loadImage('../assets/btn_Normal.png');
  btn_Hover = loadImage('../assets/btn_Pressed.png');
  btn_Pressed = loadImage('../assets/btn_Hover.png');

  //music
  bgMusic = loadSound('../assets/bg_sound.mp3');

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
  nameOfTama.position(5, 55);

  bgChoice = createSelect();
  bgChoice.position(5, 10);

  bgChoice.option('Woonkamer');
  bgChoice.option('Tuin');
  bgChoice.option('Zolder');
  bgChoice.option('Game kamer');

  bgChoice.selected('Woonkamer');

  CurrentImg = Happy;

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

  feedButton = createButton('klik om te voeden');
  feedButton.mousePressed(Feed);
  feedButton.position(5, 550);

  energyButton = createButton('klik om te slapen');
  energyButton.mousePressed(GiveEnergy);
  energyButton.position(150, 550);

  PlayButton = createButton('klik om te spelen');
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

  //changing curser based on action
  UpdateStats();
  if (isFeeding) {
    cursor('../assets/test2.png', 16, 16);
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
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
  }
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

  if (isPlaying) {
    if (mouseX > 370 && mouseX < 470 && mouseY > 440 && mouseY < 600) {
      luck.add(normalImprove);
      energy.subtract(smallImprove);
    }
  }

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

function stat() {
  hp.display();
  energy.display();
  hunger.display();
  luck.display();
}

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

function ImgStatChange() {
  // We kijken naar de allerlaagste stat (HP, Honger of Energie)
  // Zo reageert de Tamagotchi op hetgeen waar hij het meest onder leidt!
  let slechtsteStat = min(hp.value, hunger.value, energy.value);

  if (hp.value <= 0) {
    CurrentImg = Dead;
  } else if (slechtsteStat <= 20) {
    CurrentImg = Sick;
  } else if (slechtsteStat <= 40) {
    CurrentImg = Sad;
  } else if (slechtsteStat <= 60) {
    CurrentImg = Hungry;
  } else if (slechtsteStat <= 80) {
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

  bgChoice.size(150, 60);
  bgChoice.style('background-image', "url('../assets/btn_Normal.png')");
  bgChoice.style('background-size', 'contain');
  bgChoice.style('background-repeat', 'no-repeat');
  bgChoice.style('background-color', 'transparent');
  bgChoice.style('border', 'none');
  bgChoice.style('color', 'white');
  bgChoice.style('font-size', '12px');
  bgChoice.style('font-family', 'PressStart2P-Regular');
  bgChoice.style('padding-left', '15px');
  bgChoice.style('padding-right', '15px');
}

function saveScore() {
  storeItem("Hunger", hunger.value);
  storeItem("Energy", energy.value);
  storeItem("Luck", luck.value);
  storeItem("HP", hp.value);
  storeItem("Name", nameOfTama.value());
}