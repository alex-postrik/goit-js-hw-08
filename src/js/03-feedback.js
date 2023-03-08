var throttle = require('lodash.throttle')

const STORAGE_KEY = "feedback-form-state";
const formEl = document.querySelector(".feedback-form");

// const formData = {};
reloadMemory ();

formEl.addEventListener("input", throttle(onSubmitFormInput, 500));
function onSubmitFormInput (event) {
    let localStorageRequer = localStorage.getItem(STORAGE_KEY);
    localStorageRequer = localStorageRequer ? JSON.parse(localStorageRequer) : {};
    localStorageRequer[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(localStorageRequer))
// formData[event.target.name] = event.target.value;
// localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

  // const formDataEl = new FormData(formEl);
  // formDataEl.forEach((name, value)=> console.log("6🚀7", name, value));
};

formEl.addEventListener("submit", onSubmitForm);
function onSubmitForm (event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY)};

  const formDataEl = new FormData(formEl);
  formDataEl.forEach((name, value)=> console.log("6🚀7", name, value));
  
// function reloadMemory () {
//   const datalocalStorage = localStorage.getItem(STORAGE_KEY);
//   const parsedDatalocalStorage = JSON.parse(datalocalStorage);  
//   if (parsedDatalocalStorage) {  
//     Object.entries(parsedDatalocalStorage).forEach(([name, value]) => {
//       formEl.elements[name].value = value;
//       formData[name] = value;
//     });
//   }
// }
function reloadMemory () {
  const datalocalStorage = localStorage.getItem(STORAGE_KEY);
  const parsedDatalocalStorage = JSON.parse(datalocalStorage);
  console.log("localstorage", parsedDatalocalStorage);
  if (parsedDatalocalStorage) {  
    Object.entries(parsedDatalocalStorage).forEach(([name, value]) => {
      console.log("🚀value form", formEl.elements[name].value = value);
      console.log("🚀entries", name, value);
      // console.log("🚀reload", formData[name] = value)
    });
  } 
};
// console.log("Object", formData);