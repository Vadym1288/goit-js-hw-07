const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output')

input.addEventListener('input', () => {
  const currentText = input.value.trim();
  const generalText = currentText || 'Anonymous';
  output.textContent = generalText;
})