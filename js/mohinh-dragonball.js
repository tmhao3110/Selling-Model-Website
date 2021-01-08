var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "mohinh-da1",
        ten: "Mô hình Dragon Ball01",
        hinh: "mohinh-dragonball01.jpg",
        gia: 550000,
        sl: 0
    }, {
        id: "mohinh-da2",
        ten: "Mô hình Dragon Ball02",
        hinh: "mohinh-dragonball02.jpg",
        gia: 850000,
        sl: 0
    }, {
        id: "mohinh-da3",
        ten: "Mô hình Dragon Ball03",
        hinh: "mohinh-dragonball03.jpg",
        gia: 750000,
        sl: 0
    }, {
        id: "mohinh-da4",
        ten: "Mô hình Dragon Ball04",
        hinh: "mohinh-dragonball04.jpg",
        gia: 750000,
        sl: 0
    }, {
        id: "mohinh-da5",
        ten: "Mô hình Dragon Ball05",
        hinh: "mohinh-dragonball05.jpg",
        gia: 425000,
        sl: 0
    }]

    $scope.show = function(id) {
        for (var i = 0; i < $scope.showSanpham.length; i++) {
            if ($scope.showSanpham[i].id === id) {
                $scope.p = angular.copy($scope.showSanpham[i]);
            }
        }
    }

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.showSanpham.length / 9);
    $scope.first = function() {
        $scope.begin = 0;
    }
    $scope.prev = function() {
        if ($scope.begin > 0) {
            $scope.begin -= 9;
        }
    }
    $scope.next = function() {
        if ($scope.begin < ($scope.pageCount - 1) * 9) {
            $scope.begin += 9;
        }
    }
    $scope.last = function() {
            $scope.begin = ($scope.pageCount - 1) * 9;
        }
        //GIO HANG
    $scope.cart = [{}];
    $scope.cart = JSON.parse(localStorage.getItem("cart"));
    localStorage.setItem("cart", JSON.stringify($scope.cart));
    // CHECK GIO HANG THEO MA SAN PHAM
    $scope.check = function(id) {

            $scope.cart = JSON.parse(localStorage.getItem("cart"));
            if ($scope.cart != null) {
                for (var i = 0; i < $scope.cart.length; i++) {
                    if ($scope.cart[i].id === id) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
        // THEM MOI 1 SAN PHAM VAO GIO
    $scope.themmoi = function(id) {
            if ($scope.cart == null) {
                $scope.cart = [];
            }
            for (var i = 0; i < $scope.showSanpham.length; i++) {
                if ($scope.showSanpham[i].id === id) {
                    $scope.showSanpham[i].sl -= -1;
                    $scope.cart.push(angular.copy($scope.showSanpham[i]));
                }
            }
        }
        // ADDTOCART CONTROL
    $scope.addToCart = function(id) {
        if (!$scope.check(id)) {
            $scope.themmoi(id);
        } else {
            for (var i = 0; i < $scope.cart.length; i++) {
                if ($scope.cart[i].id === id) {
                    $scope.cart[i].sl += 1;
                }
            }
        }
        localStorage.setItem("cart", JSON.stringify($scope.cart));
    }
});