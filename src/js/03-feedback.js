import throttle from 'lodash.throttle';

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');
const formEl = document.querySelector('form');

const newEmail = JSON.parse(localStorage.getItem('feedback-form-state'));
const newMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (newEmail) {
  emailEl.value = newEmail.email;
  messageEl.textContent = newMessage.message;
}

let message = '';
let email = '';

let changeMessage = (event) => {
  message = event.currentTarget.value.toString();
};

let changeEmail = (event) => {
  email = event.currentTarget.value.toString();
};

messageEl.addEventListener("input", changeMessage);
emailEl.addEventListener("input", changeEmail);

formEl.addEventListener("input", throttle(() => {
  localStorage.setItem("feedback-form-state", JSON.stringify({email, message}))
}, 500));

const handleClick = (event) => {
  console.log({ email: localStorage.getItem("feedback-form-state-email"), message: localStorage.getItem("feedback-form-state-message")});
  localStorage.removeItem("feedback-form-state");
  emailEl.value = '';
  messageEl.textContent = '';
};

buttonEl.addEventListener("click", handleClick);