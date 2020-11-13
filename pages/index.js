//ПОДКЛЮЧАЕМ ВНЕШНИЕ ФАЙЛЫ________________________________________
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { object, validationConfig } from './Constants.js';
import { openModalWindow, closeModalWindow } from './Utils.js';
//________________________________________________________________


//ОБЪЯВЛЯЕМ ФУНКЦИИ________________________________________________


//Сохранение при добавлении карточки
function profileAddCardHandler(e) {

  const newCardForGenerate = new Card(object.cardTemplate,{name:object.inputTitle.value, link:object.inputUrl.value});

  const newCardElement = newCardForGenerate.generateCard();

  object.addCardModal.querySelector('.modal__form').reset();

  object.cardsListElement.prepend(newCardElement);
  closeModalWindow(object.addCardModal);

};
//-----------------------------------------------------------


//Профиль. Сохранения модалки при редактировании профиля
function profileEditHandler(e) {

  object.profileName.textContent = object.inputName.value;
  object.profileText.textContent = object.inputStatus.value;
  closeModalWindow(object.editProfileModal);

};
//________________________________________________________________



//ВЕШАЕМ СОБЫТИЯ___________________________________________________

// Добавлене карточки. Слушатель кнопок открытия  закрытия
object.openAddCardModalButton.addEventListener('click', () => {
  if (!object.addCardModal.classList.contains('modal_is-open')) {
    object.subButtonForAddCard.classList.add(object.inactiveButtonClass);
  }

  const makeSubmitButtonDisabled = new FormValidator(object.addCardModal,validationConfig);
  makeSubmitButtonDisabled.makeSubmitDisabled();

  openModalWindow(object.addCardModal);
  object.addCardModal.querySelector('.modal__form').reset();
});


// Закрываем модалку при добавлении карточки при нажатии на крестик
object.closeAddCardModalButton.addEventListener('click', () => {
  closeModalWindow(object.addCardModal);
  object.addCardModal.querySelector('.modal__form').reset();

  const cancelValidation = new FormValidator(object.addCardModal,validationConfig);
  cancelValidation.resetValidationErrors();
});
//-----------------------------------------------------------

//Редактирование профиля. Слушатель кнопки редактирования профиля
object.openEditProfileModalButton.addEventListener('click', () => {
  openModalWindow(object.editProfileModal);
  object.inputName.value = object.profileName.textContent;
  object.inputStatus.value = object.profileText.textContent;
  object.addCardModal.querySelector('.modal__form').reset();

});

object.closeEditProfileModalButton.addEventListener('click', () => {
  closeModalWindow(object.editProfileModal);
  object.editProfileModal.querySelector('.modal__form').reset();

  const cancelValidation = new FormValidator(object.editProfileModal,validationConfig);
  cancelValidation.resetValidationErrors();

});
//-----------------------------------------------------------

//Обработчики сохранения модалок нажатием на кнопку Submit
object.formEditProfileModel.addEventListener('submit', profileEditHandler)
object.formAddCard.addEventListener('submit', profileAddCardHandler)
//-----------------------------------------------------------

//Обработчик кликов на крестик при показе карточки
object.closeImageShowModalButton.addEventListener('click', () => {
  closeModalWindow(object.imageShowModal);

});





//ГЕНЕРИРУЕМ КАРТОЧКИ

object.initialCards.forEach((item) => {

  const cardForGenerate = new Card(object.cardTemplate, item);
  const cardElement = cardForGenerate.generateCard(item);
  object.cardsListElement.prepend(cardElement);
});

const profileForm = Array.from(document.querySelectorAll(validationConfig.formSelector))[0];
const cardForm = Array.from(document.querySelectorAll(validationConfig.formSelector))[1];

const getValidationProfile = new FormValidator(profileForm,validationConfig);
getValidationProfile.enableValidation();

const getValidationCard = new FormValidator(cardForm,validationConfig);
getValidationCard.enableValidation();

//_________________________________________________________________
