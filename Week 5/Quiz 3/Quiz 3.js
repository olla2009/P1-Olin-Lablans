// Buttons
let optionBtn = [];
let BtnNext;
let BtnFinish;

// check to see if the question has been answered
let hasAnswered = false;

// Button variables
let WidthBtn = 105;
let HeightBtn = 85;
let BtnPositionY = 520;

// Next question button
let WidthBtnNext = 120;
let HeightBtnNext = 40;


let maxTime = 15;
let timeRemaining = maxTime;

// Questions and Answers data
let quizData = [
  {
    question: 'Wat is de naam van Flynns luchtschip?',
    answers: ['Dread Yacht', 'The Calamity', 'Sky-Clipper', 'Flynn-Mobile'],
    correctIndex: 0,
    imagePath: '../assets/Dread Yacht.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },

  {
    question: 'Wie sprak de stem in van Kaos in de engelse versie?',
    answers: ['Richard Horvitz', 'Nolan North', 'Tara Strong', 'Tom Kenny'],
    correctIndex: 0,
    imagePath: '../assets/Kaosimg2.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },
  {
    question: 'Welke Skylander heeft de catchphrase "Tread and Shred"?',
    answers: ['Tread Head', 'Deck Hands', 'High Five', 'Flip Wreck'],
    correctIndex: 0,
    imagePath: '../assets/Skylanders Trapteam.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },
  {
    question: 'Wat is de catchphrase van Spyro in Skylanders?',
    answers: ['All Fired Up!', 'Bring the Heat!', 'Unleash the Dragon!', 'Ready to Roar!'],
    correctIndex: 0,
    imagePath: '../assets/Spyro.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },
  {
    question: 'In welk jaar kwam de eerste game uit?',
    answers: ['2011', '2009', '2012', '2010'],
    correctIndex: 0,
    imagePath: '../assets/Release.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },
  {
    question: 'Hoe heet het machtige wapen van Arkus?',
    answers: ['Iron Fist', 'Ultimate Weapon', 'Sky-Slicer', 'Darkstone Blade'],
    correctIndex: 0,
    imagePath: '../assets/Arkus.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },
  {
    question: 'Wat heb je nodig voor een eigen Imaginator?',
    answers: ['Creation Crystal', 'Imagination Chest', 'Traptanium Portal', 'Soul Gem'],
    correctIndex: 0,
    imagePath: '../assets/Crystal.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },
  {
    question: 'Hoe heet het hoofddorp in Swap Force?',
    answers: ['Woodburrow', 'Sanctuary', 'Skyland Hub', 'Cloudbreak'],
    correctIndex: 0,
    imagePath: '../assets/SSF.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },
  {
    question: 'Wie is de leider van de Doom Raiders?',
    answers: ['Golden Queen', 'Wolfgang', 'kaos', 'Chompy Mage'],
    correctIndex: 0,
    imagePath: '../assets/Doom Raiders.png',
    soundPath: '../assets/Skylanders theme.mp3'
  },
  {
    question: 'Welke Skylander heeft de bekende catchphrase "I Have a Bone to Pick!"?',
    answers: ['Funny Bone', 'Chop Chop', 'Krypt King', 'Fiesta'],
    correctIndex: 0,
    imagePath: '../assets/skeleton skylanders.png',
    soundPath: '../assets/Skylanders theme.mp3'
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
let ArrayPositions = [180, 293, 407, 520];
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