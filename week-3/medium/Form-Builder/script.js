const fieldType = document.getElementById("field-type");
const fieldLabel = document.getElementById("field-label");
const addFieldButton = document.getElementById("add-field");
const previewContainer = document.getElementById("preview-container");

addFieldButton.addEventListener('click', () => {
  const type = fieldType.value;
  const label = fieldLabel.value.trim();

  if (!label) {
    alert("Please enter a Label");
    return;
  }

  // Clear initial message if present
  if (previewContainer.children[0]?.tagName === 'P') {
    previewContainer.innerHTML = '';
  }

  // Create field wrapper
  const fieldWrapper = document.createElement('div');
  fieldWrapper.className = 'field';

  // Add label
  const fieldLabelElement = document.createElement('label');
  fieldLabelElement.textContent = label;

  // Add Input
  let fieldInput;

  if (type === 'text') {
    fieldInput = document.createElement('input');
    fieldInput.type = 'text';
    fieldInput.placeholder = label;
  } else if (type === 'checkbox') {
    fieldInput = document.createElement('input'); // Fixed typo here
    fieldInput.type = 'checkbox';
  } else if (type === 'radio') {
    fieldInput = document.createElement('input');
    fieldInput.type = 'radio';
  }

  // Remove button
  const removeButton = document.createElement('span');
  removeButton.textContent = 'Remove';
  removeButton.onclick = () => fieldWrapper.remove();

  // Append elements to field wrapper
  fieldWrapper.appendChild(fieldLabelElement);
  fieldWrapper.appendChild(fieldInput);
  fieldWrapper.appendChild(removeButton);

  // Append field wrapper to preview container
  previewContainer.appendChild(fieldWrapper);

  // Clear input field
  fieldLabel.value = '';
});
