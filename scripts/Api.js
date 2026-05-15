// Api.js
export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // USER METHODS
  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((res) => this._checkResponse(res));
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._checkResponse(res));
  }

  // CARD METHODS
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards/`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) => this._checkResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  // LIKE METHODS
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  // HELPER METHOD
  getUserAndCards() {
    return Promise.all([this.getUser(), this.getInitialCards()]);
  }
}
