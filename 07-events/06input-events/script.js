const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  // console.log('Input');
  console.log(e.target.value);
  // heading.textContent = e.target.value;
}

//checkbox
function onChecked(e) {
  // console.log(e.target.checked);
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus() {
  console.log('Input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
}
function onBlur() {
  console.log('Input is not focused');
  itemInput.style.outlineStyle = 'none';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
