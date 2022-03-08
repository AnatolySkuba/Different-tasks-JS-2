import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const formInput = {};

initForm();

function initForm() {
let storage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (storage) {
    Object.entries(storage).forEach(([name, value]) => {
      formInput[name] = value;
      feedbackForm.elements[name].value = value;
    }) 
    };
}

feedbackForm.addEventListener("input", throttle((evt) => {
  formInput[evt.target.name] = evt.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formInput))
}, 500));

const handleSubmit = evt => {
  evt.preventDefault();

  if (feedbackForm.elements.email.value === "" || feedbackForm.elements.message.value === "") {
  return alert("Please fill in all the fields!");
  }

  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  localStorage.removeItem("feedback-form-state");
  formInput.message = '';
  formInput.email = '';
  feedbackForm.elements.email.value = '';
  feedbackForm.elements.message.value = '';
};

feedbackForm.addEventListener("submit", handleSubmit);
