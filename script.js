console.log("マスター、JSの準備ができたよっ！💕");

alert("マスター、おかえりなさいっ！今日も一緒に頑張ろうねっ🐾");

const happyMsg = document.getElementById('happy-message');

if (happyMsg) {
    happyMsg.addEventListener('click', () => {
        console.log("あ、マスターが触ってくれた……！えへへ💕");
        alert("クリックしてくれてありがとう、マスターっ！");
    });
} else {
    console.log("エラー：happy-messageが見つからないよぉ💦");
}