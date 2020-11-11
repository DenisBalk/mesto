import { object } from './Constants.js';

export class FormValidator{

  constructor(formElement, parameters) {
    this._formElement = formElement;
    this._formSelector = parameters.formSelector;
    this._inputSelector = parameters.inputSelector;
    this._inputValidClass = parameters.inputValidClass;
    this._inputErrorClass =parameters.inputErrorClass;
    this._submitButtonSelector =parameters.submitButtonSelector;
    this._inactiveButtonClass = parameters.inactiveButtonClass;
    this._activeButtonClass =parameters.activeButtonClass;
    this._errorClass =parameters.errorClass;
  }

   //Обработчик форм
  _formsHandler = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // Найдем все инпуты внутри формы
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
    this._inputsHandler(this._inputs,this._buttonSubmit, this._inputValidClass, this._inputErrorClass, this._errorClass, this._formElement,this._activeButtonClass,this._inactiveButtonClass)
  }


  _inputsHandler() {
    this._inputs.forEach((inputElement)=>{
      inputElement.addEventListener('input',()=>{
        this._buttonValidation(this._inputs,this._buttonSubmit,this._activeButtonClass,this._inactiveButtonClass);
        this._inputValidation(inputElement, this._inputValidClass, this._inputErrorClass, this._errorClass);
      });
    });
  };


  _buttonValidation() {
    const isFormValid = this._inputs.some((inputElement) => !inputElement.validity.valid);
      if (!isFormValid) {
        this._buttonSubmit.classList.add(this._activeButtonClass);
        this._buttonSubmit.classList.remove(this._inactiveButtonClass);
        this._buttonSubmit.disabled = false;
      } else {
        this._buttonSubmit.classList.remove(this._activeButtonClass);
        this._buttonSubmit.classList.add(this._inactiveButtonClass);
        this._buttonSubmit.disabled = true;
      }
  }

  // //Проверим правильность инпутов
  _inputValidation(inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    if (inputElement.validity.valid) {
      inputElement.classList.add(this._inputValidClass);
      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.textContent = '';
      this._errorElement.classList.remove(this._errorClass);
    } else {
      inputElement.classList.remove(this._inputValidClass);
      inputElement.classList.add(this._inputErrorClass);
      this._errorElement.textContent = inputElement.validationMessage;
      this._errorElement.classList.add(this._errorClass);
    }
  };

  enableValidation = () => {
      this._formsHandler()
    };
}


