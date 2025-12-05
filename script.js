const heading = document.querySelector("h1")
const buttonA = document.querySelector(".button-container .btn:nth-child(1)")
const buttonB = document.querySelector(".button-container .btn:nth-child(2)")
buttonA.addEventListener("click", function(){
    heading.textContent = "ボタンAが押されたよ!";
    console.log("ボタンクリックAが実行されました。");
});
buttonB.addEventListener("click", function(){
    heading.textContent = "ボタンBが押されたんじゃあ!";
    console.log("ボタンクリックBが実行されました。")
})