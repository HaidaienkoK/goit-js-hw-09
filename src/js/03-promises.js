import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const delayEl = document.querySelector("[name='delay']");
const stepEl = document.querySelector("[name='step']");
const amountEl = document.querySelector("[name='amount']");
const promisesBtn = document.querySelector('button');

promisesBtn.addEventListener('click', clickBtn);

function clickBtn(event) {
  event.preventDefault();
  let delay = Number(delayEl.value) - Number(stepEl.value);
  for (let position = 1; position <= amountEl.value; position++) {
    delay += Number(stepEl.value);
    createPromise(position, delay);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}
