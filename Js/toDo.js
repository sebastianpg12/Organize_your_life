(function(){
    //var
    var list = document.getElementById("list"),
        taskInput = document.getElementById("taskInput"),
        btnNewTask = document.getElementById("btn-add")
    //functions
    var addTask = function(){
    var task = taskInput.value,
        newTask = document.createElement("li"),
        link = document.createElement("a"),
        content = document.createTextNode(task);

        if(task == ""){
            taskInput.setAttribute("placeholder", "Add a task");
            taskInput.className = "error";
            return false;
        }
        
        //agg the content of the link
        link.appendChild(content);
        //set a atribute href
        link.setAttribute("href","#");
        //agg link in the li
        newTask.appendChild(link);
        //agg the new task to the list
        list.appendChild(newTask);

        //The input empty later, of add a task
        taskInput.value="";

        for (var i = 0; i <= list.children.length -1; i++){
            list.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
    };
    var checkInput = function(){
         taskInput.className = "";
         taskInput.setAttribute("placeholder", "Add a task");
    };
    var deleteTask= function(){
          this.parentNode.removeChild(this);
    };
    //events
    
    //Agg task
    btnNewTask.addEventListener("click", addTask);

    //Check input
    taskInput.addEventListener("click", checkInput);

    //Deleting elements of the list
    for (var i = 0; i <= list.children.length -1; i++){
        list.children[i].addEventListener("click", deleteTask)
    }
}());