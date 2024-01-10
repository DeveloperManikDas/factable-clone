const questions = [
  {
    id: 1,
    question: "01. What is most important to you?",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/helena-lopes-PGnqT0rXWLs-unsplash-72242.jpg?quiz=true&width=756&height=331",
    ImgCredit: "Helena Lopes/Unsplash",
    options: ["HAPPINESS", "LOVE", "WEALTH"],
    dialogue:
      "While an old soul would prefer happiness to wealth when it comes to their life, a person with a younger soul might enjoy a bit of wealth. That being said, a mix would probably go for love.",
  },
  {
    id: 2,
    question: "02. Which movie would you prefer to watch on a lazy night in?",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/star-wars-episode-v-the-empire-strikes-back_da6a64fb-37641.jpg?quiz=true&b=0&c=0&width=756&height=331&top=0&left=0&zoom=0.63",
    ImgCredit: "Twentieth Century Fox",
    options: ["THE AVENGERS", "CASABLANCA", "STAR WARS"],
    dialogue:
      "Between an oldie, a film from the 70s, and one of Marvel’s films from Phase One of the Marvel Cinematic Universe, it is kind of easy to see who has an old soul and who is younger at heart!",
  },
  {
    id: 3,
    question: "03. Do you enjoy traveling to new and exotic places?",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/07/287522282_23850636956840774_2504782774445378725_n-11964.jpg?quiz=true&b=0&c=0&width=756&height=331&top=65&left=0&zoom=0.63",
    ImgCredit: "Pinterest",
    options: ["YES", "NO", "DEPENDS ON THE PLACE"],
    dialogue:
      "There is nothing wrong with being a homebody, but one type of soul is definitely more adventurous than the other. Then there is the mix, who probably would want to do a bit of research before traveling.",
  },
  {
    id: 4,
    question: "04. Pick a flower!",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/olia-nayda-9KQVWzSmd3I-unsplash-34325.jpg?quiz=true&b=0&c=0&width=756&height=331&top=420&left=0&zoom=0.63",
    ImgCredit: "Olia Nayda/Unsplash",
    options: ["ROSE", "DAISY", "SUNFLOWER"],
    dialogue:
      "While all flowers are pretty much amazing, roses have a tendency to transport people back to olden times when men would pick up their dates with a single rose… ok, maybe that’s just in the movies!",
  },
  {
    id: 5,
    question: "05. Which type of food would you prefer to eat?",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/chad-montano-MqT0asuoIcU-unsplash-81711.jpg?quiz=true&b=0&c=0&width=756&height=331&top=216&left=0&zoom=0.63",
    ImgCredit: "Chad Montano/Unsplash",
    options: ["COMFORT FOOD", "HEALTH FOOD", "A HOME-COOKED MEAL"],
    dialogue:
      "People might have different cravings on different days, but an old soul will most likely go straight towards the comfort foods, such as chicken and mac and cheese with a side of potatoes.",
  },
  {
    id: 6,
    question: "06. Pick a Desert",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/cristina-matos-albers-c4sGBJkDrjg-unsplash-55604.jpg?quiz=true&b=0&c=0&width=756&height=331&top=113&left=0&zoom=0.63",
    ImgCredit: "Cristina Mator-Albers/Unsplash",
    options: ["ANY TYPE OF COOKIE", "CHOCOLATE CAKE", "CARROT CAKE"],
    dialogue:
      "Which type of dessert did you pick? While it is usually hard to pick just one, an old soul most likely would choose the carrot cake over chocolate or cookies.",
  },
  {
    id: 7,
    question: "How do you listen to your music?",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/jace-afsoon-PvqGd3PH6ZE-unsplash-34055.jpg?quiz=true&b=0&c=0&width=756&height=331&top=81&left=0&zoom=0.63",
    ImgCredit: "Jace Afsoon/Unsplash",
    options: ["AN IPOD WITH HEADPHONES", "BLUETOOTH SPEAKER", "RECORD PLAYER"],
    dialogue:
      "Many people in the younger generation might not own a record player and will opt to use a Bluetooth speaker instead. Then there is the mix, who most likely reaches for an iPod and plugs in some headphones.",
  },
  {
    id: 8,
    question: "What is your favorite social media app?",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/in-this-photo-illustration-a-tiktok-logo-is-displayed-on.-42940.jpeg?quiz=true&b=0&c=0&width=756&height=331&top=146&left=0&zoom=0.63",
    ImgCredit:
      "Illustration by Sheldon Cooper/SOPA Images/LightRocket via Getty Images",
    options: ["FACEBOOK", "TIKTOK", "SNAPCHAT"],
    dialogue:
      "While people old and young use social media, there tends to be a very real separation when it comes to Facebook and TikTok — old souls will venture towards Facebook.",
  },
  {
    id: 9,
    question: "Pick a Starbucks drink.",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/fahmi-fakhrudin-nzyzAUsbV0M-unsplash-79742.jpg?quiz=true&b=0&c=0&width=756&height=331&top=46&left=0&zoom=0.63",
    ImgCredit: "Fahmi Fakhrudin/Unsplash",
    options: ["PUMPKIN SPICE LATTE", "HOT CHOCOLATE ", "HOT COFFEE OR TEA"],
    dialogue:
      "People might change up their coffee orders at Starbucks depending on the season. One thing is clear, though. An old soul will most likely go straight to a cup of coffee, while a young soul will get a fancier drink.",
  },
  {
    id: 10,
    question: "Pick a tree!",
    imgSrc:
      "https://www.factable.com/wp-content/uploads/2022/06/eep-76042.jpg?quiz=true&b=0&c=0&width=756&height=331&top=45&left=0&zoom=0.63",
    ImgCredit: "Jason Blackeye/Unsplash",
    options: ["PALM", "WEEPING WILLOW", "EVERGREEN"],
    dialogue:
      "By choosing one of these three trees, a person can say a lot about themselves. A palm tree usually means going to exotic and warm places, while evergreens usually depict the holidays, and willows are just beautiful and wise-looking.",
  },
];

let level = 0;
let progressbars = document.querySelectorAll(".progress-bar");
let mainImage = document.querySelector(".main-image");
let nextButton = document.querySelector(".next-button");
let imgCredit = document.querySelector(".img-credit");
let question = document.querySelector(".question");
let optionDiv = document.querySelector(".options-div");
let optionButtons = document.querySelectorAll(".option-button");
let optionInfo = document.querySelector(".option-info");
let startQuiz = document.querySelector(".start-quiz");
let aboutFactable = document.querySelector(".about-factable");
let progress = document.querySelector(".progress");
let progressPercent = document.querySelector(".progress-percent");
let hiddenElements = document.querySelectorAll(".hide");
let buttons = document.querySelectorAll(".option-button");
let menuIcon = document.querySelector(".menu-icon img");
let x = document.querySelector(".cross");
let sb = document.querySelector(".slide-bar");
menuIcon.addEventListener("click", function () {
  sb.classList.remove("hide-slide");
});

x.addEventListener("click", function () {
  sb.classList.add("hide-slide");
});

function removeAllListeners() {
  buttons.forEach(function (button) {
    button.removeEventListener("click", buttonClickListener);
  });
}
function removeSelectedClass() {
  buttons.forEach((button) => {
    if (button.classList.contains("selected")) {
      button.classList.remove("selected");
    }
  });
}

function buttonClickListener(event) {
  event.target.classList.add("selected");
  removeAllListeners();
  optionInfo.classList.remove("hide");
  nextButton.innerHTML = "Next";
  nextButton.classList.remove("hide");
}

function showNextQuestion() {
  removeSelectedClass();
  hiddenElements.forEach((element) => {
    element.classList.remove("hide");
    optionInfo.classList.add("hide");
    nextButton.classList.add("hide");
  });
  if (level < questions.length) {
    const currentQuestion = questions[level];
    question.textContent = currentQuestion.question;
    mainImage.src = currentQuestion.imgSrc;
    imgCredit.textContent = "Credit: " + currentQuestion.ImgCredit;
    optionInfo.innerHTML = currentQuestion.dialogue;
    optionButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
    });
    let width = (100 / questions.length) * level + "%";
    progress.style.width = width;
    progressPercent.innerHTML = width;

    let buttons = document.querySelectorAll(".option-button");
    buttons.forEach(function (button) {
      button.addEventListener("click", buttonClickListener);
    });
    console.log(level);
    level++;
    console.log(level);
  } else {
  }
}

nextButton.addEventListener("click", showNextQuestion);
