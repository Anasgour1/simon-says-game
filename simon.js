let gameSeq=[];
let userSeq=[];

let btns = ["orange", "red", "blue", "green"]

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
   if(started == false) {
    console.log("game started");
    started = true;

   levelUp();
}
});

// yaha hamara firt step complete ho gaya 
// jo tha ki  game start karna hain
function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function() {
        btn.classList.remove("gameflash");
    }, 250);
}


function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}




function levelUp() {
    userSeq = [];
    level++
  h3.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
//   console.log(randColor);
//   console.log(randBtn);
//   console.log(randIdx);
 gameSeq.push(randColor);
 console.log(gameSeq);

  gameFlash(randBtn);
}

// yaha pe hamara step two complete ho gya 
// jisme button ko flash karan tha randomli

function checkAns(idx) {

    // let idx = level -1;

    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
          setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start `;
        reset();
    }
}



function btnPress(idx) {
   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id")
   userSeq.push(userColor);

   checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll (".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}