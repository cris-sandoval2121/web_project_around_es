// Card.js
import { openModal } from "./utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    const likeButton = this._element.querySelector(".card__like-button");
    const deleteButton = this._element.querySelector(".card__delete-button");
    const cardImage = this._element.querySelector(".card__image");

    // Like
    likeButton.addEventListener("click", () => {
      this._handleLikeIcon(likeButton);
    });

    // Delete
    deleteButton.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    // Abrir imagen
    cardImage.addEventListener("click", () => {
      this._handlePreviewPicture();
    });
  }

  _handleLikeIcon(likeButton) {
    likeButton.classList.toggle("card__like-button_is-active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _handlePreviewPicture() {
    const imagePopup = document.querySelector("#image-popup");
    const popupImage = imagePopup.querySelector(".popup__image");
    const popupCaption = imagePopup.querySelector(".popup__caption");

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;

    openModal(imagePopup);
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector(".card__image");
    const cardTitle = this._element.querySelector(".card__title");

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    return this._element;
  }
}