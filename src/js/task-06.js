const inputEl = document.querySelector('#validation-input');

function onInputBlur(event) {
    const inputLength = event.currentTarget.value.length;
    const requiredLength = +event.currentTarget.dataset.length;

    if (inputLength === requiredLength) {
      inputEl.classList.add('valid');
      inputEl.classList.remove('invalid');
    } else {
      inputEl.classList.add('invalid');
      inputEl.classList.remove('valid');
    }
};

inputEl.addEventListener('blur', onInputBlur);