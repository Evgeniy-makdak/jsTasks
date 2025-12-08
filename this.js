let count = 0;

function addCount() {
    this.textContent = `Кликнули ${++count} раз(а)`;
}
document.querySelector('button').addEventListener('click', addCount);

function restartCount() {
    count = 0;
    document.querySelector('button').textContent = '0';
}
document.querySelectorAll('button')[1].addEventListener('click', restartCount);