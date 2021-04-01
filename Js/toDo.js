(function(){
    //var
    var list = document.getElementById("list"),
        taskInput = document.getElementById("taskInput"),
        btnNewTask = document.getElementById("btn-add")
    //functions
    var addTask = function(){
        alert("agg task")
    };
    var checkInput = function(){
        alert("agg check")
    };
    var deleteTask= function(){
        alert("deletetask")
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