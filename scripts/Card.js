// Card.js
export default class Card {
  constructor(data, cardSelector, handleCardClick, userId, { api, handleDelete }) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._ownerId = data.owner;
    this._isLiked = data.isLiked;
    this._api = api;
    this._handleDelete = handleDelete;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_is-active");
    
    if (this._isLiked) {
      this._api.removeLike(this._id)
        .catch((err) => {
          console.log(err);
          this._likeButton.classList.toggle("card__like-button_is-active");
        });
    } else {
      this._api.addLike(this._id)
        .catch((err) => {
          console.log(err);
          this._likeButton.classList.toggle("card__like-button_is-active");
        });
    }
    
    this._isLiked = !this._isLiked;
  }

  _handleDeleteCard() {
    this._handleDelete(this._id, this._element);
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._cardImage = this._element.querySelector(".card__image");

    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({
        name: this._name,
        link: this._link,
      });
    });

    if (this._userId !== this._ownerId) {
      this._deleteButton.style.display = "none";
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    if (this._isLiked) {
      this._likeButton = this._element.querySelector(".card__like-button");
      this._likeButton.classList.add("card__like-button_is-active");
    }

    this._setEventListeners();

    return this._element;
  }
}