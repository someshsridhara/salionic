(function(){

var app = angular.module('sallogger', ['ionic'])

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

var tasks = [
    {
      id:'1',
      title: 'Task 1',
      count: 0
    },
    {
      id:'2',
      title: 'Task 2',
      count: 0
    },
    {
      id:'3',
      title: 'Task 3',
      count: 0
    },
    {
      id:'4',
      title: 'Task 4',
      count: 0
    },
    {
      id:'5',
      title: 'Task 5',
      count: 0
    }
  ];

app.controller('ListCtrl', function($scope){

 $scope.tasks = tasks;

 $scope.logTask = function(id){

  //console.log(id);
  for(var i=0; i < tasks.length; i++){

    if(tasks[i].id == id){
       tasks[i].count++;
       console.log(tasks[i].count)
    }
  }

 };

 $scope.undoTask = function(id){

    for(var i=0; i < tasks.length; i++){

    if(tasks[i].id == id && tasks[i].count != 0){
       tasks[i].count--;
       console.log(tasks[i].count)
    }
  }

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