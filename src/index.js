import ('./styles/style.css');

// Declaration of todo
let toDo = {
    id : 0,
    content : "",
    staTus : ""
}

// Add new user to Local Storage
function addToUserList(activeUser, nik) {
    var val = localStorage[activeUser] ? JSON.parse(localStorage[activeUser]) : [];
    val.push(nik.toString());
    localStorage[activeUser] = JSON.stringify(val);
  }

//   Add new todo into list
  function newTodo(nik, todo){
    let val = localStorage[nik] ? JSON.parse(localStorage[nik]) : [];
    val.push(todo);
    localStorage[nik] = JSON.stringify(val);
}

