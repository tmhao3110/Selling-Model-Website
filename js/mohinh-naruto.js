var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "mohinh-na1",
        ten: "Mô hình Naruto01",
        hinh: "mohinh-naruto01.jpg",
        gia: 1800000,
        sl: 0
    }, {
        id: "mohinh-na2",
        ten: "Mô hình Naruto02",
        hinh: "mohinh-naruto02.jpg",
        gia: 2900000,
        sl: 0
    }, {
        id: "mohinh-na3",
        ten: "Mô hình Naruto03",
        hinh: "mohinh-naruto03.jpg",
        gia: 1200000,
        sl: 0
    }, {
        id: "mohinh-na4",
        ten: "Mô hình Naruto04",
        hinh: "mohinh-naruto04.jpg",
        gia: 850000,
        sl: 0
    }, {
        id: "mohinh-na5",
        ten: "Mô hình Naruto05",
        hinh: "mohinh-naruto05.jpg",
        gia: 850000,
        sl: 0
    }, {
        id: "mohinh-na6",
        ten: "Mô hình Naruto06",
        hinh: "mohinh-naruto06.jpg",
        gia: 650000,
        sl: 0
    }, {
        id: "mohinh-na7",
        ten: "Mô hình Naruto07",
        hinh: "mohinh-naruto07.jpg",
        gia: 650000,
        sl: 0
    }, {
        id: "mohinh-na8",
        ten: "Mô hình Naruto08",
        hinh: "mohinh-naruto08.jpg",
        gia: 750000,
        sl: 0
    }, {
        id: "mohinh-na9",
        ten: "Mô hình Naruto09",
        hinh: "mohinh-naruto09.jpg",
        gia: 680000,
        sl: 0
    }, {
        id: "mohinh-na10",
        ten: "Mô hình Naruto10",
        hinh: "mohinh-naruto10.jpg",
        gia: 750000,
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