(function(){

var app = angular.module('sallogger', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('list', {
    url: '/list' ,
    templateUrl: 'templates/list.html'

  });

  $stateProvider.state('edit', {
    url: '/edit',
    templateUrl: 'templates/edit.html',
    controller: 'EditCtrl'

  });

  $urlRouterProvider.otherwise('/list');

});

var tasks = [
    {
      id:'1',
      title: 'Task 1',
      count: 0,
      target: 5
    },
    {
      id:'2',
      title: 'Task 2',
      count: 0,
      target: 5
    },
    {
      id:'3',
      title: 'Task 3',
      count: 0,
      target: 5
    },
    {
      id:'4',
      title: 'Task 4',
      count: 0,
      target: 5
    },
    {
      id:'5',
      title: 'Task 5',
      count: 0,
      target: 5
    }
  ];

  function getTask(taskId){
    for(var i=0; i < tasks.length; i++){
      if(tasks[i].id == taskId){
        return tasks[i];
      }

    }
    return undefined;
  }

  function updateTask(task){
    for(var i=0; i < tasks.length; i++){
      if(tasks[i].id == task.id){
        tasks[i] = task;
        return;
      }
    }
  }

app.controller('ListCtrl', function($scope){

 $scope.tasks = tasks;

 var widthColor

 $scope.logTask = function(id){

  //console.log(id);
  for(var i=0; i < tasks.length; i++){

    if(tasks[i].id == id){
       tasks[i].count++;
      }
    }
  }

  $scope.changeWidth = function(id){

      for(var i=0; i < tasks.length; i++){

          if(tasks[i].id == id){
             widthColor = tasks[i].count / tasks[i].target;
             console.log(widthColor);
             widthColor = widthColor * 100;

            return {

            'width' : widthColor + "%",
            'transition': 'width 1s'

            };
          }
      }

  }


 $scope.undoTask = function(id){

    for(var i=0; i < tasks.length; i++){

    if(tasks[i].id == id && tasks[i].count != 0){
       tasks[i].count--;
       console.log(tasks[i].count)
    }
  }

 }

});

app.controller('EditCtrl', function($scope, $state){

$scope.tasks = tasks;

$scope.save = function(){

  tasks = $scope.tasks;

  $state.go('list');
}

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
     cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}());