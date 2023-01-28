const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

init();

function init() {
  btnStop.setAttribute('disabled', true);
}

btnStart.addEventListener('click', () => {
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    let nextColor = getRandomHexColor();
    bodyEl.style.backgroundColor = nextColor;
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStop.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
