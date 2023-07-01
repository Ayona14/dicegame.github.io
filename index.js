var randomNumber1= Math.floor(Math.random()* 6)+ 1;
var randomDiceImage= "dice" + randomNumber1 + ".png";
var randomDiceSource="images/" + randomDiceImage;
var images1=document.querySelectorAll("img")[0];
images1.setAttribute("src" , randomDiceSource);

var randomNumber2= Math.floor(Math.random() * 6)+1;
let randomDiceImage2="dice"+ randomNumber2 + ".png";
let randomDiceSource2="images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="player 1 wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML= "player 2 wins!";
}
else if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML="its a Tie";
}
