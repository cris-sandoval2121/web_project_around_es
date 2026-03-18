// utils.js

export function openModal(modal) {
  modal.classList.add("popup_is-opened");
  // Opcional recomendado: agregar aquí el listener para cerrar con la tecla 'Escape'
}

export function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  // Opcional recomendado: remover aquí el listener de la tecla 'Escape'
}