var gameArr = ["r", "p", "s"];
var point1 = 0;
var point2 = 0;
var winGame1 = document.querySelector("#winGame1");
var winGame2 = document.querySelector("#winGame2");
var gamePoint1 = document.querySelector("#gamePoint1");
var gamePoint2 = document.querySelector("#gamePoint2");
var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var cardName1 = document.querySelector("#cardName1");
var cardName2 = document.querySelector("#cardName2");

var randomNum = arr => arr[Math.floor(Math.random() * gameArr.length)];

function gameStart(e) {
   
    if (gameArr.indexOf(user) === -1) {
      alert("Please choose 'R S P' button");
      return;
   }
   
   var user = e.key;
   var comp = randomNum(gameArr);

   card1.src = `./img/${user}.png`;
   card2.src = `./img/${comp}.png`;

   if (user === "r" && comp === "s") {
      // console.log("User Win!!!");

      point1++;
      gamePoint1.innerHTML = `Score: ${point1}`;
      winGame1.innerHTML = "Win";
      winGame2.innerHTML = "Lost";
      cardName1.innerHTML = "Rock";
      cardName2.innerHTML = "Scissors";
   } else if (user === "s" && comp === "p") {
      // console.log("User Win!!!");

      point1++;
      gamePoint1.innerHTML = `Score: ${point1}`;
      winGame1.innerHTML = "Win";
      winGame2.innerHTML = "Lost";
      cardName1.innerHTML = "Scissors";
      cardName2.innerHTML = "Paper";
   } else if (user === "p" && comp === "r") {
      // console.log("User Win!!!");

      point1++;
      gamePoint1.innerHTML = `Score: ${point1}`;
      winGame1.innerHTML = "Win";
      winGame2.innerHTML = "Lost";
      cardName1.innerHTML = "Paper";
      cardName2.innerHTML = "Rock";
   } else if (user === "r" && comp === "r") {
      console.log("Draw - Draw");

      winGame1.innerHTML = "Draw";
      winGame2.innerHTML = "Draw";
      cardName1.innerHTML = "Rock";
      cardName2.innerHTML = "Rock";
   } else if (user === "p" && comp === "p") {
      console.log("Draw - Draw");

      winGame1.innerHTML = "Draw";
      winGame2.innerHTML = "Draw";
      cardName1.innerHTML = "Paper";
      cardName2.innerHTML = "Paper";
      
   } else if (user === "s" && comp === "s") {
      console.log("Draw - Draw");

      winGame1.innerHTML = "Draw";
      winGame2.innerHTML = "Draw";
      cardName1.innerHTML = "Scissors";
      cardName2.innerHTML = "Scissors";
      
   } else if (user === "s" && comp === "r") {

      point2++;
      gamePoint2.innerHTML = `Score: ${point2}`;
      winGame1.innerHTML = "Lost";
      winGame2.innerHTML = "Win";
      cardName1.innerHTML = "Scissors";
      cardName2.innerHTML = "Rock";
   } else if (user === "p" && comp === "s") {

      point2++;
      gamePoint2.innerHTML = `Score: ${point2}`;
      winGame1.innerHTML = "Lost";
      winGame2.innerHTML = "Win";
      cardName1.innerHTML = "Paper";
      cardName2.innerHTML = "Scissors";
   } else {

      point2++;
      gamePoint2.innerHTML = `Score: ${point2}`;
      winGame1.innerHTML = "Lost";
      winGame2.innerHTML = "Win";
      cardName1.innerHTML = "Rock";
      cardName2.innerHTML = "Paper";

   }
}

window.onkeydown = gameStart;
