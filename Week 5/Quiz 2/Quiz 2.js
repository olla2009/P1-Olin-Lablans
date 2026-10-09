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
    question: ' Hoe heet de assistent van Master Eon?',
    answers: ['Hugo de Mabu', 'Flynn de piloot', 'Cali de avonturier', 'Glumshanks'],
    correctIndex: 0,
    imagePath: '../assets/Hugo.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Welke twee Nintendo karakters werden speelbaar in Skylanders: SuperChargers?',
    answers: ['Bowser & Donkey Kong', 'Mario & Luigi', 'Link & Zelda', 'Yoshi & Kirby'],
    correctIndex: 0,
    imagePath: '../assets/Nintendo.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Waarvoor dient de Lichtkern in de eerste Skylanders-game?',
    answers: ['Om de duisternis van Kaos te verdrijven', 'Om Skylanders te levelen naar level 20', 'Om geld te geven aan de speler', 'Om nieuwe elementen vrij te spelen'],
    correctIndex: 0,
    imagePath: '../assets/COL.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Welk bekend muziek icoon werkte aan de hoofdmuziek van Skylanders: Spyros Adventure?',
    answers: ['Hans Zimmer', 'John Williams', 'Ennio Morricone', 'Danny Elfman'],
    correctIndex: 0,
    imagePath: '../assets/SSA.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Hoe heet de moeder van Kaos?',
    answers: ['Kaossandra', 'Kaosita', 'Queen Kaos', 'Malefor'],
    correctIndex: 0,
    imagePath: '../assets/Kaossandra.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Wat is het maximale level dat een standaard Skylander kan behalen in Skylanders: Imaginators?',
    answers: ['20', '10', '50', '99'],
    correctIndex: 0,
    imagePath: '../assets/Skylanders Imaginators.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Wat is de eerste schurk in skylanders trapteam?',
    answers: ['Sheep Creep', 'The Gulper', 'Chompy Mage', 'Chef Pepper Jack'],
    correctIndex: 0,
    imagePath: '../assets/Skylanders Trapteam.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Hoe heten de kleine versies van skyalnders?',
    answers: ['Minis', 'Giants', 'Eons Elite', 'Lightcores'],
    correctIndex: 0,
    imagePath: '../assets/Trigger Snappy.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Welk ancient ras van robots heerste duizenden jaren geleden over Skylands voordat ze verdwenen?',
    answers: ['De Arkeyanen', 'De bots', 'De Dwergen', 'De Trolls'],
    correctIndex: 0,
    imagePath: '../assets/Arkeyan.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Welke schurk moet je verslaan in skylanders Spyros Adventure op de 3ds?',
    answers: ['Hektore', 'Malefor', 'Sheep King', 'Dr. Krankcase'],
    correctIndex: 0,
    imagePath: '../assets/SSA3ds.png',
    soundPath: '../assets/Skylanders theme.mp3'
  }
];

// to next question
let CurrentQuestion = 0;

// Images & Sounds arrays
let QuizImages = [];
let QuizSounds = [];
let imgScoreBackground;
let imgCorrect = "url('../assets/Btn_Correct.png')";
let imgWrong = "url('../assets/Btn_wrong.png')";
let imgNormal = "url('../assets/Btn_normal.png')";
let imgHover = "url('../assets/Btn_hover.png')";
let ImgB;

// variables
let ArrayPositions = [200, 300, 400, 500];
let currentAnswers;
let score = 0;
let ScoreText = "";

function preload() {
  imgScoreBackground = loadImage('../assets/Btn_Score.png');
  ImgB = loadImage('../assets/Background.png');

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
  window.location.href = '../Main.html';
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