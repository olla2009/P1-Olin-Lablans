//stats

//Hunger
let hungerValue = 100;
let hungerLoseRate = 0.6;

//Energy
let energyValue = 100;
let energyLoseRate = 0.5;

//Luck
let luckValue = 100;
let luckLoseRate = 0.7;

//HP
let hpValue = 100;
let hpLoseRate = 0.4;

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
let yellowSlightlySad;
let yellowDead;

//Blue
let blueHappy;
let blueSad;
let blueNeutral;
let blueSlightlySad;
let blueDead;

//Green
let greenHappy;
let greenSad;
let greenNeutral;
let greenSlightlySad;
let greenDead;

//Red
let redHappy;
let redSad;
let redNeutral;
let redSlightlySad;
let redDead;

//Pink
let pinkHappy;
let pinkSad;
let pinkNeutral;
let pinkSlightlySad;
let pinkDead;

//faces
let sick;
let happy
let sad
let neutral
let slightlySad
let dead


//bg
let currentImg;
let baseBackground;
let gardenImg;
let atticImg;
let gameRoomImg;




//button images
let btn_Normal;


//Sounds
let bgMusic;
let musicHappinessSad;
let musicHappinessSomber;
let musicHappinessMid;
let musicHappinessMidHappy;
let musicHappinessHappy;


//cleaning
let isCleaning = false;
let trashArray = [];

//icons
let heartIcon;
let hungerIcon;
let energyIcon;
let luckIcon;
let trashIcon;

//curser images
let curserHungerIcon;
let curserHandIcon;

//buttons
let feedButton;
let energyButton;
let playButton;
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

//save variables
let savedHunger;
let savedEnergy;
let savedLuck;
let savedHP;
let savedColor
let savedBG;
let savedName;



function preload() {
  //emotions
  //Yellow
  yellowHappy = loadImage('../assets/Gezichten/Geel/Happy face.png');
  yellowSad = loadImage('../assets/Gezichten/Geel//Sad face.png');
  yellowNeutral = loadImage('../assets/Gezichten/Geel/Neutral face.png');
  yellowSlightlySad = loadImage('../assets/Gezichten/Geel/Slightly Sad face.png');
  yellowDead = loadImage('../assets/Gezichten/Geel/Dead face.png');

  //Blue
  blueHappy = loadImage('../assets/Gezichten/Blauw/Happy face.png');
  blueSad = loadImage('../assets/Gezichten/Blauw/Sad face.png');
  blueNeutral = loadImage('../assets/Gezichten/Blauw/Neutral face.png');
  blueSlightlySad = loadImage('../assets/Gezichten/Blauw/Blue Lightly Sad face.png');
  blueDead = loadImage('../assets/Gezichten/Blauw/Dead face.png');

  //Green
  greenHappy = loadImage('../assets/Gezichten/Groen/Happy face.png');
  greenSad = loadImage('../assets/Gezichten/Groen/Sad face.png');
  greenNeutral = loadImage('../assets/Gezichten/Groen/Neutral face.png');
  greenSlightlySad = loadImage('../assets/Gezichten/Groen/Green Lightly Sad face.png');
  greenDead = loadImage('../assets/Gezichten/Groen/Dead face.png');

  //Red
  redHappy = loadImage('../assets/Gezichten/Rood/Happy face.png');
  redSad = loadImage('../assets/Gezichten/Rood/Sad face.png');
  redNeutral = loadImage('../assets/Gezichten/Rood/Neutral face.png');
  redSlightlySad = loadImage('../assets/Gezichten/Rood/Red Lightly Sad face.png');
  redDead = loadImage('../assets/Gezichten/Rood/Dead face.png');

  //Pink
  pinkHappy = loadImage('../assets/Gezichten/Roze/Happy face.png');
  pinkSad = loadImage('../assets/Gezichten/Roze/Sad face.png');
  pinkNeutral = loadImage('../assets/Gezichten/Roze/Neutral face.png');
  pinkSlightlySad = loadImage('../assets/Gezichten/Roze/Pink Lightly Sad face.png');
  pinkDead = loadImage('../assets/Gezichten/Roze/Dead face.png');

  //universal face
  sick = loadImage('../assets//Gezichten/Algemene gezichten/Sick face.png');


  //backgrounds
  baseBackground = loadImage('../assets/base_bg.jpeg');
  gardenImg = loadImage('../assets/garden.png');
  atticImg = loadImage('../assets/Attic.png');
  gameRoomImg = loadImage('../assets/Gameroom.png');

  //Icons
  heartIcon = loadImage('../assets/Health icon.png');
  hungerIcon = loadImage('../assets/Hunger icon.png');
  energyIcon = loadImage('../assets/EnergyIcon.png');
  luckIcon = loadImage('../assets/Four leafe clover.png');
  trashIcon = loadImage('../assets/garbagebag.png');

  //btn images
  btn_Normal = loadImage('../assets/btn_Normal.png');

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

  happy = yellowHappy
  currentImg = happy;



  //Get the saved items
  savedHunger = getItem("Hunger");
  if (savedHunger !== null) {
    hungerValue = savedHunger;
  }

  savedEnergy = getItem("Energy");
  if (savedEnergy !== null) {
    energyValue = savedEnergy;
  }

  savedLuck = getItem("Luck");
  if (savedLuck !== null) {
    luckValue = savedLuck;
  }

  savedHP = getItem("HP");
  if (savedHP !== null) {
    hpValue = savedHP;
  }

  savedName = getItem("Name");
  if (savedName !== null) {
    chosenName = savedName;
    nameOfTama.value(chosenName);
  }

  savedColor = getItem("Color");
  if (savedColor !== null) {
    colorChoice.selected(savedColor);
  }

  savedBG = getItem("Background");
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

  playButton = createButton('klik om te aaien');
  playButton.mousePressed(Play);
  playButton.position(505, 550);

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
    happy = yellowHappy
    sad = yellowSad
    neutral = yellowNeutral
    slightlySad = yellowSlightlySad
    dead = yellowDead
  } else if (chosenColor === 'Blue') {
    happy = blueHappy
    sad = blueSad
    neutral = blueNeutral
    slightlySad = blueSlightlySad
    dead = blueDead
  } else if (chosenColor === 'Green') {
    happy = greenHappy
    sad = greenSad
    neutral = greenNeutral
    slightlySad = greenSlightlySad
    dead = greenDead
  } else if (chosenColor === 'Red') {
    happy = redHappy
    sad = redSad
    neutral = redNeutral
    slightlySad = redSlightlySad
    dead = redDead
  } else if (chosenColor === 'Pink') {
    happy = pinkHappy
    sad = pinkSad
    neutral = pinkNeutral
    slightlySad = pinkSlightlySad
    dead = pinkDead
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
  image(currentImg, xTama, yTama);
  sleeping();
  stat();
  drawTrash();
  ImgStatChange();
  saveScore();
}

//Reset function
function resetGame() {
  hungerValue = 100;
  energyValue = 100;
  luckValue = 100;
  hpValue = 100;

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
    image(currentImg, xTama, yTama);
    if (chosenBG === 'Woonkamer') {
      yTama = 300;
      ySleepText = 260;
      yPosName = 300;
    }
    pop();

    textSize(25);
    text("Zzz...", xSleepText, ySleepText);
    energyValue += normalImprove * Seconds;
    if (energyValue > 100) energyValue = 100;
    hpValue += smallImprove * Seconds;
    if (hpValue > 100) hpValue = 100;
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

      if (hungerValue >= 98) {
        hpValue -= normalImprove;
        if (hpValue < 0) hpValue = 0;
      } else {
        hungerValue += normalImprove;
        if (hungerValue > 100) hungerValue = 100;
        energyValue += smallImprove;
        if (energyValue > 100) energyValue = 100;
      }
      isFeeding = false;
    }
  }

  //Playing functionality
  if (isPlaying) {
    if (mouseX > 370 && mouseX < 470 && mouseY > 440 && mouseY < 600) {
      luckValue += normalImprove;
      if (luckValue > 100) luckValue = 100;
      energyValue -= smallImprove;
      if (energyValue < 0) energyValue = 0;
    }
  }

  //Cleaning functionality
  if (isCleaning) {
    for (let i = trashArray.length - 1; i >= 0; i--) {
      let trashItem = trashArray[i];
      let distance = dist(mouseX, mouseY, trashItem.x, trashItem.y);

      if (distance < trashItem.size / 2) {
        trashArray.splice(i, 1);
        hpValue += smallImprove;
        if (hpValue > 100) hpValue = 100;
      }
    }

    if (trashArray.length === 0) {
      isCleaning = false;
    }
  }
}

//Thrash spawn functionality
function drawTrash() {
  if (isCleaning) {
    for (let i = 0; i < trashArray.length; i++) {
      let trashItems = trashArray[i];

      if (trashIcon) {
        image(trashIcon, trashItems.x - trashItems.size / 2, trashItems.y - trashItems.size / 2, trashItems.size, trashItems.size);
      }
    }
  }
}

function spawnTrash() {
  trashArray = [];
  let amount = floor(random(3, 7));
  for (let i = 0; i < amount; i++) {
    trashArray.push({
      x: random(100, 700),
      y: random(430, 570),
      size: 100
    });
  }
}

// Function to draw the icons
function drawStatIcons(value, icon, startX, startY, iconWidth, iconHeight) {
  let maxIcons = 5;
  if (value > 80 && value <= 100) maxIcons = 5;
  else if (value > 60 && value <= 80) maxIcons = 4;
  else if (value > 40 && value <= 60) maxIcons = 3;
  else if (value > 10 && value <= 40) maxIcons = 2;
  else if (value <= 10) maxIcons = 1;

  for (let i = 0; i < maxIcons; i++) {
    image(icon, startX + (i * 30), startY, iconWidth, iconHeight);
  }
}

//display for the icons
function stat() {
  drawStatIcons(hpValue, heartIcon, 0, 250, 40, 40);
  drawStatIcons(energyValue, energyIcon, 0, 300, 40, 40);
  drawStatIcons(hungerValue, hungerIcon, -20, 330, 70, 70);
  drawStatIcons(luckValue, luckIcon, -5, 400, 50, 50);
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
  energyValue += normalImprove;
  if (energyValue > 100) energyValue = 100;
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
    trashArray = [];
  }
}



//functionality for the image to change with the corresponding stats
function ImgStatChange() {
  let worstStat = min(hpValue, hungerValue, energyValue);

  if (hpValue <= 0) {
    currentImg = dead;
  } else if (worstStat <= 20) {
    currentImg = sick;
  } else if (worstStat <= 40) {
    currentImg = sad;
  } else if (worstStat <= 60) {
    currentImg = slightlySad;
  } else if (worstStat <= 80) {
    currentImg = neutral;
  } else {
    currentImg = happy;
  }
}




function UpdateStats() {
  let Seconds = deltaTime / 1000;

  if (hungerValue > 0) hungerValue -= hungerLoseRate * Seconds;
  hungerValue = constrain(hungerValue, 0, 100);

  if (energyValue > 0) energyValue -= energyLoseRate * Seconds;
  energyValue = constrain(energyValue, 0, 100);

  if (luckValue > 0) luckValue -= luckLoseRate * Seconds;
  luckValue = constrain(luckValue, 0, 100);

  if (hpValue > 0) hpValue -= hpLoseRate * Seconds;
  hpValue = constrain(hpValue, 0, 100);
}


//styles for the buttons 
function btn_styles() {
  let buttons = [feedButton, energyButton, playButton, cleanButton, resetButton, nameOfTama];

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
  storeItem("Hunger", hungerValue);
  storeItem("Energy", energyValue);
  storeItem("Luck", luckValue);
  storeItem("HP", hpValue);
  storeItem("Name", nameOfTama.value());
  storeItem("Color", colorChoice.value());
  storeItem("Background", bgChoice.value());
}