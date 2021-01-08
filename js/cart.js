//   ANGULAR
var app = angular.module("myApp", []);
app.controller("proCtrl", function($scope) {
    $scope.cart = [];
    $scope.cart = JSON.parse(localStorage.getItem("cart"));
    $scope.total = 0;

    for (var i = 0; i < $scope.cart.length; i++) {
        $scope.total += $scope.cart[i].gia * $scope.cart[i].sl;
    }


    $scope.minus = function(id) {
        var check = false;

        for (var i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].id === id) {
                if ($scope.cart[i].sl > 1) {
                    $scope.cart[i].sl--;
                    localStorage.setItem("cart", JSON.stringify($scope.cart));
                } else {
                    $scope.cart.splice(i, 1);
                    localStorage.setItem("cart", JSON.stringify($scope.cart));
                }
            }
        }
        $scope.total = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            $scope.total += $scope.cart[i].gia * $scope.cart[i].sl;
        }
    };

    $scope.add = function(id) {
        var check = false;

        for (var i = 0; i < $scope.cart.length; i++) {
            if ($scope.cart[i].id === id) {
                $scope.cart[i].sl++;
                localStorage.setItem("cart", JSON.stringify($scope.cart));
            }
        }
        $scope.total = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            $scope.total += $scope.cart[i].gia * $scope.cart[i].sl;
        }
    };

    $scope.xoaCart = function() {
        $scope.cart = [];
        localStorage.setItem("cart", JSON.stringify($scope.cart));
        $scope.total = 0;
    }
});