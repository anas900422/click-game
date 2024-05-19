let score = 0;
const button = document.getElementById('click-button');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');

button.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    message.textContent = 'Good job! Keep clicking!';
    scoreDisplay.classList.add('jump');
    setTimeout(() => {
        scoreDisplay.classList.remove('jump');
    }, 300);
    setTimeout(() => {
        message.textContent = 'Click the button as fast as you can!';
    }, 1000);
});
