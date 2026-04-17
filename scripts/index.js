// index.js
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// --- BOTONES ---
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

// --- FORMULARIOS ---
const profileForm = document.querySelector("#edit-profile-form");
const newCardForm = document.querySelector("#new-card-form");

// --- INPUTS PERFIL ---
const nameInput = profileForm.querySelector(".popup__input_type_name");
const descriptionInput = profileForm.querySelector(
  ".popup__input_type_description"
);

// --- CONFIG VALIDATION ---
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// --- VALIDADORES ---
const profileFormValidator = new FormValidator(validationSettings, profileForm);
profileFormValidator.enableValidation();

const newCardFormValidator = new FormValidator(validationSettings, newCardForm);
newCardFormValidator.enableValidation();

// --- USER INFO ---
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

// --- POPUP IMAGEN ---
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

// --- FUNCIÓN CREAR TARJETA ---
function createCard(item) {
  const card = new Card(item, "#card-template", (data) => {
    imagePopup.open(data);
  });

  return card.generateCard();
}

// --- SECTION TARJETAS ---
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list"
);

cardSection.renderItems();

// --- POPUP EDITAR PERFIL ---
const editProfilePopup = new PopupWithForm("#edit-popup", (formData) => {
  userInfo.setUserInfo({
    name: formData.name,
    description: formData.description,
  });

  editProfilePopup.close();
});

editProfilePopup.setEventListeners();

// --- POPUP NUEVA TARJETA ---
const newCardPopup = new PopupWithForm("#new-card-popup", (formData) => {
  const cardElement = createCard({
    name: formData["place-name"],
    link: formData.link,
  });

  cardSection.addItem(cardElement);
  newCardPopup.close();
});

newCardPopup.setEventListeners();

// --- LISTENERS BOTONES ---
editProfileButton.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();

  nameInput.value = currentUserInfo.name;
  descriptionInput.value = currentUserInfo.description;

  profileFormValidator.resetValidation();
  editProfilePopup.open();
});

addCardButton.addEventListener("click", () => {
  newCardFormValidator.resetValidation();
  newCardPopup.open();
});