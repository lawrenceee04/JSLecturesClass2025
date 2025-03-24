// // Check if there is an item
// // Store the itemsList in the local storage
// localStorage.setItem('itemsList', JSON.stringify(itemsList));

// const storedItem = JSON.parse(localStorage.getItem('itemsList'));
// console.log(storedItem);

// const items = document.getElementsByClassName('item');
// const itemsList = new Array();

// storedItem.forEach((element) => {
//     itemsList.push(element.innerText);

//     const place = document.getElementById('item-list');

//     const list = document.createElement('li');
//     const node = document.createTextNode(`${element}`);

//     const button = document.createElement('button');
//     const a = document.createAttribute('class');
//     a.value = 'remove-item btn-link text-red';
//     button.setAttributeNode(a);

//     const xMark = document.createElement('i');
//     const b = document.createAttribute('class');
//     b.value = 'fa-solid fa-xmark';
//     xMark.setAttributeNode(b);

//     list.appendChild(node);
//     list.appendChild(button);
//     button.appendChild(xMark);

//     place.appendChild(list);
//     console.log(element.innerText);
// });

if (storedItem.length === 0) {
    document.getElementById('filter').hidden = true;
    document.getElementById('clear').hidden = true;

    const place = document.getElementById('item-list');

    const p = document.createElement('p');

    const text = document.createTextNode('No items on the list...');
    p.appendChild(text);

    place.appendChild(p);
} else {
    document.getElementById('filter').hidden = false;
    document.getElementById('clear').hidden = false;
}

// // List all items

// // Store the itemsList in the local storage
// localStorage.setItem('itemsList', JSON.stringify(itemsList));

// // Read the item from the local storage
// const storedItem = JSON.parse(localStorage.getItem('itemsList'));

// add item to local storage and modify DOM
function addItem() {
    const item = document.getElementById('item-input').value;

    itemsList.push(item);
    localStorage.setItem('itemsList', JSON.stringify(itemsList));

    const place = document.getElementById('item-list');

    const list = document.createElement('li');
    const node = document.createTextNode(`${item}`);

    const button = document.createElement('button');
    const a = document.createAttribute('class');
    a.value = 'remove-item btn-link text-red';
    button.setAttributeNode(a);

    const xMark = document.createElement('i');
    const b = document.createAttribute('class');
    b.value = 'fa-solid fa-xmark';
    xMark.setAttributeNode(b);

    list.appendChild(node);
    list.appendChild(button);
    button.appendChild(xMark);

    place.appendChild(list);

    console.log(item);
}

// Add event listener
document.getElementById('item-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Custom behavior here
    addItem();
});
