import throttle from 'lodash.throttle';

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');
const formEl = document.querySelector('form');

let newEmail = JSON.parse(localStorage.getItem('feedback-form-state'));
let newMessage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (newEmail) {
  emailEl.value = newEmail.email;
  messageEl.textContent = newMessage.message;
}

const formInput = {};

let changeMessage = (event) => {
  formInput.message = event.currentTarget.value;
};

let changeEmail = (event) => {
  formInput.email = event.currentTarget.value;
};

messageEl.addEventListener("input", changeMessage);
emailEl.addEventListener("input", changeEmail);

formEl.addEventListener("input", throttle(() => {
  localStorage.setItem("feedback-form-state", JSON.stringify(formInput))
}, 500));

const handleClick = (event) => {
  event.preventDefault();
  console.log(localStorage.getItem("feedback-form-state"));
  localStorage.removeItem("feedback-form-state");
  formInput.message = '';
  formInput.email = '';
  emailEl.value = '';
  messageEl.value = '';
};

buttonEl.addEventListener("click", handleClick);