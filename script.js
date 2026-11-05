let todos = JSON.parse(localStorage.getItem("todos")) || []; 
    function addTodo() {
    let li = document.createElement("li");

    li.innerHTML = '<input type="checkbox"> ' + todoField.value + 
    ' <button class="bearbeiten" onclick="editTodo(this)">Bearbeiten</button> <button class="loeschen" onclick="deleteTodo(this)">Löschen</button>';

    todoList.appendChild(li);
    todos.push(todoField.value); 
    localStorage.setItem("todos", JSON.stringify(todos))

    todoField.value = '';
}

function deleteTodo(button) {
    button.parentElement.remove();

    todos = Array.from(todoList.children).map(function(li) {
        return li.childNodes[1].textContent;
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function editTodo(button) {
    let li = button.parentElement; 
    let neuerText = prompt("Aufgabe bearbeiten:"); 

    if (neuerText !== null && neuerText.trim() !== "") {
        li.childNodes[1].textContent = neuerText;
    }
    todos = Array.from(todoList.children).map(function(li) {
        return li.childNodes[1].textContent;
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

todos.forEach(function(todo) {
    let li = document.createElement("li");

    li.innerHTML = '<input type="checkbox"> ' + todo + 
    ' <button class="bearbeiten" onclick="editTodo(this)">Bearbeiten</button> <button class="loeschen" onclick="deleteTodo(this)">Löschen</button>'
    todoList.appendChild(li);
})