(function(){
    angular.module('app').controller("ToDoController", ToDoController)

    function ToDoController() {
        var td = this;
        td.list = [];
        td.addToDo = function(){
            if (!td.newToDo){
                return;
            }
            td.list.push(td.newToDo);
            td.newToDo = '';
        }
        td.remove = function(index){
            td.list.splice(index, 1);
        }







    }

})();