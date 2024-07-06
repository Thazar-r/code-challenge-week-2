document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-btn');
    const clearListButton = document.getElementById('clear-btn');
    const itemInput = document.getElementById('item-input');
    const listContainer = document.getElementById('list-container');
    
    addItemButton.addEventListener('click', () => {
        const itemText = itemInput.value.trim();
        if (itemText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            listContainer.appendChild(listItem);
            itemInput.value = '';
        }
    });

    clearListButton.addEventListener('click', () => {
        listContainer.innerHTML = '';
    });
});
