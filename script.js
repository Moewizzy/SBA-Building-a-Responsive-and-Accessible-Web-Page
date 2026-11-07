// ==========================================
// 1. MENU BUTTON (phones)
// ==========================================
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');

menuBtn.addEventListener('click', () => {
  // Is the menu open right now? aria-expanded holds "true" or "false" as text.
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';

  // Flip it. Update aria-expanded so screen readers know, and the class so CSS shows it.
  menuBtn.setAttribute('aria-expanded', !isOpen);
  menu.classList.toggle('open');
});

// ==========================================
// 2. FORM CHECK
// ==========================================
const form = document.querySelector('#contact-form');
const success = document.querySelector('#success');

// Shows or clears the error for one field
function setError(field, message) {
  document.querySelector('#' + field.id + '-error').textContent = message;

  if (message) {
    field.setAttribute('aria-invalid', 'true'); // screen readers say "invalid"
  } else {
    field.removeAttribute('aria-invalid');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop the page from reloading
  success.textContent = '';

  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const subject = document.querySelector('#subject');
  const message = document.querySelector('#message');

  // Empty string means "no error"
  setError(name, name.value.trim() ? '' : 'Please enter your name.');
  setError(email, email.value.includes('@') ? '' : 'Please enter a valid email.');
  setError(subject, subject.value.trim() ? '' : 'Please enter a subject.');
  setError(message, message.value.trim() ? '' : 'Please call moe.');


  const firstBad = form.querySelector('[aria-invalid="true"]');
  if (firstBad) {
    firstBad.focus();
    return;
  }

  
  success.textContent = 'Thanks! Your message was sent.';
  form.reset();
});
