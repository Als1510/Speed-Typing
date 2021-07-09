window.addEventListener("load", init);
let time;
let score = 0;
let isPlaying;

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");
const speed = document.querySelector("#select");

const words = [  "acoustics",  "decisive",  "past",  "quince",  "embarrass",  "simplistic",  "pleasure",  "crook",  "drink",  "store",  "color",  "change",  "three",  "watery",  "burst",  "ladybug",  "pickle",  "harass",  "bite",  "cough",  "reward",  "sin",  "cloistered",  "dramatic",  "functional",  "jewel",  "reading",  "hideous",  "tedious",  "drab", "tender",  "rot",  "porter",  "jittery",  "knit",  "straight",  "confuse",  "thrill",  "axiomatic",  "horrible",  "abortive",  "brother",  "increase",  "joke",  "listen",  "tongue",  "tow",  "harm",  "crate",  "educate",  "fretful",  "linen",  "shirt",  "stamp",  "vague",  "high-pitched",  "attend",  "share",  "observe",  "command",  "rampant",  "itch",  "calculating",  "breath",  "heavenly",  "pathetic",  "synonymous",  "broken",  "powder",  "walk",  "brainy",  "furniture",  "delightful",  "even",  "decorous",  "tiny",  "pink",  "drown",  "possess",  "knock",  "pour",  "bite-sized",  "glamorous",  "envious",  "direful",  "lumpy",  "tick",  "cloth",  "probable",  "soothe",  "waggish",  "describe",  "industrious",  "volleyball",  "blue-eyed",  "internal",  "chunky",  "snake",  "strong",  "accidental"];

speed.addEventListener("change", selectedSpeed);

function selectedSpeed() {
  seconds.innerHTML = speed.value;
  return speed.value;
}

function init() {
  showWord(words);
  wordInput.addEventListener("input", startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
  time = selectedSpeed();
  seconds.innerHTML = selectedSpeed();
}

function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = selectedSpeed();
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

function matchWords() {
  if (wordInput.value == currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}

function checkStatus() {
  if (!isPlaying && time == 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
