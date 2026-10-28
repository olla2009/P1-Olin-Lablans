//hunger
let fullness = 0;
let loseFullness = 0.6;
let isFeeding = false;
let maxHunger = 5;

//Energy
let Energy = 100;
let loseEnergy = 0.5;
let maxEnergy = 5
let isSleeping = false

//luck
let Luck = 100;
let loseLuck = 0.7;
let luckIcon;
let maxLuck = 5
let isPlaying = false;

//health
let HP = 100;
let LoseHp = 0.3;
let MaxHearts = 5

//universal
let Status;
let normalImprove = 10
let smallImprove = 5

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
let btn_Normal
let btn_Hover
let btn_Pressed


//Sounds
let bgMusic;


//cleaning
let isCleaning = false;
let trashItems = [];

//icons
let HeartIcon;
let HungerIcon;
let EnergyIcon;

//curser images
let CurserHungerIcon;
let CurserHandIcon;

//buttons
let feedButton;
let energyButton;
let PlayButton;
let resetButton;
let cleanButton;

//saved variables
let SavedHunger;
let savedEnergy;
let savedLuck;
let savedHP;

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
let xPosName = 370
let yPosName = 430

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


function preload() {
  //emotions
  Happy = loadImage('../assets/Happy face.png')
  Sad = loadImage('../assets/Sad face.png')
  //nog werken aan Neutral emotie 
  Neutral = loadImage('../assets/tired face.png')
  Hungry = loadImage('../assets/Hungry face.png')
  Sick = loadImage('../assets/Sick face.png')
  Dead = loadImage('../assets/Dead face.png')

  //backgrounds
  baseBackground = loadImage('../assets/base_bg.jpeg')
  gardenImg = loadImage('../assets/garden.png')
  atticImg = loadImage('../assets/Attic.png')
  gameRoomImg = loadImage('../assets/Gameroom.png')

  //Icons
  HeartIcon = loadImage('../assets/Health icon.png')
  HungerIcon = loadImage('../assets/Hunger icon.png')
  EnergyIcon = loadImage('../assets/EnergyIcon.png')
  luckIcon = loadImage('../assets/Four leafe clover.png')
  TrashIcon = loadImage('../assets/garbagebag.png');

  //hand curers
  CurserHungerIcon = loadImage('../assets/test2.png')
  CurserHandIcon = loadImage('../assets/hand cursor.png')

  //btn images
  btn_Normal = loadImage('../assets/btn_Normal.png')
  btn_Hover = loadImage('../assets/btn_Pressed.png')
  btn_Pressed = loadImage('../assets/btn_Hover.png')

  //music
  bgMusic = loadSound('../assets/bg_sound.mp3');

  //font 
  pixelFont = loadFont('../assets/PressStart2P-Regular.ttf');
}


function setup() {
  createCanvas(800, 600);
  textFont(pixelFont)
  nameOfTama = createInput('').attribute('placeholder', 'name');
  nameOfTama.position(5, 55)

  bgChoice = createSelect();
  bgChoice.position(5, 10);

  bgChoice.option('Woonkamer');
  bgChoice.option('Tuin');
  bgChoice.option('Zolder');
  bgChoice.option('Game kamer');

  bgChoice.selected('Woonkamer');


  CurrentImg = Happy;

  SavedHunger = getItem("Hunger");
  if (SavedHunger !== null) {
    fullness = SavedHunger;
  }

  savedEnergy = getItem("Energy");
  if (savedEnergy !== null) {
    Energy = savedEnergy
  }

  savedLuck = getItem("Luck");
  if (savedLuck !== null) {
    Luck = savedLuck
  }

  savedHP = getItem("HP");
  if (savedHP !== null) {
    HP = savedHP
  }

  savedName = getItem("Name");
  if (savedName !== null) {
    chosenName = savedName;
    nameOfTama.value(chosenName);
  }



  feedButton = createButton('klik om te voeden')
  feedButton.mousePressed(Feed);
  feedButton.position(5, 550)

  energyButton = createButton('klik om te slapen')
  energyButton.mousePressed(GiveEnergy);
  energyButton.position(150, 550)

  PlayButton = createButton('klik om te spelen')
  PlayButton.mousePressed(Play);
  PlayButton.position(505, 550)

  cleanButton = createButton('klik om schoon te maken')
  cleanButton.mousePressed(Clean);
  cleanButton.position(650, 550)

  resetButton = createButton('klik om opnieuw te beginnen')
  resetButton.mousePressed(resetGame);
  resetButton.position(640, 10)

  bgChoice.style('text-align: center;');

  btn_styles()
}

function draw() {
  background(180);
  chosenBG = bgChoice.value()
  if (chosenBG === 'Woonkamer') {
    image(baseBackground, 0, 0);
    push()
    fill(255, 150, 150, 100)
    rect(xBox, yBox, wBox, hBox, roundingBox)
    pop()
  } else if (chosenBG === 'Tuin') {
    image(gardenImg, 0, 0, 800, 600);
    push()
    fill(210, 255, 210, 100)
    rect(xBox, yBox, wBox, hBox, roundingBox)
    pop()
  } else if (chosenBG === 'Zolder') {
    image(atticImg, 0, 0, 800, 600);
    push()
    fill(255, 215, 185, 100);
    rect(xBox, yBox, wBox, hBox, roundingBox)
    pop()
  } else if (chosenBG === 'Game kamer') {
    image(gameRoomImg, 0, 0, 800, 600)
    push()
    fill(190, 190, 255, 100)
    rect(xBox, yBox, wBox, hBox, roundingBox)
    pop()
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

  chosenName = nameOfTama.value()
  push()
  fill(255)
  textSize(15)
  text(chosenName, xPosName, yPosName)
  pop()
  image(CurrentImg, xTama, yTama);
  sleeping();
  stat();
  drawTrash();
  ImgStatChange();
  saveScore();
}

function resetGame() {
  fullness = 100;
  Energy = 100
  Luck = 100
  HP = 100

  removeItem('Hunger');
  removeItem('Energy');
  removeItem('Luck');
  removeItem('HP');

  saveScore()
}

//sleep function
function sleeping() {
  if (isSleeping == true) {
    let Seconds = deltaTime / 1000;

    push()
    tint(0, 0, 0, 200)
    image(CurrentImg, xTama, yTama)
    if (chosenBG === 'Woonkamer') {
      yTama = 300
      ySleepText = 260
      yPosName = 300
    }
    pop()

    textSize(25);
    text("Zzz...", xSleepText, ySleepText);
    Energy += normalImprove * Seconds;
    HP += smallImprove * Seconds;

  }
  if (isSleeping == false) {
    tint(255);
    yTama = 460;
    ySleepText = 400;
    yPosName = 430
  }
}

function mouseClicked() {
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
  }
  if (isFeeding) {
    if (mouseX > 370 && mouseX < 470 && mouseY > 440 && mouseY < 600) {

      if (fullness >= 98) {
        HP = HP - normalImprove;
      } else {
        fullness = fullness + normalImprove;
        Energy = Energy + smallImprove;
      }
      isFeeding = false;
    }

  }

  if (isPlaying) {
    if (mouseX > 370 && mouseX < 470 && mouseY > 440 && mouseY < 600) {
      Luck = Luck + normalImprove;
      Energy = Energy - smallImprove;
    }
  }

  if (isCleaning) {
    for (let i = trashItems.length - 1; i >= 0; i--) {
      let t = trashItems[i];
      let d = dist(mouseX, mouseY, t.x, t.y);

      if (d < t.size / 2) {
        trashItems.splice(i, 1);
        HP = HP + smallImprove;
        if (HP > 100) HP = 100;
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
  //image for-loop for HP
  for (let i = 0; i < MaxHearts; i++) {
    image(HeartIcon, 0 + (i * 30), 250, 40, 40);
  }

  //image for-loop for Energy
  for (let i = 0; i < maxEnergy; i++) {
    image(EnergyIcon, 0 + (i * 30), 300, 40, 40);
  }

  //image for-loop for Hunger
  for (let i = 0; i < maxHunger; i++) {
    image(HungerIcon, -20 + (i * 30), 330, 70, 70);
  }

  //image for-loop for luck
  for (let i = 0; i < maxLuck; i++) {
    image(luckIcon, -5 + (i * 30), 400, 50, 50);
  }
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
  Energy = Energy + normalImprove
  isSleeping = !isSleeping
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
  //HP
  if (HP > 80 && HP <= 100) {
    MaxHearts = 5
    CurrentImg = Happy;
  } else if (HP > 60 && HP <= 80) {
    MaxHearts = 4
    CurrentImg = Neutral;
  } else if (HP > 40 && HP <= 60) {
    MaxHearts = 3
    CurrentImg = Hungry;
  } else if (HP > 10 && HP <= 40) {
    MaxHearts = 2
    CurrentImg = Sad;
  } else if (HP <= 10) {
    MaxHearts = 1
    CurrentImg = Sad;
  }

  //Energy
  if (Energy > 80 && Energy <= 100) {
    maxEnergy = 5
  } else if (Energy > 60 && Energy <= 80) {
    maxEnergy = 4
  } else if (Energy > 40 && Energy <= 60) {
    maxEnergy = 3
  } else if (Energy > 10 && Energy <= 40) {
    maxEnergy = 2
  } else if (Energy <= 10) {
    maxEnergy = 1
  }

  //hunger
  if (fullness > 80 && fullness <= 100) {
    maxHunger = 5
  } else if (fullness > 60 && fullness <= 80) {
    maxHunger = 4
  } else if (fullness > 40 && fullness <= 60) {
    maxHunger = 3
  } else if (fullness > 10 && fullness <= 40) {
    maxHunger = 2
  } else if (fullness <= 10) {
    maxHunger = 1
  }

  //Luck
  if (Luck > 80 && Luck <= 100) {
    maxLuck = 5
  } else if (Luck > 60 && Luck <= 80) {
    maxLuck = 4
  } else if (Luck > 40 && Luck <= 60) {
    maxLuck = 3
  } else if (Luck > 10 && Luck <= 40) {
    maxLuck = 2
  } else if (Luck <= 10) {
    maxLuck = 1
  }
}

function UpdateStats() {
  let Seconds = deltaTime / 1000

  if (fullness > 0) {
    fullness -= loseFullness * Seconds;
  }
  if (fullness < 0) {
    fullness = 0;
  }
  if (fullness > 100) {
    fullness = 100;
  }

  if (Energy > 0) {
    Energy -= loseEnergy * Seconds
  }
  if (Energy > 100) {
    Energy = 100;
  }

  if (Luck > 0) {
    Luck -= loseLuck * Seconds
  }
  if (Luck > 100) {
    Luck = 100;
  }

  if (HP > 0) {
    HP -= LoseHp * Seconds
  }
  if (HP > 100) {
    HP = 100;
  }
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
  storeItem("Hunger", fullness);
  storeItem("Energy", Energy);
  storeItem("Luck", Luck);
  storeItem("HP", HP);
  storeItem("Name", nameOfTama.value())
}