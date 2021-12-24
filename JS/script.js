const btn = document.querySelector("#btn");
const showBtn = document.querySelector("#showBtn");
const rstBtn = document.querySelector("#rstBtn");
const feedbackLog = document.querySelector("#feedbackLog");
const sonDeung = document.querySelector("#SonDeung");

let nowCoinExist = false;
let flipStack = 0;

btn.addEventListener("click", flip);
showBtn.addEventListener("click", showResult);
rstBtn.addEventListener("click", reset);

function flip() {
    if (nowCoinExist == true) {
    resetImg();
    }
    const randnum = Math.random();
    const coin = document.createElement("img");
    coin.id = "coinImg";
    if (randnum < 0.5) {
        coin.src = "Image/Head.png";
        //console.log("Head!");
    } else{
        coin.src = "Image/Tail.png";
        //console.log("Tail!");
    }
    document.body.appendChild(coin);
    nowCoinExist = true;
    announceFlipStack();
}

function resetImg() {
    const coin = document.querySelector("#coinImg");
    coin.remove();
}

function announceFlipStack() {
    flipStack++;
    feedbackLog.innerText = `${flipStack} Flip!`;
}

function showResult() {
    sonDeung.style.transform = "rotate(90deg)";
}

function reset() {
    flipStack = 0;
    feedbackLog.innerText = "";
    resetImg();
    nowCoinExist = false;
    sonDeung.style.transform = "translateX(-50%)";
}