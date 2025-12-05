const heading = document.querySelector("h1")
const buttonA = document.querySelector(".button-container .btn:nth-child(1)")
const buttonB = document.querySelector(".button-container .btn:nth-child(2)")
buttonA.addEventListener("click", function(){
    const buttonB = document.querySelector(".button-container .btn:nth-child(2)");
    if (buttonB) {
        heading.textContent ="ボタンBは消えたよ!";
        buttonB.remove();
        console.log("ボタンBが削除されました。");
    } else {
        heading.textContent = "ボタンBは、もうないよ。"
    }
});
buttonB.addEventListener("click", function(){
    heading.textContent = "ボタンBが押されたんじゃあ!";
    console.log("ボタンクリックBが実行されました。")
})