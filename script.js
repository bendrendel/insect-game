const titleScreen = document.querySelector('.title-screen');
const selectScreen = document.querySelector('.select-screen');
const gameScreen = document.querySelector('.game-screen');
const playArea = document.querySelector('.play-area');
const playBtn = document.querySelector('.play-btn');
const insectBtns = document.querySelectorAll('.insect-btn');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const message = document.querySelector('.message');
let insectImageSrc;
let insectImageAlt;
let score = 0;
let startTime;

playBtn.addEventListener('click', () => {
    titleScreen.classList.add('hide');
    selectScreen.classList.add('show');
});

insectBtns.forEach(insectBtn => {
    insectBtn.addEventListener('click', () => {
        selectScreen.classList.remove('show');
        selectScreen.classList.add('hide');
        gameScreen.classList.add('show');
        insectImageSrc = insectBtn.querySelector('img').src;
        insectImageAlt = insectBtn.querySelector('img').alt;
        setTimeout(() => {
            addInsect();
            startTimer();
        }, 500);
    })
});

function addInsect() {
    let insectImage = document.createElement('img');
    insectImage.src = insectImageSrc;
    insectImage.alt = insectImageAlt;
    insectImage.classList.add('insect-image');
    insectImage.classList.add('appear');
    insectImage.style.top = `${Math.random() * 90 + 5}%`;
    insectImage.style.left = `${Math.random() * 90 + 5}%`;
    insectImage.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;

    insectImage.addEventListener('click', () => {
        insectImage.classList.remove('appear');
        insectImage.classList.add('disappear');
        setTimeout(() => insectImage.remove(), 200);
        setTimeout(() => addInsect(), 500);
        setTimeout(() => addInsect(), 700);

        incrementScore();
    });

    playArea.append(insectImage);
}

function incrementScore() {
    score++;
    scoreEl.innerHTML = '';
    scoreEl.innerHTML = `<p id="score">Score: ${score.toString()}</p>`;

    if (score === 20) {
        message.classList.add('show');
    }
}

function startTimer() {
    startTime = new Date();
    setInterval(() => {
        const currentTime = new Date();
        const elapsedMilliseconds = currentTime - startTime;
        const elapsedSeconds = Math.floor((elapsedMilliseconds / 1000) % 60);
        const elapsedMinutes = Math.floor((elapsedMilliseconds / 1000) / 60);
        timerEl.innerHTML = `<p>Time: ${elapsedMinutes.toString().padStart(2,'0')}:${elapsedSeconds.toString().padStart(2,'0')}`;
    }, 1000)
}