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

// -----------------------------
//  POPUP EDITAR PERFIL
// -----------------------------

const editProfileButton = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector("#edit-popup");
const editPopupCloseButton = editPopup.querySelector(".popup__close");

const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const nameInput = editPopup.querySelector(".popup__input_type_name");
const descriptionInput = editPopup.querySelector(".popup__input_type_description");

const profileForm = document.querySelector("#edit-profile-form");

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editPopup);
}

editProfileButton.addEventListener("click", handleOpenEditModal);

editPopupCloseButton.addEventListener("click", () => {
  closeModal(editPopup);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);

// -----------------------------
//  POPUP IMAGEN (ABRIR/CERRAR)
// -----------------------------

const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseButton = imagePopup.querySelector(".popup__close");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

imagePopupCloseButton.addEventListener("click", () => {
  closeModal(imagePopup);
});

// -----------------------------
//  TARJETAS DINÁMICAS (TEMPLATE)
// -----------------------------

const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content;

function getCardElement({ name = "Sin título", link = "./images/placeholder.jpg" } = {}) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;

  // Like
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });

  // Delete
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  // Abrir imagen en popup grande
  cardImage.addEventListener("click", () => {
    popupImage.src = link;
    popupImage.alt = name;
    popupCaption.textContent = name;

    openModal(imagePopup);
  });

  return cardElement;
}

function renderCard(cardData, container) {
  const cardElement = getCardElement(cardData);
  container.prepend(cardElement);
}

initialCards.forEach((cardData) => {
  renderCard(cardData, cardsList);
});
