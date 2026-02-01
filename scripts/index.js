const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
    },
      {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"

    },
      {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"

    },
      {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
      {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    },

];
// Botón y popup
const editProfileButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('#edit-popup');
const editPopupCloseButton = editPopup.querySelector('.popup__close');

// Texto del perfil
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// Inputs del formulario
const nameInput = editPopup.querySelector('.popup__input_type_name');
const descriptionInput = editPopup.querySelector('.popup__input_type_description');

// Formulario
const profileForm = document.querySelector('#edit-profile-form');

// Abrir popup
function openModal(modal) {
  modal.classList.add('popup_is-opened');
}

// Cerrar popup
function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
}

// Rellenar form con datos actuales
function fillProfileForm() {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}

// Abrir popup + rellenar
function handleOpenEditModal() {
  fillProfileForm();
  openModal(editPopup);
}

// Enviar formulario
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;

  closeModal(editPopup);
}

// Listeners
editProfileButton.addEventListener('click', handleOpenEditModal);

editPopupCloseButton.addEventListener('click', () => {
  closeModal(editPopup);
});

profileForm.addEventListener('submit', handleProfileFormSubmit);

initialCards.forEach(function(card) {
    console.log(card.name);
});