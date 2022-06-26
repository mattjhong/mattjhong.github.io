//treasure hunt practice
// variable for treasure is a random number
// variable for bomb is a random number


let treasureWin = Math.floor(Math.random() * 9);
let treasureLose = Math.floor(Math.random() * 9);
if (treasureWin === treasureLose) {
  treasureWin = Math.floor(Math.random() * 9);
}

const treasure = location => {
  if (location === treasureWin) {
    document.getElementById(location).innerHTML = "🔮";
    setTimeout(function () {
      alert("YOU WIN");
    }, 150);
  } else if (location === treasureLose) {
    document.getElementById(location).innerHTML = "🦈";
    setTimeout(function () {
      alert("GAME OVER");
    }, 150);
  } else {
    document.getElementById(location).innerHTML = "🐚";
  }
};

let count = 0;
function myFunction() {
  count+=1;
  document.getElementById("no").innerHTML = count;

 }
