var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomimage1 = "images/dice" + randomNumber1 + ".png";
var randomimage2 = "images/dice" + randomNumber2 + ".png";

var randomimage1src = document.querySelectorAll("img")[0];
randomimage1src.setAttribute("src", randomimage1);

var randomimage2src = document.querySelectorAll("img")[1];
randomimage2src.setAttribute("src", randomimage2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins..!";
}
else if (randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Match Tie..! Refresh Again!";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 Wins..!";
}