const documentLoaded = function () {
  let hestu = document.getElementById("hestu");
  let hestunametag = document.getElementById("hestunametag");
  let greeting = document.getElementById("greeting");
  let userresponse = document.getElementById("userresponse");
  let response = document.getElementById("response");
  let clue = document.getElementById("clue");
  let clue1 = document.getElementById("clue1");
  let clue2 = document.getElementById("clue2");
  let clue3 = document.getElementById("clue3");
  let clue4 = document.getElementById("clue4");
  let clue5 = document.getElementById("clue5");
  let clue6 = document.getElementById("clue6");
  let codeinput = document.getElementById("codeinput");
  let submitbutton1 = document.getElementById("submitbutton1");
  let submitbutton2 = document.getElementById("submitbutton2");
  let submitbutton3 = document.getElementById("submitbutton3");
  let submitbutton4 = document.getElementById("submitbutton4");
  let submitbutton5 = document.getElementById("submitbutton5");
  let korok = document.getElementById("korok");
  let yahaha = document.getElementById("yahaha");
  let givenextclue = document.getElementById("givenextclue");
  let blankerror = document.getElementById("blankerror");
  let incorrect = document.getElementById("incorrect");
  hestu1();
};

// When the app is first opened, Hestu will greet the user and explain the game. Onclick to go to next speech bubble.

function hestu1() {
  greeting.innerHTML = "Hey, hey, I'm Hestu! Musician of Korok Forest!";
  response.innerHTML = "Oh snap!";
}

function hestu2() {
  greeting.innerHTML =
    "I'm playing hide and seek with my korok friends! Shoko...but...I'm not very good at it!!! Can you help me?";
  response.innerHTML = "Sure!";
}

function hestu3() {
  greeting.innerHTML =
    "When you find a korok, enter the secret code to get the next clue!";
  response.innerHTML =
    "Sweet! The developer that made this app is probably super cool.";
}

function hestuend() {
  hestu.style.display = "block";
  hestunametag.style.display = "block";
  greeting.style.display = "block";
  response.style.display = "block";
  greeting.innerHTML =
    "Uwaaa! You found all my friends! Shala-zah! But there's one more clue, just for you!";
  response.innerHTML = "I sure do love puzzles!";
}

function hestublank() {
  hestu.style.display = "none";
  hestunametag.style.display = "none";
  greeting.style.display = "none";
  userresponse.style.display = "none";
  response.style.display = "none";
  clueBoxOn();
  clue1on();
}

function press() {
  switch (response.innerHTML) {
    case "Oh snap!":
      hestu2();
      break;
    case "Sure!":
      hestu3();
      break;
    case "Sweet! The developer that made this app is probably super cool.":
      hestublank();
      break;
    case "I sure do love puzzles!":
      hestu.style.display = "none";
      greeting.style.display = "none";
      response.style.display = "none";
      clue6on();
      break;
  }
}

// Turn clue, input, and submit button displays on.

function clueBoxOn() {
  clue.style.display = "block";
  codeinput.style.display = "block";
}

function clueBoxOff() {
  clue.style.displaly = "none";
  codeinput.style.display = "none";
}

// Individual clues on/off, onclick function changed to have correctcode parameter depending on clue#.

let x;

function clue1on() {
  x = 1;
  clue1.style.display = "block";
  submitbutton1.style.display = "block";
}

function clue1off() {
  clue1.style.display = "none";
  submitbutton1.style.display = "none";
}

function clue2on() {
  x = 2;
  clue2.style.display = "block";
  submitbutton2.style.display = "block";
}

function clue2off() {
  clue2.style.display = "none";
  submitbutton2.style.display = "none";
}

function clue3on() {
  x = 3;
  clue3.style.display = "block";
  submitbutton3.style.display = "block";
}

function clue3off() {
  clue3.style.display = "none";
  submitbutton3.style.display = "none";
}

function clue4on() {
  x = 4;
  clue4.style.display = "block";
  submitbutton4.style.display = "block";
}

function clue4off() {
  clue4.style.display = "none";
  submitbutton4.style.display = "none";
}

function clue5on() {
  x = 5;
  clue5.style.display = "block";
  submitbutton5.style.display = "block";
}

function clue5off() {
  clue5.style.display = "none";
  submitbutton5.style.display = "none";
}

function clue6on() {
  clue6.style.display = "block";
}

function giveNextClue() {
  switch (x) {
    case 1:
      clue1off();
      clue2on();
      korokOff();
      break;
    case 2:
      clue2off();
      clue3on();
      korokOff();
      break;
    case 3:
      clue3off();
      clue4on();
      korokOff();
      break;
    case 4:
      clue4off();
      clue5on();
      korokOff();
      break;
    case 5:
      clue5off();
      clueBoxOff();
      korokOff();
      hestuend();
      break;
  }
}

// Turn on korok and yahaha blocks when user has entered correct code.

function korokFound() {
  korok.style.display = "block";
  yahaha.style.display = "block";
  givenextclue.style.display = "block";
  yahaha.innerHTML = "Yahaha! You found me!";
  givenextclue.innerHTML = "Yay!";
}

function korokOff() {
  korok.style.display = "none";
  yahaha.style.display = "none";
  givenextclue.style.display = "none";
}

// On click, code will be checked and either display korok or return wrong answer alert.

function checkCode(correctcode) {
  let usercode = codeinput.value;

  if (usercode == correctcode) {
    incorrect.style.display = "none";
    korokFound();
  } else if (usercode.toLowerCase != correctcode) {
    incorrect.style.display = "block";
  }
}

addEventListener("DOMContentLoaded", documentLoaded);
