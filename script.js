let input = document.querySelector('#task-field');
let tasksList = document.getElementById('tasksList');
let form = document.querySelector('#form');
let Clear = document.getElementById('Clear');

// Load tasks from local storage when the page is loaded
    window.addEventListener('load' , ()=>{
        let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(task => addTask(task));
    })

// Add event listener to the form submission event
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let taskValue = input.value.trim(); //here trim method will remove the extra spaces around 
    if(taskValue!=''){
        addTask(taskValue);
        saveTaskToLocalStorage(taskValue);
        input.value = '';
    }
})
// Function to add a task to the task list (ul)
    const addTask = (task)=>{
        let newTask = document.createElement('li');
        let newTaskBtn = document.createElement('button');
        newTask.innerText = task;
        newTask.style.paddingTop = '10px';
        newTask.style.paddingLeft = '10px';
                newTaskBtn.innerText = 'Delete';
                tasksList.appendChild(newTask);
                newTask.appendChild(newTaskBtn);
                 newTaskBtn.style.marginLeft = '10px';
                 newTaskBtn.addEventListener('click',()=>{
                    deleteTask(task,newTask);
                 })
    }


// Function to save a task to local storage
      const saveTaskToLocalStorage = (task)=>{
        let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            storedTasks.push(task);
            localStorage.setItem('tasks',JSON.stringify(storedTasks)); //save back to local storage
      }

      const deleteTask   = (task,taskElement)=>{
        let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Remove the task from the array
        storedTasks = storedTasks.filter(storedTask=>storedTask!=task);

        // save the updated list back to local storage
        localStorage.setItem('tasks',JSON.stringify(storedTasks));
        
        // Remove the task element from the UI
            tasksList.removeChild(taskElement);
      }
// clear the list whenever needed
  Clear.addEventListener('click' , (e)=>{
// e.preventDefault();
    localStorage.removeItem('tasks');
    alert('cleared succesfully');
    tasksList.innerText = '';

  })

//   function deleteTask(task){
//     tasksList.task.value = '';
//   }
