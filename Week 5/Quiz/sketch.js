//Buttons
let optionButtons = [];
let ButtonNext;

//Button style

//abcd question buttons
let WidthButton = 80;
let HeightButton = 60;
let ButtonPositionY = 545;

//Next question button
let WidthButton2 = 100;
let HeightButton2 = 40;

//Questions
let Questions = [];
Questions.push('Hoe duur is Row-Bow')
Questions.push('welke skylander heeft de meest serie varianten')
Questions.push('Wie is deze skylander')
Questions.push('welke skylander van SSA heeft de minste varianten')
Questions.push('Hoeveel elementen zijn er in totaal in de lore?')
Questions.push('Wie is deze skylander')
Questions.push('Welk element is dit')
Questions.push('wie is deze schurk uit skylanders')
Questions.push('Hoeveel Skylanders-consolegames zijn er')
Questions.push('Wat is het allereerste Skylanders-spel dat uitkwam op de consoles?')

//to next question
let CurrentQuestion = 0;

//Answers (A is always the right answer B C D are fill ups)
let AnswerA = []
let AnswerB = []
let AnswerC = []
let AnswerD = []

//function I have every possible answer in
Answers()


//Images
let QuizImages = []


//sounds
let RowBowSound;

//images
function preload() {
  QuizImages.push(loadImage('/Week 5/assets/Row-Bow.png'));
  QuizImages.push(loadImage('/Week 5/assets/vraag2.png'));
  QuizImages.push(loadImage('/Week 5/assets/ThumpbackBlack-out.png'));
  QuizImages.push(loadImage('/Week 5/assets/vraag4.png'));
  QuizImages.push(loadImage('/Week 5/assets/Ellementen.png'));
  QuizImages.push(loadImage('/Week 5/assets/Flashwing Black-out.png'));
  QuizImages.push(loadImage('/Week 5/assets/pandergast ellement.png'));
  QuizImages.push(loadImage('/Week 5/assets/Kaos.png'));
  QuizImages.push(loadImage('/Week 5/assets/skylandersDVD.png'));
  QuizImages.push(loadImage('/Week 5/assets/collectie foto skylander games.png'));
}


function setup() {
  createCanvas(800, 600);
  QuistionSetup();
  //RowBowSound = loadSound('/Week 5/assets/Row-Bow sound.mp3');
  RandomiseButtons();
}

function RandomiseButtons() {
  let array_posities = [225, 315, 405, 495];
  array_posities = shuffle(array_posities);
  console.log(array_posities);

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].position(array_posities[i], ButtonPositionY);
  }
}

function draw() {
  background(200);
  textAlign(CENTER, CENTER);
  textSize(20);
  textFont(ITALIC);
  text(Questions[CurrentQuestion], width / 2, 30);

  if (QuizImages[CurrentQuestion]) {
    imageMode(CENTER);
    image(QuizImages[CurrentQuestion], width / 2, height / 2, 400, 400);
  }
}

function mousePressed() {
  if (RowBowSound) {
    RowBowSound.play();
  }
}


function WrongAnswers() {
  console.log("incorrect");
  for (let i = 0; i < optionButtons.length; i++) {
    if (i === 0) {
      optionButtons[i].style('background-color', '#00ff08');
    } else {
      optionButtons[i].style('background-color', '#ff0000');
    }
  }
}

function RightAnswer() {
  console.log("correct");
  for (let i = 0; i < optionButtons.length; i++) {
    if (i === 0) {
      optionButtons[i].style('background-color', '#00ff08');
    } else {
      optionButtons[i].style('background-color', '#ff0000');
    }
  }
}


function NextQuestion() {
  if (CurrentQuestion < Questions.length - 1) {
    CurrentQuestion = CurrentQuestion + 1;
    UpdateQuestions();
    RandomiseButtons();
  } else {
    console.log("Einde van de quiz!");
  }
}


function UpdateQuestions() {
  let currentAnswers = [
    AnswerA[CurrentQuestion],
    AnswerB[CurrentQuestion],
    AnswerC[CurrentQuestion],
    AnswerD[CurrentQuestion]
  ];

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].html(currentAnswers[i]);
    optionButtons[i].style('background-color', '#00f7ff');
  }
}


function QuistionSetup() {
  let EveryAnswer = [
    AnswerA[CurrentQuestion],
    AnswerB[CurrentQuestion],
    AnswerC[CurrentQuestion],
    AnswerD[CurrentQuestion]
  ];

  for (let i = 0; i < 4; i++) {
    let action = (i === 0) ? RightAnswer : WrongAnswers;
    let Button = createButton(EveryAnswer[i]);
    Button.size(WidthButton, HeightButton);
    Button.style('background-color', '#00f7ff');
    Button.style('color', '#3700ff');
    Button.style('font-family', 'serif');
    Button.mousePressed(action);
    optionButtons.push(Button);
  }

  //Next question button
  ButtonNext = createButton("Next question");
  ButtonNext.position(20, 560);
  ButtonNext.style('background-color', '#00f7ff');
  ButtonNext.style('color', '#3700ff');
  ButtonNext.style('font-family', 'serif');
  ButtonNext.size(WidthButton2, HeightButton2);
  ButtonNext.mousePressed(NextQuestion);
}

function Answers() {
  //Answers forA
  AnswerA.push('450-500')
  AnswerA.push('Gill Grunt')
  AnswerA.push('Thumpback')
  AnswerA.push('Sunburn')
  AnswerA.push('16')
  AnswerA.push('Flashwing')
  AnswerA.push('Pandergast')
  AnswerA.push('Kaos')
  AnswerA.push('6')
  AnswerA.push('Skylanders: Spyros Adventure')

  //Answers for B
  AnswerB.push('200-300')
  AnswerB.push('Eruptor')
  AnswerB.push('Tree Rex')
  AnswerB.push('Ghost Roaster')
  AnswerB.push('8')
  AnswerB.push('Whirlwind')
  AnswerB.push('Vuur')
  AnswerB.push('Golden Queen')
  AnswerB.push('8')
  AnswerB.push('Skylanders: Swap Force')

  //Answers for C
  AnswerC.push('10-30')
  AnswerC.push('Stealth Elf')
  AnswerC.push('Crusher')
  AnswerC.push('Dino-Rang')
  AnswerC.push('10')
  AnswerC.push('Cynder')
  AnswerC.push('Aarde')
  AnswerC.push('Chompy Mage')
  AnswerC.push('10')
  AnswerC.push('Skylanders: Giants')


  //Answers for D
  AnswerD.push('50-100')
  AnswerD.push('Trigger Happy')
  AnswerD.push('Eye-Brawl')
  AnswerD.push('Boomer')
  AnswerD.push('12')
  AnswerD.push('Sunburn')
  AnswerD.push('Magie')
  AnswerD.push('Buzzer Beak')
  AnswerD.push('3')
  AnswerD.push('Skylanders: Trap Team')
}