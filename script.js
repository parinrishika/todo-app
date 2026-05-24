document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    
    if (taskText !== '') {
        const ul = document.getElementById('todo-list');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">X</button>
        `;
        
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
        
        ul.appendChild(li);
        input.value = '';
    }
});
