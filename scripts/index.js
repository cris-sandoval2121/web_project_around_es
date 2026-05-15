// index.js
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import UserInfo from "./UserInfo.js";
import FormValidator from "./FormValidator.js";
import Api from "./Api.js";

// --- API SETUP ---
const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "d544db4e-08f2-4367-9f57-fa48717a1f0e",
    "Content-Type": "application/json",
  },
});

let currentUserId = null;

// --- BOTONES ---
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");
const profileImage = document.querySelector(".profile__image");

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

const avatarForm = document.querySelector("#avatar-form");
const avatarFormValidator = new FormValidator(validationSettings, avatarForm);
avatarFormValidator.enableValidation();

// --- USER INFO ---
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
  avatarSelector: ".profile__image",
});

// --- POPUP IMAGEN ---
const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

// --- FUNCIÓN CREAR TARJETA ---
function createCard(item) {
  const card = new Card(
    item,
    "#card-template",
    (data) => {
      imagePopup.open(data);
    },
    currentUserId,
    {
      api,
      handleDelete: (cardId, cardElement) => {
        deleteConfirmPopup.open();
        deleteConfirmPopup._cardId = cardId;
        deleteConfirmPopup._cardElement = cardElement;
      },
    }
  );

  return card.generateCard();
}

// --- SECTION TARJETAS ---
const cardSection = new Section(
  {
    items: [],
    renderer: (item) => {
      const cardElement = createCard(item);
      cardSection.addItem(cardElement);
    },
  },
  ".cards__list"
);

// --- POPUP EDITAR PERFIL ---
const editProfilePopup = new PopupWithForm("#edit-popup", (formData) => {
  editProfilePopup.setButtonLoading(true);

  api
    .editProfile(formData.name, formData.description)
    .then((userData) => {
      userInfo.setUserInfo({
        name: userData.name,
        description: userData.about,
      });
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      editProfilePopup.setButtonLoading(false);
    });
});

editProfilePopup.setEventListeners();

// --- POPUP NUEVA TARJETA ---
const newCardPopup = new PopupWithForm("#new-card-popup", (formData) => {
  newCardPopup.setButtonLoading(true);

  api
    .addCard(formData["place-name"], formData.link)
    .then((cardData) => {
      const cardElement = createCard(cardData);
      cardSection.addItem(cardElement);
      newCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      newCardPopup.setButtonLoading(false);
    });
});

newCardPopup.setEventListeners();

// --- POPUP ELIMINAR TARJETA ---
const deleteConfirmPopup = new PopupWithConfirmation(
  "#delete-popup",
  () => {
    deleteConfirmPopup.setButtonLoading(true);

    api
      .deleteCard(deleteConfirmPopup._cardId)
      .then(() => {
        deleteConfirmPopup._cardElement.remove();
        deleteConfirmPopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        deleteConfirmPopup.setButtonLoading(false);
      });
  }
);

deleteConfirmPopup.setEventListeners();

// --- POPUP CAMBIAR AVATAR ---
const avatarPopup = new PopupWithForm("#avatar-popup", (formData) => {
  avatarPopup.setButtonLoading(true);

  api
    .updateAvatar(formData.avatar)
    .then((userData) => {
      userInfo.setAvatar(userData.avatar);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.setButtonLoading(false);
    });
});

avatarPopup.setEventListeners();

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

profileImage.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avatarPopup.open();
});

// --- INITIALIZE APP ---
api
  .getUserAndCards()
  .then(([userData, cardsData]) => {
    currentUserId = userData._id;
    userInfo.setUserId(userData._id);
    userInfo.setUserInfo({
      name: userData.name,
      description: userData.about,
    });
    userInfo.setAvatar(userData.avatar);

    cardSection._items = cardsData;
    cardSection.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });