const BTN_SUBMIT = document.querySelector('#btn-submit');
const agree = document.querySelector('#agree');

const ENABLE_SUBMIT = () => {
  BTN_SUBMIT.disabled = !agree.checked;
}
window.onload = () => {
  BTN_SUBMIT.addEventListener('click', (e) => {
    e.preventDefault();
  })
  agree.addEventListener('change', ENABLE_SUBMIT);
}


