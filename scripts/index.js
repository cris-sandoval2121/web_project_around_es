// const initialCards = [
//   {
//     name: "Valle de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
//   },
//   {
//     name: "Lago Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
//   },
//   {
//     name: "Montañas Calvas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
//   },
//   {
//     name: "Parque Nacional de la Vanoise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
//   },
// ];

// // -----------------------------
// //  MODALES REUTILIZABLES
// // -----------------------------

// function openModal(modal) {
//   modal.classList.add("popup_is-opened");
// }

// function closeModal(modal) {
//   modal.classList.remove("popup_is-opened");
// }

// // -----------------------------
// //  POPUP EDITAR PERFIL
// // -----------------------------

// const editProfileButton = document.querySelector(".profile__edit-button");
// const editPopup = document.querySelector("#edit-popup");
// const editPopupCloseButton = editPopup.querySelector(".popup__close");

// const profileName = document.querySelector(".profile__title");
// const profileDescription = document.querySelector(".profile__description");

// const nameInput = editPopup.querySelector(".popup__input_type_name");
// const descriptionInput = editPopup.querySelector(".popup__input_type_description");

// const profileForm = document.querySelector("#edit-profile-form");

// function fillProfileForm() {
//   nameInput.value = profileName.textContent;
//   descriptionInput.value = profileDescription.textContent;
// }

// function handleOpenEditModal() {
//   fillProfileForm();
//   openModal(editPopup);
// }

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();

//   profileName.textContent = nameInput.value;
//   profileDescription.textContent = descriptionInput.value;

//   closeModal(editPopup);
// }

// editProfileButton.addEventListener("click", handleOpenEditModal);

// editPopupCloseButton.addEventListener("click", () => {
//   closeModal(editPopup);
// });

// profileForm.addEventListener("submit", handleProfileFormSubmit);

// // -----------------------------
// //  POPUP AGREGAR TARJETA (PASO 2)
// // -----------------------------

// const addCardButton = document.querySelector(".profile__add-button");
// const newCardPopup = document.querySelector("#new-card-popup");
// const newCardPopupCloseButton = newCardPopup.querySelector(".popup__close");

// const newCardForm = document.querySelector("#new-card-form");
// const cardNameInput = newCardPopup.querySelector(".popup__input_type_card-name");
// const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");

// function handleCardFormSubmit(evt) {
//   evt.preventDefault();

//   const name = cardNameInput.value;
//   const link = cardLinkInput.value;

//   // Crear tarjeta nueva como primera
//   renderCard({ name, link }, cardsList);

//   closeModal(newCardPopup);
//   newCardForm.reset();
// }

// addCardButton.addEventListener("click", () => {
//   openModal(newCardPopup);
// });

// newCardPopupCloseButton.addEventListener("click", () => {
//   closeModal(newCardPopup);
// });

// newCardForm.addEventListener("submit", handleCardFormSubmit);

// // -----------------------------
// //  POPUP IMAGEN (ABRIR/CERRAR)
// // -----------------------------

// const imagePopup = document.querySelector("#image-popup");
// const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
// const popupImage = imagePopup.querySelector(".popup__image");
// const popupCaption = imagePopup.querySelector(".popup__caption");

// imagePopupCloseButton.addEventListener("click", () => {
//   closeModal(imagePopup);
// });

// // -----------------------------
// //  TARJETAS DINÁMICAS (TEMPLATE)
// // -----------------------------

// const cardsList = document.querySelector(".cards__list");
// const cardTemplate = document.querySelector("#card-template").content;

// function getCardElement({ name = "Sin título", link = "./images/placeholder.jpg" } = {}) {
//   const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

//   const cardImage = cardElement.querySelector(".card__image");
//   const cardTitle = cardElement.querySelector(".card__title");
//   const deleteButton = cardElement.querySelector(".card__delete-button");
//   const likeButton = cardElement.querySelector(".card__like-button");

//   cardTitle.textContent = name;
//   cardImage.src = link;
//   cardImage.alt = name;

//   // Like
//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_is-active");
//   });

//   // Delete
//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });

//   // Abrir imagen en popup grande
//   cardImage.addEventListener("click", () => {
//     popupImage.src = link;
//     popupImage.alt = name;
//     popupCaption.textContent = name;

//     openModal(imagePopup);
//   });

//   return cardElement;
// }

// function renderCard(cardData, container) {
//   const cardElement = getCardElement(cardData);
//   container.prepend(cardElement);
// }

// initialCards.forEach((cardData) => {
//   renderCard(cardData, cardsList);
// });

////////////////////////////////////////////////////////////////////////////////////////////////
/* -------------------------------------------------------------------------- */
/* DATOS INICIALES                              */
/* -------------------------------------------------------------------------- */


/* ==========================================================================
   1. CONFIGURACIÓN Y DATOS (DATA LAYER)
   ========================================================================== */

/* ==========================================================================
   1. VARIABLES Y SELECCIÓN DE ELEMENTOS
   ========================================================================== */
const initialCards = [
  { name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg" },
  { name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg" },
  { name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg" },
  { name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg" },
  { name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg" },
  { name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg" },
];

const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

// Modales
const editPopup = document.querySelector("#edit-popup");
const newCardPopup = document.querySelector("#new-card-popup");
const imagePopup = document.querySelector("#image-popup");
const popups = document.querySelectorAll(".popup"); // Seleccionar todos los popups

// Elementos del perfil
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileForm = document.querySelector("#edit-profile-form");
const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(".popup__input_type_description");

// Elementos de nueva tarjeta
const newCardForm = document.querySelector("#new-card-form");
const cardNameInput = newCardPopup.querySelector(".popup__input_type_card-name");
const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");

// Botones
const editProfileButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

/* ==========================================================================
   2. FUNCIONES DE UTILIDAD (ABRIR/CERRAR) - Pasos 3 y 4
   ========================================================================== */

// Cerrar con tecla ESC (Paso 4)
function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

function openModal(modal) {
  modal.classList.add("popup_is-opened");
  // Agregamos el listener de Esc solo cuando se abre un modal
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  // Quitamos el listener para no gastar memoria
  document.removeEventListener("keydown", handleEscClose);
}

// Cerrar con Click en Overlay o Botón X (Paso 3)
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    // Si el click fue en el fondo oscuro O en el botón de cerrar
    if (
      evt.target.classList.contains("popup_is-opened") ||
      evt.target.classList.contains("popup__close")
    ) {
      closeModal(popup);
    }
  });
});

/* ==========================================================================
   3. LÓGICA DE VALIDACIÓN (Pasos 1, 2 y Recomendación Extra)
   ========================================================================== */

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const toggleButtonState = (inputList, buttonElement) => {
  const hasInvalidInput = inputList.some((inputElement) => !inputElement.validity.valid);

  if (hasInvalidInput) {
    buttonElement.classList.add("popup__button_disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("popup__button_disabled");
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button");

  // Estado inicial del botón
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

// Función Extra: Restablecer validación al abrir modal
// (Para que no aparezcan errores rojos de la vez anterior)
const resetValidation = (formElement, inputList, buttonElement) => {
  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
  });
  toggleButtonState(inputList, buttonElement);
};

/* ==========================================================================
   4. LÓGICA DE TARJETAS (Factory Pattern)
   ========================================================================== */

// Eliminamos parámetros por defecto como pedía la instrucción
function getCardElement(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  // Listeners internos
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    const popupImage = imagePopup.querySelector(".popup__image");
    const popupCaption = imagePopup.querySelector(".popup__caption");
    popupImage.src = data.link;
    popupImage.alt = data.name;
    popupCaption.textContent = data.name;
    openModal(imagePopup);
  });

  return cardElement;
}

function renderCard(cardData, container) {
  const cardElement = getCardElement(cardData);
  container.prepend(cardElement);
}

/* ==========================================================================
   5. HANDLERS DE FORMULARIOS
   ========================================================================== */

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closeModal(editPopup);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const name = cardNameInput.value;
  const link = cardLinkInput.value;

  renderCard({ name, link }, cardsList);
  closeModal(newCardPopup);
  newCardForm.reset();
}

/* ==========================================================================
   6. LISTENERS DE APERTURA (Con Reseteo)
   ========================================================================== */

editProfileButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;

  // Reseteamos validación y estado del botón para el perfil
  const inputList = Array.from(profileForm.querySelectorAll(".popup__input"));
  const buttonElement = profileForm.querySelector(".popup__button");
  resetValidation(profileForm, inputList, buttonElement);

  openModal(editPopup);
});

addCardButton.addEventListener("click", () => {
  // Reseteamos validación y estado del botón para nueva tarjeta
  // El botón aparecerá desactivado porque el formulario está vacío
  const inputList = Array.from(newCardForm.querySelectorAll(".popup__input"));
  const buttonElement = newCardForm.querySelector(".popup__button");
  resetValidation(newCardForm, inputList, buttonElement);
  
  openModal(newCardPopup);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);
newCardForm.addEventListener("submit", handleCardFormSubmit);

/* ==========================================================================
   7. INICIALIZACIÓN
   ========================================================================== */

// Dibujar tarjetas iniciales
initialCards.forEach((cardData) => renderCard(cardData, cardsList));

// Activar validación
setEventListeners(profileForm);
setEventListeners(newCardForm);