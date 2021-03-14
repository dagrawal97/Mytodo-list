//selectors
const myInput = document.querySelector(".addinput");
const myButton = document.querySelector(".add-btn");
const myList = document.querySelector(".myTask");

//event listeners
myButton.addEventListener("click", add);
myList.addEventListener("click", delete_check);

//functions
function add(e) {
  //prevnt form submitting
  e.preventDefault();
  console.log("Added Successfully");
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = myInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //checked button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //append to list
  myList.appendChild(todoDiv);
  //clear input value
  myInput.value = "";
}

function delete_check(event) {
//   console.log(e.target + "bhai");
  const item = event.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
