const counterValueEl = document.querySelector('#value');
let counterValue = 0;

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

decrementBtnEl.addEventListener('click', decrement);
incrementBtnEl.addEventListener('click', increment)


function decrement() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue
};

function increment() {
  counterValue += 1;
  counterValueEl.textContent = counterValue
};