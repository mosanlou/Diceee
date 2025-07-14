   


  // player 1 
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

var player_1 = randomNumber1 + randomNumber2; 


// Player 2 
var randomNumber3 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber3 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[2];

image1.setAttribute("src", randomImageSource);


var randomNumber4 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber4 + ".png";

document.querySelectorAll("img")[3].setAttribute("src", randomImageSource2);

var player_2 = randomNumber3 + randomNumber4; 


//If player 1 wins
if (player_1 > player_2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (player_2 > player_1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

   
    

   




 
