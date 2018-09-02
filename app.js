const app = angular.module('app', [])

app.service('hello', function () {
    console.log('------------ hello service ----------------')
    this.serviceName = 'hello-service-' + Math.random()
    this.hello = function (name) {
        return 'Hello, ' + name + '! (' + this.serviceName + ')'
    }
})

app.controller('MyController', function ($scope, hello) {
    $scope.message = hello.hello('AngularJS')
})