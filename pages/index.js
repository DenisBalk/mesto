//ПОДКЛЮЧАЕМ ВНЕШНИЕ ФАЙЛЫ________________________________________
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { object } from './Constants.js';
import {openModalWindow, closeModalWindow} from './Utils.js';
//________________________________________________________________


//ОБЪЯВЛЯЕМ ФУНКЦИИ________________________________________________

//Делаем активной кнопку Submit
const makeSubmitActive = (modalWindow) => {
  const activePopup = modalWindow.querySelector('.modal__btn-save');
  // открываем модалку
  activePopup.disabled = false;
  activePopup.classList.remove('modal__btn-disabled');
}


//Сохранение при добавлении карточки
function profileAddCardHandler(e) {
  e.preventDefault();

  const new_card_for_generate = new Card(object.cardTemplate,{name:object.inputTitle.value, link:object.inputUrl.value});

  const new_cardElement = new_card_for_generate.generateCard();
  object.cardsListElement.prepend(new_cardElement);
  closeModalWindow(object.addCardModal);

  const cancelValidationCard = new FormValidator(object.addCardModal,object);
  cancelValidationCard.cardCheckValidStyle();
  object.addCardModal.querySelector('.modal__form').reset();
};
//-----------------------------------------------------------


//Профиль. Сохранения модалки при редактировании профиля
function profileEditHandler(e) {
  e.preventDefault();
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
  openModalWindow(object.addCardModal);
  object.addCardModal.querySelector('.modal__form').reset();
  const cancelValidationCard = new FormValidator(object.editProfileModal,object);
  cancelValidationCard.cardCheckValidStyle();
});


// Закрываем модалку при добавлении карточки при нажатии на крестик
object.addCardCloseModalButton.addEventListener('click', () => {
  closeModalWindow(object.addCardModal);
  object.addCardModal.querySelector('.modal__form').reset();
  const cancelValidationCard = new FormValidator(object.addCardModal,object);
  cancelValidationCard.cardCheckValidStyle();

});
//-----------------------------------------------------------

//Редактирование профиля. Слушатель кнопки редактирования профиля
object.openEditProfileModalButton.addEventListener('click', () => {
  openModalWindow(object.editProfileModal);
  object.inputName.value = 'Жак-Ив Кусто';
  object.inputStatus.value = 'Исследователь океана';
  makeSubmitActive(object.editProfileModal);
  const cancelValidationCard = new FormValidator(object.editProfileModal,object);
  cancelValidationCard.cardCheckValidStyle();
});

object.closeEditProfileModalButton.addEventListener('click', () => {
  closeModalWindow(object.editProfileModal);
  object.editProfileModal.querySelector('.modal__form').reset();
  const cancelValidationCard = new FormValidator(object.editProfileModal,object);
  cancelValidationCard.cardCheckValidStyle();
});
//-----------------------------------------------------------

//Обработчики сохранения модалок нажатием на кнопку Submit
object.formEditProfileModel.addEventListener('submit', profileEditHandler)
object.formAddCard.addEventListener('submit', profileAddCardHandler)
//-----------------------------------------------------------





//ГЕНЕРИРУЕМ КАРТОЧКИ

object.initialCards.forEach((item) => {

  const card_for_generate = new Card(object.cardTemplate, item);
  const cardElement = card_for_generate.generateCard(item);
  object.cardsListElement.prepend(cardElement);
});

const profile_form = Array.from(document.querySelectorAll(object.formSelector))[0];
const card_form = Array.from(document.querySelectorAll(object.formSelector))[1];

const getValidationProfile = new FormValidator(profile_form,object);
getValidationProfile.enableValidation();

const getValidationCard = new FormValidator(card_form,object);
getValidationCard.enableValidation();

//_________________________________________________________________
