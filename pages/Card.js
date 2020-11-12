import {openModalWindow, closeModalWindow} from './Utils.js';
import { object } from './Constants.js';

export class Card {
  constructor(cardElement, data) {
    this._cardElement = cardElement;
    this._link = data.link;
    this._title = data.name;
    this._openModalWindow = openModalWindow;
    this._closeModalWindow = closeModalWindow

  }

  _getTemplate() {
    const cardElement = this._cardElement.content.cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {

    const cardLikeButton = this._element.querySelector('.element__heart');
    const cardDeleteButton = this._element.querySelector('.element__delete');
    const cardImage = this._element.querySelector('.element__image');

    cardLikeButton.addEventListener('click', (e) => {
      // this._handleLikeClick(e);
      e.target.classList.toggle('element__heart_black');
    });

    cardDeleteButton.addEventListener('click', (e) => {
      // this._handleDeleteClick(e);
      e.preventDefault();
      e.target.closest('.element').remove();
    });

    object.closeImageShowModalButton.addEventListener('click', () => {
      closeModalWindow(object.imageShowModal);
    });

    document.addEventListener('click', (evt) => {
      const activePopup = document.querySelector('.modal_is-open');
      if (evt.target.classList.contains('modal_is-open')) {
        closeModalWindow(activePopup);
      };
    });

    cardImage.addEventListener('click', (e) => {
      e.preventDefault();
      object.imageShowModal.querySelector('img').src =e.target.src;
      object.imageShowModal.querySelector('h3').textContent = e.target.closest('.element').querySelector('.element__title').textContent;
      openModalWindow(object.imageShowModal);
    })
  }

  generateCard = () => {

    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._title;

    //Навешиваем слушателей
    // const elementTemplate = document.querySelector('.element-template');
    // const card = this._element.content.cloneNode(true);

    // const cardImageSource = this._element.querySelector('img');


    // // // cardImageSource.src = data.link;
    // cardImageSource.alt = this._title;
    // // card.querySelector('.element__title').textContent = data.name;

    // //   //Кнопки на карточках

    this._setEventListeners()
    return this._element;
  }
}



// принимает в конструктор её данные и селектор её template-элемента;
// содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
// содержит приватные методы для каждого обработчика;
// содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.


// Принимать в конструктор ссылки на изображение и текст;

// Принимать в конструктор селектор для template-элемента с шаблоном разметки;

// Обладать приватными методами, которые установят слушателей событий, обработают клики, подготовят карточку к публикации;

// Обладать публичным методом, который вернёт готовую разметку, с установленными слушателями событий.
