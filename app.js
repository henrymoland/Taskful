const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const generateTemplate = (todo) => {
    // Template string to get li 
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>
    `
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    // get the input from the input field
    const todo = addForm.add.value.trim();

    // check to see if the input field has length. 
    // If length add todo and reset input field.
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// Delete Todo
list.addEventListener('click', e => {
    // If target element class contain delete. Remove the li
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// Filter Todos
const filterTodos = (searchTerm) => {
    // If input contains search term add a filterd class
    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchTerm))
    .forEach((todo) => todo.classList.add('filtered'));
    
    // If input do not contains search term remove filtered class
    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchTerm))
    .forEach((todo) => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const searchTerm = search.value.trim().toLowerCase();
    filterTodos(searchTerm);
})