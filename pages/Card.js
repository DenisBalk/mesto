export class Card {
  constructor(data) {
    this._link = data.link;
    this._title = data.name;
  }

  _getTemplate() {
    const cardElement =document.querySelector('.element-template').content.cloneNode(true);

    return cardElement;
  }

  _handleLikeClick(e){
    e.preventDefault();
    e.target.classList.toggle('element__heart_black');
  };


  _handleDeleteClick(e){
    e.preventDefault();
    e.target.closest('.element').remove();
  };

  _handleImageClick(e){
    e.preventDefault();
    this._showImage(e);
    this._openModalWindow(document.querySelector('.modal_type_image'));
  };

  // Слушатели Esc, клика и Enter
  _handleEscUp = (evt) => {
    const activePopup = document.querySelector('.modal_is-open');
    if (evt.key === 'Escape') {
      this._closeModalWindow(activePopup);
    };
  };

  _handleClickAroundModalWindow = (evt) => {
    const activePopup = document.querySelector('.modal_is-open');
    if (evt.target.classList.contains('modal_is-open')) {
      this._closeModalWindow(activePopup);
    };
  };


  _showImage = (e) => {
    e.preventDefault();

    console.log(e.target.src)
    console.log(this._getTemplate().querySelector('.element__image').src)
    console.log(this._getTemplate())

    document.querySelector('.modal_type_image').querySelector('img').src =e.target.src;
    document.querySelector('.modal_type_image').querySelector('h3').textContent = e.target.closest('.element').querySelector('.element__title').textContent;

    return this._element
  };

  _openModalWindow = (modalWindow) => {
    document.querySelector('.modal_type_image').querySelector('.modal__close-button').addEventListener('click', () => {
      this._closeModalWindow(document.querySelector('.modal_type_image'))
    });
    // добавляем событие keydown
    document.addEventListener('keydown', this._handleEscUp);
    document.addEventListener('click', this._handleClickAroundModalWindow);
    // открываем модалку
    modalWindow.classList.add('modal_is-open');
  }




  // Открытие и закрытие модалки
  _closeModalWindow = (modalWindow) => {
  // удаляем событие keydown
    document.removeEventListener('keydown', this._handleEscUp);
    document.removeEventListener('click', this._handleClickAroundModalWindow);
    // скрываем попап
    modalWindow.classList.remove('modal_is-open');
    // сбрасываем формы
    // modalWindow.querySelector('.modal__form').reset();
    // сбасываем валидацию
    // cardCheckValidStyle()
  };
//----------------------------------------

  generateCard = () => {

    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._title;

    // console.log(this._element)
    //Навешиваем слушателей
    // const elementTemplate = document.querySelector('.element-template');
    // const card = this._element.content.cloneNode(true);
    const cardLikeButton = this._element.querySelector('.element__heart');
    const cardDeleteButton = this._element.querySelector('.element__delete');
    const cardImage = this._element.querySelector('.element__image');
    const cardImageSource = this._element.querySelector('img');


    // // cardImageSource.src = data.link;
    cardImageSource.alt = this._title;
    // // card.querySelector('.element__title').textContent = data.name;

    // //   //Кнопки на карточках
    cardLikeButton.addEventListener('click', (e) => {
      this._handleLikeClick(e);
    });

    cardDeleteButton.addEventListener('click', (e) => {
      this._handleDeleteClick(e);
    });

    cardImage.addEventListener('click', (e) => {
      this._handleImageClick(e);
    })

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
