
const openAddCardModalButton = document.querySelector(".profile__add-button");
const openEditProfileModalButton = document.querySelector('.profile__edit-button');
const addCardModal = document.querySelector('.modal_type_add-card');
const editProfileModal = document.querySelector('.modal_type_edit-profile');
const imageShowModal = document.querySelector('.modal_type_image');
const formAddCard = addCardModal.querySelector('.modal__form');
const formEditProfileModel = editProfileModal.querySelector('.modal__form');
const inputName = formEditProfileModel.querySelector('.modal__input_type_name');
const inputStatus = formEditProfileModel.querySelector('.modal__input_type_status');
const inputTitle = formAddCard.querySelector('.modal__input_type_place');
const inputUrl = formAddCard.querySelector('.modal__input_type_url');
const profileName = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');
const addCardCloseModalButton = addCardModal.querySelector('.modal__close-button');
const closeEditProfileModalButton = editProfileModal.querySelector('.modal__close-button');
const closeImageShowModalButton = imageShowModal.querySelector('.modal__close-button');

const imageInModal = imageShowModal.querySelector('img');
const subButtonForAddCard = formAddCard.querySelector('.modal__btn-save')



const closeModalWindow = (modalWindow) => {
  
  document.removeEventListener('keydown', handleEscUp);
  document.removeEventListener('click', handleClickAroundModalWindow);
  
  modalWindow.classList.remove('modal_is-open');
   modalWindow.querySelector('.modal__form').reset();
  
  cardCheckValidStyle()
};

const makeSubmitActive = (modalWindow) => {
  const activePopup = modalWindow.querySelector('.modal__btn-save');
  
  activePopup.disabled = false;
  activePopup.classList.remove('modal__btn-disabled');
}


const openModalWindow = (modalWindow) => {
  
  document.addEventListener('keydown', handleEscUp);
  document.addEventListener('click', handleClickAroundModalWindow);
  
  modalWindow.classList.add('modal_is-open');
}

const KeyEscape = 'Escape';

const handleEscUp = (evt) => {
  const activePopup = document.querySelector('.modal_is-open');
  if (evt.key === KeyEscape) {
    closeModalWindow(activePopup);
  };
};

const handleClickAroundModalWindow = (evt) => {
  const activePopup = document.querySelector('.modal_is-open');
  if (evt.target.classList.contains('modal_is-open')) {
    closeModalWindow(activePopup);
  };
};

function cardCheckValidStyle(){

  if (inputTitle.classList.contains('modal__input_type_valid')){
    inputTitle.classList.remove('modal__input_type_valid')
  }
  if (inputUrl.classList.contains('modal__input_type_valid')) {
    inputUrl.classList.remove('modal__input_type_valid')
  }

  if (inputName.classList.contains('modal__input_type_valid')){
    inputName.classList.remove('modal__input_type_valid')
  }

  if (inputStatus.classList.contains('modal__input_type_valid')) {
    inputStatus.classList.remove('modal__input_type_valid')
  }


  if (inputTitle.classList.contains('modal__input_type_error')){
    inputTitle.classList.remove('modal__input_type_error');
    addCardModal.querySelector(`#modal__input-title-error`).textContent = '';
  }
  if (inputUrl.classList.contains('modal__input_type_error')){
    inputUrl.classList.remove('modal__input_type_error');
    addCardModal.querySelector(`#modal__input-url-error`).textContent = '';
  }

  if (inputName.classList.contains('modal__input_type_error')){
    inputName.classList.remove('modal__input_type_error');
    editProfileModal.querySelector(`#modal__input-name-error`).textContent = '';
  }
  if (inputStatus.classList.contains('modal__input_type_error')){
    inputStatus.classList.remove('modal__input_type_error');
    editProfileModal.querySelector(`#modal__input-status-error`).textContent = '';
  }

  subButtonForAddCard.disabled = true;
  subButtonForAddCard.classList.remove('modal__btn-undisabled')

}

function profileAddCardHandler(e) {
  e.preventDefault();
  renderCard({name:inputTitle.value, link:inputUrl.value})
  closeModalWindow(addCardModal);
};

function profileEditHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputStatus.value;
  closeModalWindow(editProfileModal);
};

openAddCardModalButton.addEventListener('click', () => {
  if (!addCardModal.classList.contains('modal_is-open')) {
    subButtonForAddCard.classList.add(object.inactiveButtonClass);
  }
  openModalWindow(addCardModal);
});

addCardCloseModalButton.addEventListener('click', () => {
  closeModalWindow(addCardModal);
});

openEditProfileModalButton.addEventListener('click', () => {
  openModalWindow(editProfileModal);

  makeSubmitActive(editProfileModal);

});

closeEditProfileModalButton.addEventListener('click', () => {
  closeModalWindow(editProfileModal);
});

closeImageShowModalButton.addEventListener('click', () => {
  closeModalWindow(imageShowModal)
});

formEditProfileModel.addEventListener('submit', profileEditHandler)
formAddCard.addEventListener('submit', profileAddCardHandler)





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

function handleDeleteClick(e){
  
  e.target.closest('.element').remove();
};

function handleLikeClick(e){
  
  e.target.classList.toggle('element__heart_black');
};

function handleImageClick(e){
  
  showImage(e);
  openModalWindow(imageShowModal);
};


function showImage(e) {
  
  imageInModal.src = e.target.src;
  imageInModal.alt = e.target.closest('.element').querySelector('.element__title').textContent;
  imageShowModal.querySelector('h3').textContent = e.target.closest('.element').querySelector('.element__title').textContent;


};

const elementTemplate = document.querySelector('.element-template');
function createCard(data) {
  
  const card = elementTemplate.content.cloneNode(true);
  const cardLikeButton = card.querySelector('.element__heart');
  const cardDeleteButton = card.querySelector('.element__delete');
  const cardImage = card.querySelector('.element__image');
  const cardImageSource = card.querySelector('img');

  cardImageSource.src = data.link;
  cardImageSource.alt = data.name;
  card.querySelector('.element__title').textContent = data.name;

    
  cardLikeButton.addEventListener('click', (e) => {
    handleLikeClick(e);
  });

  cardDeleteButton.addEventListener('click', (e) => {
    handleDeleteClick(e);
  });

  cardImage.addEventListener('click', (e) => {
    handleImageClick(e);
  })

  return card;
}



function renderCard(data) {
  cardsListElement.prepend(createCard(data))
}


initialCards.forEach(data => {
  renderCard(data);
});

