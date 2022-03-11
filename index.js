// var randomNumber1 = (Math.floor(Math.random()*6)+1);
// var randomDiceImage= "dice"+ randomNumber1+".png";
// var randomDiceSource = "images/" + randomDiceImage;

var winner;

function randomNumGen(){

  return (Math.floor(Math.random()*6)+1);

}

function append(dicevalue){
  return "images/dice"+dicevalue+".png";
}

var dice1value=randomNumGen();
var dice1= append(dice1value);
document.querySelector(".img1").setAttribute("src",dice1);

var dice2value=randomNumGen();
var dice2=append(dice2value);
document.querySelector(".img2").setAttribute("src",dice2);

if(dice1value>dice2value)
{
  winner ="🚩Player 1 wins!";
}
else if(dice2value>dice1value){
  winner="Player 2 wins!🚩";
}

else {
  winner= "It is a tie!";
}

document.querySelector("h1").innerHTML = winner;







// alert("working");
