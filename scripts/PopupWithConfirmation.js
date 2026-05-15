// PopupWithConfirmation.js
import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._submitButton = this._form.querySelector(".popup__button");
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
    });
  }

  setButtonLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Eliminando...";
      this._submitButton.disabled = true;
    } else {
      this._submitButton.textContent = "Sí";
      this._submitButton.disabled = false;
    }
  }

  close() {
    super.close();
    this.setButtonLoading(false);
  }
}
