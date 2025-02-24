const formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector('input[type="email"]');
const messageEl = formEl.querySelector('textarea');

const localStorageKey = 'feedback-form-state';

formEl.addEventListener('input', event => {
  formData.email = emailEl.value.trim();
  formData.message = messageEl.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const savedData = localStorage.getItem(localStorageKey);
console.log(savedData);
if (savedData !== null) {
  const parsedData = JSON.parse(savedData);

  emailEl.value = parsedData.email;
  messageEl.value = parsedData.message;
  formData.email = parsedData.email;
  formData.message = parsedData.message;
}

formEl.addEventListener('submit', event => {
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    formEl.reset();
    formData.email = '';
    formData.message = '';
  }
});
