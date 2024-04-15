// Function to add a new task

function addTask() {
  var inputField=document.getElementById("taskInput");
  var taskText=inputField.value;

  if (taskText.trim() !=="") {
    var taskList=document.getElementById("taskList");
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(taskText));
    taskList.appendChild(li);
    inputField.value="";
  };
};
