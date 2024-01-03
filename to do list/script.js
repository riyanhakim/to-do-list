function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
      var li = document.createElement("li");
      li.innerText = taskInput.value;

      li.onclick = function() {
          li.classList.toggle("completed");
      };

      var deleteButton = document.createElement("button");
      deleteButton.innerText = "Sil";
      deleteButton.onclick = function() {
          li.remove();
      };

      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = "";
  }
}
