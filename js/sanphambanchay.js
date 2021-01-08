var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "mohinh-one21",
        ten: "MÔ HÌNH ITACHI SASUNO",
        hinh: "prod_2.jpg",
        gia: 15800000,
        sl: 0
    }, {
        id: "mohinh-one22",
        ten: "MÔ HÌNH ENEL CHÚA TRỜI",
        hinh: "prod_3.jpg",
        gia: 14500000,
        sl: 0
    }, {
        id: "mohinh-one23",
        ten: "MÔ HÌNH SANJI VINSMOKE",
        hinh: "prod_4.jpg",
        gia: 6500000,
        sl: 0
    }, {
        id: "mohinh-one24",
        ten: "MÔ HÌNH PORTGAS D. ACE",
        hinh: "prod_5.jpg",
        gia: 10200000,
        sl: 0
    }, {
        id: "mohinh-one13",
        ten: "Mô hình Onepiece13",
        hinh: "mohinh-onpiece13.jpg",
        gia: 1200000,
        sl: 0
    }, {
        id: "mohinh-one14",
        ten: "Mô hình Onepiece14",
        hinh: "mohinh-onpiece14.jpg",
        gia: 3500000,
        sl: 0
    }, {
        id: "mohinh-one15",
        ten: "Mô hình Onepiece15",
        hinh: "mohinh-onpiece15.jpg",
        gia: 2900000,
        sl: 0
    }];

    $scope.show = function(id) {
        for (var i = 0; i < $scope.showSanpham.length; i++) {
            if ($scope.showSanpham[i].id == id) {
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