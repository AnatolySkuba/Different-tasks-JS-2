const _ = require('lodash');

const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');

emailEl.value = localStorage.getItem("feedback-form-state-email")
messageEl.textContent = localStorage.getItem("feedback-form-state-message")

messageEl.addEventListener("input", (event) => {
  _.throttle(localStorage.setItem("feedback-form-state-message", event.currentTarget.value), 500);
 });

emailEl.addEventListener("input", (event) => {
  _.throttle(localStorage.setItem("feedback-form-state-email", event.currentTarget.value), 500);
});

const handleClick = (event) => {
  console.log("Email: ", localStorage.getItem("feedback-form-state-email"));
  console.log("Message: ", localStorage.getItem("feedback-form-state-message"));
  localStorage.removeItem("feedback-form-state-email");
  localStorage.removeItem("feedback-form-state-message");

};

buttonEl.addEventListener("click", handleClick);