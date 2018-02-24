(function(){
    angular.module('app').controller("ToDoController", ToDoController)

    function ToDoController() {
        var td = this;
        td.list = [];
        td.addToDo = function(){
            td.list.push(td.newToDo);
            td.newToDo = '';
        }
        td.remove = function(item){
            var itemIndex = td.list.indexOf(item);
            td.list.splice(itemIndex, 1);
        }







    }

})();