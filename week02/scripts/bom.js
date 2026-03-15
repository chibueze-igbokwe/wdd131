// week02/scripts/bom.js

/**
 * Author: Igbokwe Chibueze
 * Purpose: Handling DOM Events for the BOM Top 10 app.
 */

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add Chapter Event Listener
button.addEventListener('click', () => {
    // 1. Check if the input is not blank (trimming whitespace)
    if (input.value.trim() !== '') {
        
        // 2. Create the list item and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // 3. Populate the elements
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // 4. Add delete functionality to the specific button
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // 5. Append and clean up the UI
        li.append(deleteButton);
        list.append(li);

        input.value = ''; // Clear input
        input.focus();    // Set focus back to input
    } else {
        // Optional: Provide feedback or simply return focus
        input.focus();
    }
});