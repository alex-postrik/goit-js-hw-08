import throttle from 'lodash.throttle';


const formRef = document.querySelector('.feedback-form');

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(validateForm, 500));

const STORAGE_KEY = 'feedback-form-state';

populateText();

function onFormSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const finalData = {};
  for (const [key, value] of formData.entries()) {
    if (!value) {
      alert('❌ Всі поля повинні бути заповнені!!');
      return;
    }
    finalData[key] = value;
  }
  console.log(finalData);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function validateForm(event) {
  const { name, value } = event.target;
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData) {
    const formData = {
      ...parsedData,
      [name]: value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  } else {
    const formData = { [name]: value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
}

function populateText() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData) {
    const inputNames = Object.keys(parsedData);
    inputNames.forEach(inputName => {
      const input = formRef.elements[inputName];
      input.value = parsedData[inputName];
    });
  }
}


// //////////////////////////////////////////////////
// const dataBase = {
//   email: '',
//   message: '',
// };

// function validateForm(e) {
//   const { name, value } = e.target;
//   dataBase[name] = value;
//   localStorage.setItem('feedback-form-state', JSON.stringify(dataBase));
// }

// getDataBase();

// function getDataBase() {
//   const parsedData = JSON.parse(STORAGE_KEY);
//   if (parsedData) {
//     ref.emailRef.value = parsedData.email;
//     ref.messageRef.value = parsedData.message;
//   }
// }

// ///////////////////////////////////////