const btn = document.querySelector("#btn");

let nowCoinExist = false;

btn.addEventListener("click", flip);

function flip() {
    if (nowCoinExist == true) {
    resetImg();
    }
    const randnum = Math.random();
    const coin = document.createElement("img");
    coin.id = "coinImg";
    if (randnum < 0.5) {
        coin.src = "Image/Head.png";
        console.log("Head!");
    } else{
        coin.src = "Image/Tail.png";
        console.log("Tail!");
    }
    document.body.appendChild(coin);
    nowCoinExist = true;
}

function resetImg() {
    const coin = document.querySelector("#coinImg");
    coin.remove();
}