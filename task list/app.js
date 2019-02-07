// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter =  document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();
// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove easy Event
    taskList.addEventListener('ciick',removeTask );
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
}

// Add Task
function addTask(e) {
   if(taskIput.value === '') {
       alert('add a task');
   }
//    Create il element
const li = document.createElement('li');
// Add lass
li.className = 'collection-item';
// Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
// Create new link element
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class"fa fa-remove"></i>';
// Append the link to li
li.appendChild(link);

// Append li to ul

taskList.appendChild(li);

// Clear input
taskInput.value = '';

 e.preventAefault();
}

// Remove Task 
 function removeTask(e) {
     if(e.target.parrentElement.classList.contains('delete-item')) {
         if(confirm('are you sure?')) {
             e.target.parentElement.parentElement.remove();
         }

     }
    
 }

//   Clear Tasks 
 function clearTasks() {
     
 }