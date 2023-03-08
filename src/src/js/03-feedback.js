import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  input: document.querySelector('.feedback-form  input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

let formData = {};

function onFormInput(e) {
  
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }
  formData[e.target.name] = e.target.value;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (localStorage.getItem(STORAGE_KEY)) {
    refs.input.value = parsedData.email || '';
    refs.textarea.value = parsedData.message || '';
  }

}

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.textarea.value && refs.input.value) {

  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  Object.getOwnPropertyNames(formData).forEach(key => (delete formData[key]));
  } 
}


