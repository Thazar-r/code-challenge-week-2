document.addEventListener('DOMContentLoaded', () => {
    // This event listener waits for the DOM content to be fully loaded before executing its callback function.
    const addItemButton = document.getElementById('add-btn');
    const clearListButton = document.getElementById('clear-btn');
    const itemInput = document.getElementById('item-input');
    const listContainer = document.getElementById('list-container');
    // These variables capture references to important elements in the DOM:
    // - addItemButton: Button to add new items to the list.
    // - clearListButton: Button to clear all items from the list.
    // - itemInput: Input field where users enter new items.
    // - listContainer: Container (likely an <ul> or <ol>) where list items (<li>) will be appended.

    addItemButton.addEventListener('click', () => {
         // This event listener listens for clicks on the addItemButton.
        const itemText = itemInput.value.trim();
        // Extracts the value from the input field and trims any leading or trailing whitespace.
        if (itemText !== '') {
             // Checks if the trimmed itemText is not an empty string.
            const listItem = document.createElement('li');
            // Creates a new <li> element.
            listItem.textContent = itemText;
             // Sets the text content of the <li> to the trimmed itemText.
            listContainer.appendChild(listItem);
             // Appends the newly created <li> to the listContainer (<ul> or <ol>).
            itemInput.value = '';
              // Resets the input field to an empty string after adding the item.
        }
    });

    clearListButton.addEventListener('click', () => {
         // This event listener listens for clicks on the clearListButton.
        listContainer.innerHTML = '';
         // Sets the innerHTML of listContainer to an empty string, effectively clearing all list items.
    });
});
