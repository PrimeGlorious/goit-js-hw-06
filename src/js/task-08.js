const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
event.preventDefault();

const elements = event.currentTarget.elements
const email = elements.email.value;
const password = elements.password.value;

if (email === '' || password === '') {
alert('All fields are required!');
return;
  };

const formData = {
email,
password,
};

console.log(formData);

formEl.reset();
});