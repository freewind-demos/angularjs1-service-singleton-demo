const app = angular.module('app', [])

app.service('hello', function () {
    this.serviceName = 'hello-service'
    this.hello = function (name) {
        alert('Hello, ' + name + '! (from ' + this.serviceName + ')')
    }
})

app.controller('MyController', function ($scope, hello) {
    $scope.userName = 'AngularJS'
    $scope.sayHello = function () {
        hello.hello($scope.userName)
    }
})