

const addItemButton = document.getElementById('addItemButton');
const overlay = document.getElementById('overlay');

addItemButton.addEventListener('click', function() {
    overlay.style.display = 'block'; // Display the overlay when the button is clicked
});



document.getElementById("addTaskButton").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        
        addTask();
    }
});


function addTask() {
    const inputField = document.getElementById('taskInput');
    const taskText = inputField.value;

    // Create a new list item element
    const listItem = document.createElement('li');
    listItem.style.fontSize = '20px';
    listItem.classList.add('task-item');


    // Create a circular selector
    const selector = document.createElement('span');
    selector.classList.add('selector');

    // Add an event listener to the selector
selector.addEventListener('click', function() {
    // Toggle the visibility of the remove button
    removeButton.style.display = removeButton.style.display === 'none' ? 'block' : 'none';
    this.classList.toggle('selected');
});

    // Append the selector to the list item
    listItem.appendChild(selector);

    // Set the text content of the list item to the value entered by the user
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    listItem.appendChild(taskTextElement);

     // Create a remove button
     const removeButton = document.createElement('button');
     removeButton.textContent = '❌'; // You can use any symbol or text for the remove button
     removeButton.classList.add('remove-button');
     removeButton.style.display = 'none'; 
     removeButton.addEventListener('click', function() {
         // Remove the corresponding task item when the remove button is clicked
         listItem.remove();
     });
     // Append the remove button to the list item
     listItem.appendChild(removeButton);
     

    // Append the new list item to the task list
    const taskList = document.querySelector('.task-list');
    taskList.appendChild(listItem);


    // Clear the input field after adding the task
    inputField.value = '';

    // Hide the overlay
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    
}
