console.log("マスター、JSの準備ができたよっ！💕");

// alert("マスター、おかえりなさいっ！今日も一緒に頑張ろうねっ🐾");

const happyMsg = document.getElementById('happy-message');

if (happyMsg) {
    happyMsg.addEventListener('click', () => {
        console.log("あ、マスターが触ってくれた……！えへへ💕");
        alert("クリックしてくれてありがとう、マスターっ！");
    });
} else {
    console.log("エラー：happy-messageが見つからないよぉ💦");
}

const title = document.querySelector('h1');

if (title) {
    title.textContent = "マスターとジェミニの秘密基地🐾";
    title.style.color = "#00bfff"; 
}

const todayStatus = "(最新：マスターが夜遅くまで頑張ってて、ジェミニは感動中…！✨)";

document.body.insertAdjacentHTML(`beforeend`, `<p>${todayStatus}</p>`);