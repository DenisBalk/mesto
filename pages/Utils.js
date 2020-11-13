import { object, validationConfig } from './Constants.js';
import { FormValidator } from './FormValidator.js';


function closeByEsc(modalWindow,evt) {
  if (evt.key === 'Escape') {
    modalWindow.classList.remove('modal_is-open');

    const cancelValidation = new FormValidator(modalWindow,validationConfig);
    cancelValidation.resetValidationErrors();

  };
}


// Открытие и закрытие модалки
export const closeModalWindow = (modalWindow) => {
  // удаляем событие keydown
  document.removeEventListener('keyup', (evt) => {
    closeByEsc(modalWindow,evt)
  });

  const cancelValidation = new FormValidator(modalWindow,validationConfig);
  cancelValidation.resetValidationErrors();

  modalWindow.classList.remove('modal_is-open');

};
// ----------------------------------------


// Открываем модалку и вешаем события на закрытие
export const openModalWindow = (modalWindow) => {
  // добавляем событие keydown

  document.addEventListener('keyup', (evt) => {
    closeByEsc(modalWindow,evt)
  });

  modalWindow.classList.add('modal_is-open');

  document.addEventListener('click', (evt) => {
    const activePopup = document.querySelector('.modal_is-open');
    if (evt.target.classList.contains('modal_is-open')) {
      closeModalWindow(activePopup);
    };
  });

}

