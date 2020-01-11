let button = document.querySelector("#to1");
let write = document.querySelector("#todo");
let listGroup = document.querySelector(".list-group");
let getCardBody = document.querySelectorAll(".card-body")[0];
let getCardBody2 = document.querySelectorAll(".card-body")[1];
let filter = document.querySelector("#filter");
let clear = document.querySelector("#clear-todos");

documentList();

function documentList() {
    button.addEventListener("click", go);
    document.addEventListener("DOMContentLoaded", loadAllTodo);
    getCardBody2.addEventListener("click", deleteToDo);
    filter.addEventListener("keyup", filtertodo);
    clear.addEventListener("click", clearAll);
}

function clearAll(e) {
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        while (listGroup.firstElementChild != null) {
            listGroup.removeChild(listGroup.firstElementChild);
        }
        localStorage.removeItem("todos");
        showAlert("success", "Todoları silme işlemi başarılı..");
        write.value = "";
    }
}

function filtertodo(e) {
    let value = e.target.value.toLowerCase();
    let listItem = document.querySelectorAll(".list-group-item");

    listItem.forEach(function (filtre) {
        let text = filtre.textContent.toLowerCase();

        if (text.indexOf(value) === -1) {
            filtre.setAttribute("style", "display : none !important");
        } else {
            filtre.setAttribute("style", "display : block");
        }
    })
}

function deleteToDo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
        deleteTodoLocaleSto(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo silme işlemi başarılı..");
    }
}

function deleteTodoLocaleSto(delTodo) {
    let todos = LocalStorageControl();

    todos.forEach(function (todo, index) {
        if (todo === delTodo) {
            todos.splice(index, 1);
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodo() {
    let todos = LocalStorageControl();

    todos.forEach(function (todo) {
        createList(todo);
    })
}

function go(e) {
    let value = write.value.trim();
    let todos = LocalStorageControl();
    let control = false;

    todos.forEach(function (todo) {
        if (todo === value) {
            control = true;
        }
    })

    if (value === "") {
        showAlert("danger", "Lütfen bir todo girin...");
    } else if (control === true) {
        showAlert("warning", "Aynı todo yüklü !!");
    } else {
        createList(value);
        addTodoLocalStorage(value);
        showAlert("success", "Todo ekleme işlemi başarılı..");
    }

    e.preventDefault();
}

function LocalStorageControl() {
    return localStorage.getItem("todos") === null ? [] : JSON.parse(localStorage.getItem("todos"));
}

function addTodoLocalStorage(value) {
    let todos = LocalStorageControl();
    todos.push(value);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(type, message) {
    let newDiv = document.createElement("div");
    newDiv.className = `alert alert-${type}`;
    newDiv.textContent = message;
    getCardBody.appendChild(newDiv);
    setTimeout(function () {
        newDiv.remove();
    }, 1000);
}

function createList(value) {

    // li oluşturucam
    let eventLi = document.createElement("li");
    eventLi.className = "list-group-item d-flex justify-content-between";

    // a href link oluşturma
    let link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //node text oluşturma
    eventLi.appendChild(document.createTextNode(value));
    eventLi.appendChild(link);

    //ul ye li tagını ekleme
    listGroup.appendChild(eventLi);

    //ekleme işleminden sonra inputu temizleme
    write.value = "";
}