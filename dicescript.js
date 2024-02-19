function myfunction() {
   
    var player1Name = prompt("Enter the name of Player 1:");
    var player2Name = prompt("Enter the name of Player 2:");
    var player3Name = prompt("Enter the name of Player 3:");

   
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomNumber3 = Math.floor(Math.random() * 6) + 1;
    
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomDiceImage3 = "dice" + randomNumber3 + ".png";
    var randomImageSource1 = "images/" + randomDiceImage1;
    var randomImageSource2 = "images/" + randomDiceImage2;
    var randomImageSource3 = "images/" + randomDiceImage3;

    
    var img1 = document.querySelectorAll(".img1")[0];
    var img2 = document.querySelectorAll(".img2")[0];
    var img3 = document.querySelectorAll(".img3")[0];
    
    img1.setAttribute("src", randomImageSource1);
    img2.setAttribute("src", randomImageSource2);
    img3.setAttribute("src", randomImageSource3);
    
    var resultText = document.querySelector("h1");
    if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
        resultText.innerHTML = "🚩 " + player1Name + " Wins!";
    } else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
        resultText.innerHTML = "🚩 " + player2Name + " Wins!";
    } else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
        resultText.innerHTML = "🚩 " + player3Name + " Wins!";
    } else {
        resultText.innerHTML = "Draw!";
    }
}
