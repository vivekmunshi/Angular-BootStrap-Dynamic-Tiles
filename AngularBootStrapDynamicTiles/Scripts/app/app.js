var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.Name = "Selwin";
    $scope.Data = [{
        "id": 1,
        "name": "Kentucky",
        "reviewDate": "12-07-2018",
        "color": "purple"
    }, {
        "id": 2,
        "name": "Oregon",
        "reviewDate": "13-08-2018",
        "color": "orange"
    }, {
        "id": 3,
        "name": "Rhode Island",
        "reviewDate": "6-05-2018",
        "color": "blue"
    }, {
        "id": 4,
        "name": "Colorado",
        "reviewDate": "1-05-2018",
        "color": "green"
    }, {
        "id": 5,
        "name": "Florida",
        "reviewDate": "4-05-2018",
        "color": "blue"
    }]
});