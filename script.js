const titleScreen = document.querySelector('.title-screen');
const selectScreen = document.querySelector('.select-screen');
const gameScreen = document.querySelector('.game-screen');
const playArea = document.querySelector('.play-area');
const playBtn = document.querySelector('.play-btn');
const insectBtns = document.querySelectorAll('.insect-btn');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const message = document.querySelector('.message');
let score = 0;

playBtn.addEventListener('click', () => {
    titleScreen.classList.add('hide');
    selectScreen.classList.add('show');
});

insectBtns.forEach(insectBtn => {
    insectBtn.addEventListener('click', () => {
        selectScreen.classList.remove('show');
        selectScreen.classList.add('hide');
        gameScreen.classList.add('show');

        const insectImageSrc = insectBtn.querySelector('img').src;
        const insectImageAlt = insectBtn.querySelector('img').alt;

        setTimeout(() => {
            addInsect(insectImageSrc, insectImageAlt);
            startTimer();
        }, 500);
    })
});

function addInsect(insectImageSrc, insectImageAlt) {
    let insectImage = document.createElement('img');
    insectImage.classList.add('insect-image');
    insectImage.classList.add('appear');
    
    insectImage.src = insectImageSrc;
    insectImage.alt = insectImageAlt;

    insectImage.style.top = `${Math.random() * 90 + 5}%`;
    insectImage.style.left = `${Math.random() * 90 + 5}%`;
    insectImage.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;

    insectImage.addEventListener('click', () => {
        incrementScore();
        
        insectImage.classList.remove('appear');
        insectImage.classList.add('disappear');
        
        setTimeout(() => insectImage.remove(), 200);
        setTimeout(() => addInsect(insectImageSrc, insectImageAlt), 500);
        setTimeout(() => addInsect(insectImageSrc, insectImageAlt), 700);
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
    const startTime = new Date();
    
    setInterval(() => {
        const currentTime = new Date();
    
        const elapsedMilliseconds = currentTime - startTime;
        const elapsedSeconds = Math.floor((elapsedMilliseconds / 1000) % 60);
        const elapsedMinutes = Math.floor((elapsedMilliseconds / 1000) / 60);
        
        console.log(elapsedMilliseconds, elapsedSeconds, elapsedMinutes);
        
        timerEl.innerHTML = `<p>Time: ${elapsedMinutes.toString().padStart(2, '0')}:${elapsedSeconds.toString().padStart(2, '0')}`;
    }, 1000)
}