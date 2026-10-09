// Buttons
let optionBtn = [];
let BtnNext;
let BtnFinish;

// check to see if the question has been answered
let hasAnswered = false;

// Button variables
let WidthBtn = 90;
let HeightBtn = 75;
let BtnPositionY = 530;

// Next question button
let WidthBtnNext = 120;
let HeightBtnNext = 40;


let maxTime = 15;
let timeRemaining = maxTime;

// Questions and Answers data
let quizData = [
  {
    question: 'Hoe duur is Row-Bow',
    answers: ['450-500', '200-300', '10-30', '50-100'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/Row-Bow.png',
    soundPath: '/Week 5/assets/Row-Bow sound.mp3'
  },
  {
    question: 'welke skylander heeft de meest serie varianten',
    answers: ['Gill Grunt', 'Eruptor', 'Stealth Elf', 'Trigger Happy'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/vraag2.png',
    soundPath: '/Week 5/assets/Skylanders theme.mp3'
  },
  {
    question: 'Wie is deze skylander',
    answers: ['Thumpback', 'Tree Rex', 'Crusher', 'Eye-Brawl'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/ThumpbackBlack-out.png',
    soundPath: '/Week 5/assets/Skylanders theme.mp3'
  },
  {
    question: 'welke skylander van SSA heeft de minste varianten',
    answers: ['Sunburn', 'Ghost Roaster', 'Dino-Rang', 'Boomer'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/vraag4.png',
    soundPath: '/Week 5/assets/Skylanders theme.mp3'
  },
  {
    question: 'Hoeveel elementen zijn er in totaal in de lore?',
    answers: ['16', '8', '10', '12'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/Ellementen.png',
    soundPath: '/Week 5/assets/Skylanders theme.mp3'
  },
  {
    question: 'Wie is deze skylander',
    answers: ['Flashwing', 'Whirlwind', 'Cynder', 'Sunburn'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/Flashwing Black-out.png',
    soundPath: '/Week 5/assets/Skylanders theme.mp3'
  },
  {
    question: 'Welk element is dit',
    answers: ['Pandergast', 'Vuur', 'Aarde', 'Magie'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/pandergast ellement.png',
    soundPath: '/Week 5/assets/Skylanders theme.mp3'
  },
  {
    question: 'Wie is deze schurk uit skylanders',
    answers: ['Kaos', 'Golden Queen', 'Chompy Mage', 'Buzzer Beak'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/Kaos.png',
    soundPath: '/Week 5/assets/Kaos.mp3'
  },
  {
    question: 'Hoeveel Skylander consolegames zijn er',
    answers: ['6', '8', '10', '3'],
    correctIndex: 0,
    imagePath: '/Week 5/assets/skylandersDVD.png',
    soundPath: '/Week 5/assets/Skylanders theme.mp3'
  },
  {
    question: 'Wat is het allereerste Skylanders-spel dat uitkwam op de consoles?',
    answers: [
      'Skylanders: Spyros Adventure',
      'Skylanders: Swap Force',
      'Skylanders: Giants',
      'Skylanders: Trap Team'
    ],
    correctIndex: 0,
    imagePath: '/Week 5/assets/collectie foto skylander games.png',
    soundPath: '/Week 5/assets/Skylanders theme.mp3'
  }
];

// to next question
let CurrentQuestion = 0;

// Images & Sounds arrays
let QuizImages = [];
let QuizSounds = [];
let imgScoreBackground;
let imgCorrect = "url('/Week 5/assets/Btn_Correct.png')";
let imgWrong = "url('/Week 5/assets/Btn_wrong.png')";
let imgNormal = "url('/Week 5/assets/Btn_normal.png')";
let imgHover = "url('/Week 5/assets/Btn_hover.png')";
let ImgB;

// variables
let ArrayPositions = [200, 300, 400, 500];
let currentAnswers;
let score = 0;
let ScoreText = "";

function preload() {
  imgScoreBackground = loadImage('/Week 5/assets/Btn_Score.png');
  ImgB = loadImage('/Week 5/assets/Background.png');

  quizData = shuffle(quizData);
  for (let i = 0; i < quizData.length; i++) {
    QuizImages.push(loadImage(quizData[i].imagePath));
    if (quizData[i].soundPath) {
      QuizSounds.push(loadSound(quizData[i].soundPath));
    } else {
      QuizSounds.push(null);
    }
  }
}

function setup() {
  createCanvas(800, 600);
  QuestionSetup();
  RandomizeButtons();
  UpdateQuestions();
}

function draw() {
  background(20);
  imageMode(CENTER);

  image(ImgB, width / 2, height / 2, width, height);

  // score backgrond and timer
  if (imgScoreBackground) {
    image(imgScoreBackground, 75, 540, 90, 40);
  }

  textAlign(CENTER, CENTER);
  textSize(20);
  fill(255);
  textFont(ITALIC);

  text(score + "/10", 75, 540);

  if (BtnFinish) {
    text(ScoreText, 400, 250);
  } else {
    if (!hasAnswered) {
      timeRemaining -= deltaTime / 1000;
      if (timeRemaining <= 0) {
        timeRemaining = 0;
        checkAnswer(-1);
      }
    }


    if (imgScoreBackground) {
      image(imgScoreBackground, 725, 540, 90, 40);
    }

    push();
    if (timeRemaining <= 7 && !hasAnswered) {
      fill(255, 60, 60);
    } else {
      fill(255);
    }
    textSize(18);
    text(ceil(timeRemaining) + "s", 725, 540);
    pop();


    text(quizData[CurrentQuestion].question, 400, 30);

    if (QuizImages[CurrentQuestion]) {
      imageMode(CENTER);
      image(QuizImages[CurrentQuestion], 400, 300, 400, 400);
    }
  }
}

// function to check if the clicked answer is right or wrong
function checkAnswer(chosenIndex) {
  if (!hasAnswered) {
    hasAnswered = true;
    let correctIndex = quizData[CurrentQuestion].correctIndex;

    if (chosenIndex === correctIndex) {
      score = score + 1;
    }

    RightWrongButtonsIMG(correctIndex);
  }
}
//Next question functionality
function NextQuestion() {
  if (CurrentQuestion < quizData.length - 1) {
    CurrentQuestion = CurrentQuestion + 1;
    hasAnswered = false;
    timeRemaining = maxTime;
    UpdateQuestions();
    RandomizeButtons();
  } else {
    if (QuizSounds[CurrentQuestion] && QuizSounds[CurrentQuestion].isPlaying()) {
      QuizSounds[CurrentQuestion].stop();
    }

    for (let i = 0; i < optionBtn.length; i++) {
      optionBtn[i].hide();
    }
    EndText();

    BtnNext.hide();

    BtnFinish = createButton("Naar het hoofdmenu");
    BtnFinish.size(200, 60);
    BtnFinish.position(300, 320);

    BtnFinish.style('background-color', 'transparent');
    BtnFinish.style('padding', '0px');
    BtnFinish.style('border', 'none');
    BtnFinish.style('outline', 'none');
    BtnFinish.style('background-image', imgNormal);
    BtnFinish.style('background-size', '100% 100%');
    BtnFinish.style('background-repeat', 'no-repeat');
    BtnFinish.style('color', '#ffffff');
    BtnFinish.style('font-weight', 'bold');
    BtnFinish.style('cursor', 'pointer');
    BtnFinish.mousePressed(goToMainPage);
  }
}

// function to go to the main page
function goToMainPage() {
  window.location.href = "/Week 5/Main.html";
}

// function to give the buttons the answers & play question sound
function UpdateQuestions() {
  currentAnswers = quizData[CurrentQuestion].answers;

  for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].html(currentAnswers[i]);
    optionBtn[i].style('background-image', imgNormal);
  }

  for (let i = 0; i < QuizSounds.length; i++) {
    if (QuizSounds[i] && QuizSounds[i].isPlaying()) {
      QuizSounds[i].stop();
    }
  }

  if (QuizSounds[CurrentQuestion]) {
    QuizSounds[CurrentQuestion].play();
  }
}

//function to change the position of the buttons
function QuestionSetup() {
  for (let i = 0; i < 4; i++) {
    let btn = createButton('');
    btn.size(WidthBtn, HeightBtn);

    btn.style('background-color', 'transparent');
    btn.style('padding', '0px');
    btn.style('border', 'none');
    btn.style('outline', 'none');

    btn.style('background-image', imgNormal);
    btn.style('background-size', '100% 100%');
    btn.style('background-repeat', 'no-repeat');
    btn.style('color', '#ffffff');
    btn.style('font-weight', 'bold');
    btn.style('cursor', 'pointer');

    btn.mouseOver(() => {
      if (!hasAnswered) {
        btn.style('background-image', imgHover);
      }
    });

    btn.mouseOut(() => {
      if (!hasAnswered) {
        btn.style('background-image', imgNormal);
      }
    });

    btn.mousePressed(() => checkAnswer(i));
    optionBtn.push(btn);
  }

  // Next question button
  BtnNext = createButton("Volgende vraag");
  BtnNext.position(20, 560);
  BtnNext.size(WidthBtnNext, HeightBtnNext);

  BtnNext.style('background-color', 'transparent');
  BtnNext.style('padding', '0px');
  BtnNext.style('border', 'none');
  BtnNext.style('outline', 'none');

  BtnNext.style('background-image', imgNormal);
  BtnNext.style('background-size', '100% 100%');
  BtnNext.style('background-repeat', 'no-repeat');
  BtnNext.style('color', '#ffffff');
  BtnNext.style('font-weight', 'bold');
  BtnNext.style('cursor', 'pointer');

  BtnNext.mouseOver(() => BtnNext.style('background-image', imgHover));
  BtnNext.mouseOut(() => BtnNext.style('background-image', imgNormal));

  BtnNext.mousePressed(NextQuestion);
}

// function to give the buttons the image for correct and incorrect
function RightWrongButtonsIMG(correctIndex) {
  for (let i = 0; i < optionBtn.length; i++) {
    if (i === correctIndex) {
      optionBtn[i].style('background-image', imgCorrect);
    } else {
      optionBtn[i].style('background-image', imgWrong);
    }
  }
}

// function to change the position of the buttons
function RandomizeButtons() {
  ArrayPositions = shuffle(ArrayPositions);
  for (let i = 0; i < optionBtn.length; i++) {
    optionBtn[i].position(ArrayPositions[i], BtnPositionY);
  }
}

//function to change the text displayed at the end
function EndText() {
  if (score === 10) {
    ScoreText = 'Gefeliciteerd je hebt een uitmuntende score';
  } else if (score >= 7) {
    ScoreText = 'Gefeliciteerd je hebt een goede score';
  } else if (score >= 5) {
    ScoreText = 'Goed gedaan je hebt een voldoende';
  } else {
    ScoreText = 'Helaas je hebt een onvoldoende';
  }
}