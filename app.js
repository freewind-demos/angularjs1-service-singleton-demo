const app = angular.module('app', [])

app.factory('randomNumber', function () {
    return function () {
        return Math.random()
    }
})

app.controller('MyController', function ($scope, randomNumber) {
    $scope.message = 'Random number: ' + randomNumber()
})