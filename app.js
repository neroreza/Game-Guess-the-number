let stage1 = document.querySelector(".stage1");
let stage2 = document.querySelector(".stage2");
let txtEnter = document.querySelector(".txt-enter");
let startBtn = document.querySelector(".start");
let maxNum = document.querySelector(".maxNum");
let txtChanceNum = document.querySelector(".txt-chanceNum");
let chanceNum = document.querySelector(".chanceNum");
let guessedNumber = document.querySelector(".guessedNumber");
let guessBtn = document.querySelector(".guess");
let guide = document.querySelector(".guide");
let lost = document.querySelector(".lost");
let win = document.querySelector(".win");
let rstBtn = document.querySelector(".rstBtn");

let max, target, totalChance;
startBtn.addEventListener("click", startGame);
function startGame() {
  // stage2.classList.toggle('hidden');
  max = Number(maxNum.value);
  if (max > 10) {
    target = Math.floor(Math.random() * (max + 1));
    totalChance = Math.floor(Math.log2(max)) + 1;
    chanceNum.textContent = totalChance;
    stage1.classList.toggle("hidden");
    stage2.classList.toggle("hidden");
    guide.classList.toggle("hidden");
    console.log(target);
  } else {
    txtEnter.textContent = "عدد وارد شده باید بیشتر از 10 باشد.";
    txtEnter.classList.add("red-color");
  }
}

let showGuess = document.createElement("p");
let node = document.createTextNode("حدس های شما :");
showGuess.appendChild(node);
let br = document.createElement("br");
showGuess.appendChild(br);
showGuess.classList.add("cont1")
// console.log(showGuess);
stage2.appendChild(showGuess);
guessBtn.addEventListener("click", guessStart);

let counter = 0;
function guessStart() {
  let guessed = Number(guessedNumber.value);
  if (guessed == target) {
    stage2.classList.toggle("hidden");
    guide.classList.toggle("hidden");
    win.classList.toggle("hidden");
  } else {
    totalChance -= 1;
    if (totalChance == 0) {
      stage2.classList.toggle("hidden");
      guide.classList.toggle("hidden");
      lost.classList.toggle("hidden");
    }
    chanceNum.textContent = totalChance;
    if(guessed > target){
        showGuess.innerHTML += `<span class="red-color wrongs">${guessed}</span>`;
        counter +=1;
        if(counter==6){
            counter = 0;
            showGuess.innerHTML += `<br>`;
        }
    }
    else if(guessed < target){
        showGuess.innerHTML += `<span class="blue-color wrongs">${guessed}</span>`;
        counter +=1;
        if(counter==6){
            counter = 0;
            showGuess.innerHTML += `<br>`;
        }
    }
    
    
    // let wrong = createElement("p");
    // let wrongNode = document.createTextNode("reza");
    // wrong.textContent = guessed;
    // showGuess.appendChild(wrong);
    // console.log(showGuess);
  }
}

rstBtn.addEventListener("click", restart);
function restart() {
  location.reload();
}
