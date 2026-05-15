// UserInfo.js
export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._jobElement.textContent,
    };
  }

  setUserInfo({ name, description }) {
    if (name) this._nameElement.textContent = name;
    if (description) this._jobElement.textContent = description;
  }

  setAvatar(avatar) {
    this._avatarElement.src = avatar;
  }

  getAvatar() {
    return this._avatarElement.src;
  }

  getUserId() {
    return this._userId;
  }

  setUserId(id) {
    this._userId = id;
  }
}