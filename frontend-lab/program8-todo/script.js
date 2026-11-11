var form = document.getElementById("taskForm");
var input = document.getElementById("taskInput");
var list = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var text = input.value.trim();
    if (text === "") {
        alert("Please enter a task");
        return;
    }

    addTask(text);
    input.value = "";
});

function addTask(text) {
    var li = document.createElement("li");

    var span = document.createElement("span");
    span.textContent = text;

    // click on the task text to mark it completed / not completed
    span.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        list.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}
