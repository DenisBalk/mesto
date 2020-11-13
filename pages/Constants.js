
//Открытие модалок
const openAddCardModalButton = document.querySelector(".profile__add-button");
const openEditProfileModalButton = document.querySelector('.profile__edit-button');

//Идентификация типа модалки
const addCardModal = document.querySelector('.modal_type_add-card');
const editProfileModal = document.querySelector('.modal_type_edit-profile');
const imageShowModal = document.querySelector('.modal_type_image');

//Поиск формы в модалке
const formAddCard = addCardModal.querySelector('.modal__form');
const formEditProfileModel = editProfileModal.querySelector('.modal__form');

//Поля для ввода
const inputName = formEditProfileModel.querySelector('.modal__input_type_name');
const inputStatus = formEditProfileModel.querySelector('.modal__input_type_status');

const inputTitle = formAddCard.querySelector('.modal__input_type_place');
const inputUrl = formAddCard.querySelector('.modal__input_type_url');

//Поля для вывода
const profileName = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');

//Поиск кнопки закрытия в модалке
const closeAddCardModalButton = addCardModal.querySelector('.modal__close-button');
const closeEditProfileModalButton = editProfileModal.querySelector('.modal__close-button');
const closeImageShowModalButton = imageShowModal.querySelector('.modal__close-button');

//Картиник
const imageInModal = imageShowModal.querySelector('img');
const subButtonForAddCard = formAddCard.querySelector('.modal__btn-save')
const cardTemplate = document.querySelector('.element-template');

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const cardsListElement = document.querySelector('.elements');

export const object = {
    openAddCardModalButton,
    openEditProfileModalButton,
    addCardModal,
    editProfileModal,
    imageShowModal,
    formAddCard,
    formEditProfileModel,
    inputName,
    inputStatus,
    inputTitle,
    inputUrl,
    profileName,
    profileText,
    closeAddCardModalButton,
    closeEditProfileModalButton,
    closeImageShowModalButton,
    imageInModal,
    subButtonForAddCard,
    initialCards,
    cardsListElement,
    cardTemplate
  }

  export const validationConfig = {
    formSelector:'.modal__form',
    inputSelector: '.modal__input',
    inputValidClass: 'modal__input_type_valid',
    inputErrorClass: 'modal__input_type_error',
    submitButtonSelector: '.modal__btn-save',
    inactiveButtonClass: 'modal__btn-disabled',
    activeButtonClass: 'modal__btn-undisabled',
    errorClass: 'modal__error-visible'
  }
