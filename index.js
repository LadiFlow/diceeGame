var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Numbers from 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource2);

var adiWinss = "images/adiWins.jpg"
var ladinaWinss = "images/ladinaWins.jpg"
var itsaDraw = "images/draw.jpg"

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Adi WINS";
  document.querySelectorAll("img")[1].setAttribute("src", adiWinss);

} 
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Ladina WINS";
  document.querySelectorAll("img")[1].setAttribute("src", ladinaWinss);
}
else {
  document.querySelector("h1").innerHTML = "I'ts a DRAW";
  document.querySelectorAll("img")[1].setAttribute("src", itsaDraw);
}
