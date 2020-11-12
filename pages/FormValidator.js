
export class FormValidator{

  constructor(formElement, parameters) {
    this._formElement = formElement;
    this._formSelector = parameters.formSelector;
    this._inputSelector = parameters.inputSelector;
    this._inputValidClass = parameters.inputValidClass;
    this._inputErrorClass =parameters.inputErrorClass;
    this._submitButtonSelector = parameters.submitButtonSelector;
    this._inactiveButtonClass = parameters.inactiveButtonClass;
    this._activeButtonClass = parameters.activeButtonClass;
    this._errorClass = parameters.errorClass;
    this._inputTitle = parameters.inputTitle;
    this._inputUrl = parameters.inputUrl;
    this._inputName = parameters.inputName;
    this._inputStatus = parameters.inputStatus;
    this._addCardModal = parameters.addCardModal;
    this._editProfileModal = parameters.editProfileModal;
    this._subButtonForAddCard = parameters.subButtonForAddCard;
  }


   //Обработчик форм
  _formsHandler = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // Найдем все инпуты внутри формы
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
    this._inputsHandler()
  }


  _inputsHandler() {
    this._inputs.forEach((inputElement)=>{
      inputElement.addEventListener('input',()=>{
        this._buttonValidation(this._inputs,this._buttonSubmit);
        this._inputValidation(inputElement);

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

    // Убираем стили валидации
  cardCheckValidStyle(){

    if (this._inputTitle.classList.contains('modal__input_type_valid')){
      this._inputTitle.classList.remove('modal__input_type_valid')
    }
    if (this._inputUrl.classList.contains('modal__input_type_valid')) {
      this._inputUrl.classList.remove('modal__input_type_valid')
    }

    if (this._inputName.classList.contains('modal__input_type_valid')){
      this._inputName.classList.remove('modal__input_type_valid')
    }

    if (this._inputStatus.classList.contains('modal__input_type_valid')) {
      this._inputStatus.classList.remove('modal__input_type_valid')
    }

    if (this._inputTitle.classList.contains('modal__input_type_error')){
      this._inputTitle.classList.remove('modal__input_type_error');
      this._addCardModal.querySelector(`#modal__input-title-error`).textContent = '';
    }
    if (this._inputUrl.classList.contains('modal__input_type_error')){
      this._inputUrl.classList.remove('modal__input_type_error');
      this._addCardModal.querySelector(`#modal__input-url-error`).textContent = '';
    }

    if (this._inputName.classList.contains('modal__input_type_error')){
      this._inputName.classList.remove('modal__input_type_error');
      this._editProfileModal.querySelector(`#modal__input-name-error`).textContent = '';
    }
    if (this._inputStatus.classList.contains('modal__input_type_error')){
      this._inputStatus.classList.remove('modal__input_type_error');
      this._editProfileModal.querySelector(`#modal__input-status-error`).textContent = '';
    }

    this._subButtonForAddCard.disabled = true;
    this._subButtonForAddCard.classList.remove('modal__btn-undisabled')

  }
  //-----------------------------------------------------------

  enableValidation = () => {
      this._formsHandler()
    };
}


