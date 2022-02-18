import throttle from 'lodash.throttle';

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

emailEl.value = localStorage.getItem("feedback-form-state-email")
messageEl.textContent = localStorage.getItem("feedback-form-state-message")

messageEl.addEventListener("input", throttle((event) => {
  localStorage.setItem("feedback-form-state-message", event.target.value.toString());
}, 500));
 
emailEl.addEventListener("input", throttle((event) => {
  localStorage.setItem("feedback-form-state-email", event.target.value.toString());
 }, 500));

const handleClick = (event) => {
  console.log({ email: localStorage.getItem("feedback-form-state-email"), message: localStorage.getItem("feedback-form-state-message")});
  localStorage.removeItem("feedback-form-state-email");
  localStorage.removeItem("feedback-form-state-message");
  emailEl.value = '';
  messageEl.textContent = '';
};

buttonEl.addEventListener("click", handleClick);