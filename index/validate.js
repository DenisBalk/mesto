
const object = {
  formSelector:'.modal__form',
  inputSelector: '.modal__input',
  inputValidClass: 'modal__input_type_valid',
  inputErrorClass: 'modal__input_type_error',
  submitButtonSelector: '.modal__btn-save',
  inactiveButtonClass: 'modal__btn-disabled',
  activeButtonClass: 'modal__btn-undisabled',
  errorClass: 'modal__error-visible'
}



function  buttonValidation(inputs,buttonSubmit,activeButtonClass,inactiveButtonClass) {
  const isFormValid = inputs.some((inputElement) => !inputElement.validity.valid);

  if (!isFormValid) {

    buttonSubmit.classList.add(activeButtonClass);
    buttonSubmit.classList.remove(inactiveButtonClass);
    buttonSubmit.disabled = false;
  } else {

    buttonSubmit.classList.remove(activeButtonClass);
    buttonSubmit.classList.add(inactiveButtonClass);
    buttonSubmit.disabled = true;

  }
};


function  inputValidation(inputElement, inputValidClass, inputErrorClass, errorClass, formElement) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  if (inputElement.validity.valid) {
    inputElement.classList.add(inputValidClass);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);

  } else {
    inputElement.classList.remove(inputValidClass);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);

  }
};

// Повесим обработчик на каждый импут
function inputsHandler(inputs,formElement, inputValidClass, inputErrorClass, errorClass, formElement,buttonSubmit,activeButtonClass,inactiveButtonClass) {


  inputs.forEach((inputElement)=>{
    inputElement.addEventListener('input',()=>{
      inputValidation(inputElement, inputValidClass, inputErrorClass, errorClass, formElement);
      buttonValidation(inputs,buttonSubmit,activeButtonClass,inactiveButtonClass);
    });
  });
};

//обработчик форм
function formsHandler(formSelector, inputSelector, submitButtonSelector, inputValidClass, inputErrorClass, errorClass, activeButtonClass,inactiveButtonClass) {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((formElement) => {
    
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    
const inputs = Array.from(formElement.querySelectorAll(inputSelector));
    
const buttonSubmit = formElement.querySelector(submitButtonSelector);
    
    inputsHandler(inputs,formElement, inputValidClass, inputErrorClass, errorClass, formElement,buttonSubmit,activeButtonClass,inactiveButtonClass)
  });
}

const enableValidation = ({formSelector,inputSelector, inputValidClass, inputErrorClass, submitButtonSelector,inactiveButtonClass, activeButtonClass, errorClass}) => {
  formsHandler(formSelector, inputSelector, submitButtonSelector, inputValidClass, inputErrorClass, errorClass, activeButtonClass,inactiveButtonClass)

};


enableValidation(object);
