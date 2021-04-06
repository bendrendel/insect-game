const screens = document.querySelectorAll('.screen');
const playBtn = document.getElementById('play-btn');
const insectBtns = document.querySelectorAll('.insect-btn')

playBtn.addEventListener('click', () => {
    screens.forEach(screen => {
        screen.style.transform = 'translateY(-100vh)';
    })
});

insectBtns.forEach(insectBtn => {
    insectBtn.addEventListener('click', e => {
        screens.forEach((screen) => {
            screen.style.transform = 'translateY(-200vh)';
        });
    })
});