const heading = document.querySelector("h1")
const buttonA = document.querySelector(".button-container .btn:nth-child(1)")
const buttonB = document.querySelector(".button-container .btn:nth-child(2)")
buttonA.addEventListener("click", function(){
    if (buttonB) {
        heading.textContent ="ボタンBは消えたよ!";
        buttonB.remove();
        console.log("ボタンBが削除されました。");
        buttonB.removeEventListener("click", handleButtonBClick);
            heading.textContent = "ボタンBが押されたんじゃあ!";
            console.log("ボタンクリックBが実行されました。")
        
    } else {
        heading.textContent = "ボタンBは、もうないよ。"
    }
});
buttonB.addEventListener("click", handleButtonBClick)
    heading.textContent = "ボタンBが押されたんじゃあ!";
    console.log("ボタンクリックBが実行されました。");
