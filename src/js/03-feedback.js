const _ = require('lodash');

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

emailEl.value = localStorage.getItem("feedback-form-state-email")
messageEl.textContent = localStorage.getItem("feedback-form-state-message")

messageEl.addEventListener("input", (event) => {
  _.throttle(localStorage.setItem("feedback-form-state-message", event.currentTarget.value.toString()), 500);
 });

emailEl.addEventListener("input", (event) => {
  _.throttle(localStorage.setItem("feedback-form-state-email", event.currentTarget.value.toString()), 500);
});

const handleClick = (event) => {
  console.log({ email: localStorage.getItem("feedback-form-state-email"), message: localStorage.getItem("feedback-form-state-message")});
  localStorage.removeItem("feedback-form-state-email");
  localStorage.removeItem("feedback-form-state-message");
  emailEl.value = '';
  messageEl.textContent = '';
};

buttonEl.addEventListener("click", handleClick);