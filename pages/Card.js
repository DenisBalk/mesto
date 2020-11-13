import {openModalWindow} from './Utils.js';
import { object, validationConfig } from './Constants.js';

export class Card {
  constructor(cardElement, data) {
    this._cardElement = cardElement;
    this._link = data.link;
    this._title = data.name;
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
      e.target.classList.toggle('element__heart_black');
    });

    cardDeleteButton.addEventListener('click', (e) => {
      e.target.closest('.element').remove();
    });


    cardImage.addEventListener('click', (e) => {
      object.imageShowModal.querySelector('img').src =e.target.src;
      object.imageShowModal.querySelector('h3').textContent = e.target.closest('.element').querySelector('.element__title').textContent;
      openModalWindow(object.imageShowModal);
    })
  }

  generateCard = () => {

    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._title;
    // //   //Кнопки на карточках

    this._setEventListeners()
    return this._element;
  }
}



