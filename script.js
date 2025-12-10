const heading = document.querySelector("h1")
const buttonA = document.querySelector(".button-container .btn:nth-child(1)")
let buttonB = document.querySelector(".button-container .btn:nth-child(2)")

function handleButtonBClick(){
    heading.textContent = "ボタンBが押されたんじゃあ!";
    console.log("ボタンクリックBが実行されました。");
}

buttonA.addEventListener("click", function(){
    if (buttonB) {
        heading.textContent ="ボタンBは消えたよ!";
         buttonB.removeEventListener("click", handleButtonBClick);
        buttonB.remove();
        buttonB = null; 
        console.log("ボタンBが削除されました。");
    }
     else {
        heading.textContent = "ボタンBは、もうないよ。"
    }
});
buttonB.addEventListener("click", handleButtonBClick);

const favoritespot = ["田ノ浦漁港", "吉野川", "千早赤阪マス釣り場"]
const huntercubInfo = ["CT125", "パールオーガニックグリーン", "2022", "カスタム済み"]

console.log(favoritespot);
console.log(huntercubInfo);

favoritespot.push("淡水魚水族館")
console.log("【1. push後の配列】", favoritespot);

const removedspot = favoritespot.pop();
console.log("【2. popで取り出された要素】", removedspot);
console.log("【2. pop後の配列】", favoritespot);