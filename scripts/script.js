'use strict';

// Store all the modals and buttons in a variable
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Select all the btns with same class show-modal
// This will store a nodelist of all btns with class show-modal

const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal);
// for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
// }

let openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Displays the modal and blurs the background.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// Closes the modal and removes the blur background when clicked X
btnCloseModal.addEventListener('click', closeModal);

// Closes the modal and removes the blur background when clicked outside modal
overlay.addEventListener('click', closeModal);

// Keyboard events
// Closes the modal when esc key is pressed and modal is visible on screen.
document.addEventListener('keydown', function (event) {
  // console.log(event);
  if (event.key === 'Escape' && modal.classList.contains('hidden') === false) {
    closeModal();
    // console.log("Esc key pressed when modal is not hidden");
  }
});