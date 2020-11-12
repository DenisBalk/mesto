import { FormValidator } from './FormValidator.js';
import { object } from './Constants.js';


// Открытие и закрытие модалки
export const closeModalWindow = (modalWindow) => {
  // удаляем событие keydown
  document.removeEventListener('keyup', (evt) => {
    const activePopup = document.querySelector('.modal_is-open');
    if (evt.key === 'Escape') {
      activePopup.remove('modal_is-open');

    };
  });

  modalWindow.classList.remove('modal_is-open');

};
// ----------------------------------------


// Открываем модалку и вешаем события на закрытие
export const openModalWindow = (modalWindow) => {
  // добавляем событие keydown


  document.addEventListener('keyup', (evt) => {

    if (evt.key === 'Escape') {

      modalWindow.classList.remove('modal_is-open');;
    };
  });

  // открываем модалку
  modalWindow.classList.add('modal_is-open');

}
