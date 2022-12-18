export default function createField() {
  const field = document.querySelector('.field');
  const n = 4;

  for (let i = 0; i < 4 ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    field.appendChild(cell)
  }
}
