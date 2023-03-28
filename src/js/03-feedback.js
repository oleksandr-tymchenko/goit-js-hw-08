import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
let formData = {
    email: '',
    message: '',
};



form.addEventListener('input', throttle(onInputSetValues, 500));
form.addEventListener('submit', onFormSubmit);

let formFieldsValue = localStorage.getItem(STORAGE_KEY);

if (formFieldsValue) {
        const restoredData = JSON.parse(formFieldsValue);
        textarea.value = restoredData.message;
        input.value = restoredData.email;
        formData = restoredData;
}



function onInputSetValues(e) {
    formData[e.target.name] = e.target.value;
    
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


function onFormSubmit(e) {

    e.preventDefault();

    if (textarea.value === '' || input.value === '') {
        return;
    }
    console.dir(formData);
    e.target.reset();
    onSubmitClean();
}

function onSubmitClean() {
    
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
}


