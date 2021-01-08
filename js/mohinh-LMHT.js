var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "mohinh-lm1",
        ten: "Mô hình LMHT01",
        hinh: "mohinh-LMHT01.jpg",
        gia: 260000,
        sl: 0
    }, {
        id: "mohinh-lm2",
        ten: "Mô hình LMHT02",
        hinh: "mohinh-LMHT02.jpg",
        gia: 590000,
        sl: 0
    }, {
        id: "mohinh-lm3",
        ten: "Mô hình LMHT03",
        hinh: "mohinh-LMHT03.jpg",
        gia: 590000,
        sl: 0
    }, {
        id: "mohinh-lm4",
        ten: "Mô hình LMHT04",
        hinh: "mohinh-LMHT04.jpg",
        gia: 190000,
        sl: 0
    }, {
        id: "mohinh-lm5",
        ten: "Mô hình LMHT05",
        hinh: "mohinh-LMHT05.jpg",
        gia: 260000,
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