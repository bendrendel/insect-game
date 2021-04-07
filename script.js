const titleScreen = document.querySelector('.title-screen');
const selectScreen = document.querySelector('.select-screen');
const gameScreen = document.querySelector('.game-screen');
const playBtn = document.querySelector('.play-btn');
const insectBtns = document.querySelectorAll('.insect-btn');

playBtn.addEventListener('click', () => {
    titleScreen.classList.remove('show');
    titleScreen.classList.add('hide');
    selectScreen.classList.add('show');
});

insectBtns.forEach(insectBtn => {
    insectBtn.addEventListener('click', () => {
        // selectScreen.classList.remove('show');
        selectScreen.classList.add('hide');
        gameScreen.classList.add('show');
    })
});