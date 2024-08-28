var randomNumber1 = Math.floor((Math.random()*6)+1);
var dice1_random = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", dice1_random);


var randomNumber2 = Math.floor((Math.random()*6)+1);
var dice2_random = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", dice2_random);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 has Won!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "🚩Player 2 has Won!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}