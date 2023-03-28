import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');
const formData = {};
let formFieldsValue = {};

populateFormFields()

form.addEventListener('input', throttle(onInputSetValues, 500));
form.addEventListener('submit', onFormSubmit);

function onInputSetValues(e) {
    formData[e.target.name] = e.target.value;
    // console.log(formData);
    // if (formData.email === '' && formData.message === '') {
    //     return;  
    // }
   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}


function populateFormFields() {
    


    formFieldsValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // let formEmail = formFieldsValue.email;
    // let formMessage = formFieldsValue.message;
   

    // if (formFieldsValue) {
    //     textarea.value = formFieldsValue.message;
    //     input.value = formFieldsValue.email;

    // } 

}

function onFormSubmit(e) {

    e.preventDefault();

    // if (textarea.value === '' || input.value === '') {
    //     return;
    // }
    console.log(formFieldsValue);
    formFieldsValue = {};
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}