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

let CurrentImg;
let baseBackground;
let gardenImg;
let atticImg;
let gameRoomImg;
let TrashIcon;

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
let FeedButton;
let EnergyButton;
let PlayButton;
let CleanButton;

//saved variables
let SavedHunger;
let savedEnergy;
let savedLuck;
let savedHP;

//dropdown menu
let bgChoice;
let chosenBG;


//positions vars

//tamagotchi
let xTamagotchi = 340;
let yTamagotchi = 460;

//box
let xBox = 0;
let yBox = 250;
let wBox = 160;
let hBox = 200;
let roundingBox = 30;

//sleep text
let xSleepText = 380;
let ySleepText = 0;



function preload() {
  //emotions
  Happy = loadImage('../assets/Happy face.png')
  Sad = loadImage('../assets/Sad face.png')
  //nog werken aan Neutral emotie 
  Neutral = loadImage('../assets/Happy face.png')
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

  CurserHungerIcon = loadImage('../assets/test2.png')
  CurserHandIcon = loadImage('../assets/hand cursor.png')

  bgMusic = loadSound('../assets/bg_sound.mp3');
}


function setup() {
  createCanvas(800, 600);
  bgChoice = createSelect();
  bgChoice.position(650, 550);

  bgChoice.option('Basis achtergrond');
  bgChoice.option('Tuin');
  bgChoice.option('Zolder');
  bgChoice.option('Game kamer');

  bgChoice.selected('Basis achtergrond');


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

  FeedButton = createButton('klik om te voeden')
  FeedButton.mousePressed(Feed);
  FeedButton.position(10, 10)

  EnergyButton = createButton('klik om te slapen')
  EnergyButton.mousePressed(GiveEnergy);
  EnergyButton.position(195, 10)

  PlayButton = createButton('klik om te spelen')
  PlayButton.mousePressed(Play);
  PlayButton.position(380, 10)

  CleanButton = createButton('klik om schoon te maken')
  CleanButton.mousePressed(Clean);
  CleanButton.position(565, 10)

  PlayButton = createButton('klik om te opnieuw te beginnen')
  PlayButton.mousePressed(resetGame);
  PlayButton.position(10, 550)

  bgChoice.style('text-align: center;');
}

function draw() {
  background(180);
  chosenBG = bgChoice.value()
  if (chosenBG === 'Basis achtergrond') {
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



  UpdateStats();
  if (isFeeding) {
    cursor('../assets/test2.png', 16, 16);
  } else if (isPlaying) {
    cursor('../assets/handcursur.png', 16, 16);
  } else {
    cursor(ARROW);
  }

  image(CurrentImg, xTamagotchi, yTamagotchi);
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


function sleeping() {
  if (isSleeping == true) {
    let Seconds = deltaTime / 1000;

    push()
    tint(0, 0, 0, 200)
    image(CurrentImg, xTamagotchi, yTamagotchi)
    if (chosenBG === 'Basis achtergrond') {
      yTamagotchi = 300
      ySleepText = 250
    }
    pop()

    textSize(40);
    text("Zzz...", xSleepText, ySleepText);
    Energy += normalImprove * Seconds;
    HP += smallImprove * Seconds;

  }
  if (isSleeping == false) {
    tint(255);
    yTamagotchi = 460;
    ySleepText = 400;
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

function saveScore() {
  storeItem("Hunger", fullness);
  storeItem("Energy", Energy);
  storeItem("Luck", Luck);
  storeItem("HP", HP);
}