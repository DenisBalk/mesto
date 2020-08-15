const openModalButton = document.querySelector('.profile__edit-button');
const closeModalButton = document.querySelector('.modal__close-button');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');

const inputName = document.querySelector('.modal__input_type_name');
const inputStatus = document.querySelector('.modal__input_type_status');

const profileName = document.querySelector('.profile__title');
const profileText = document.querySelector('.profile__text');

function toggleModal() {

  if (!modal.classList.contains('modal_is-open')) {
    inputName.value = profileName.textContent;
    inputStatus.value = profileText.textContent;
  }

  modal.classList.toggle('modal_is-open');
}
function formSubmitHandler(e) {
  e.preventDefault();
  profileName.textContent = inputName.value;
  profileText.textContent = inputStatus.value;
  toggleModal();
}

openModalButton.addEventListener('click', toggleModal);
closeModalButton.addEventListener('click', toggleModal);
form.addEventListener('submit', formSubmitHandler);


