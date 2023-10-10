// script.js
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span class="task-item" title="${taskText}">${taskText}</span>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            `;

            taskList.appendChild(taskItem);

            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', function (e) {
        const target = e.target;

        if (target.classList.contains('complete')) {
            const task = target.parentElement;
            task.classList.toggle('completed');
        } else if (target.classList.contains('delete')) {
            const task = target.parentElement;
            taskList.removeChild(task);
        }
    });
});
