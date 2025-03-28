const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditmode = false;

// Functions
function checkUI() {
    const items = itemList.querySelectorAll('li');
    isEditmode = false;
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

function onAddItemSubmit(e) {
    e.preventDefault();
    const newItem = itemInput.value;

    // Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    addItemToDOM(newItem);
    addItemToStorage(newItem);
    checkUI();

    itemInput.value = '';
}

function addItemToDOM(item) {
    // Create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);
}

function addItemToStorage(item) {
    const itemsFromStorage = getItemFromStorage();

    itemsFromStorage.push(item);
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fas fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function displayItems() {
    const itemsFromStorage = getItemFromStorage();

    itemsFromStorage.forEach((item) => addItemToDOM(item));
    checkUI();
}

function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        setItemToEdit(e.target);
    }
}

function setItemToEdit(item) {
    isEditmode = true;
    itemInput.value = item.textContent;

    formBtn.classList.add('update-mode');

    formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';

    item.classList.add('edit-mode');

    removeItem(item);
}

function removeItem(item) {
    if (confirm('Are you sure?')) {
        item.remove();
        removeItemFromStorage(item.textContent);
        checkUI();
    }
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemFromStorage();
    console.log(itemsFromStorage);
    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
    console.log(itemsFromStorage);
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    // Clear from local storage
    localStorage.removeItem('items');
    checkUI();
}

function filterItems() {
    const text = itemFilter.value.toLowerCase();
    const items = itemList.querySelectorAll('li');

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(text) !== -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initialization
function init() {
    // Event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);
    checkUI();
}

init();
