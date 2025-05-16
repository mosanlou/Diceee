   


    var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
    var player1 = randomNumber1; 
    var randomNumber1 = "dice" + randomNumber1 + ".png";
    randomNumber1= "./images/" + randomNumber1; 
    document.querySelector("img.img1").setAttribute("src", randomNumber1);

    var randomNumber2 = Math.floor(Math.random() * 6 ) + 1; 
    var player2 = randomNumber2; 
    var randomNumber2 = "dice" + randomNumber2 + ".png";
    randomNumber2= "./images/" + randomNumber2; 
    document.querySelector("img.img2").setAttribute("src" , randomNumber2); 

    if(player1 > player2){
      document.querySelector("h1").innerHTML = "Player 1 wins!"; 
    } else if (player1 < player2){
      document.querySelector("h1").innerHTML = "Player 2 Wins!"; 
    }else {
      document.querySelector("h1").innerHTML = "Draw!"; 
    }
    

   
    

   




 
