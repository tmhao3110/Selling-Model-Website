var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "ao-hoodie1",
        ten: "Áo hoodie01",
        hinh: "aohoodie1.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie2",
        ten: "Áo hoodie02",
        hinh: "aohoodie2.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie3",
        ten: "Áo hoodie03",
        hinh: "aohoodie3.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie4",
        ten: "Áo hoodie04",
        hinh: "aohoodie4.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie5",
        ten: "Áo hoodie05",
        hinh: "aohoodie5.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie6",
        ten: "Áo hoodie06",
        hinh: "aohoodie6.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie7",
        ten: "Áo hoodie07",
        hinh: "aohoodie7.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie8",
        ten: "Áo hoodie08",
        hinh: "aohoodie8.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie9",
        ten: "Áo hoodie09",
        hinh: "aohoodie9.jpg",
        gia: 500000,
        sl: 0
    }, {
        id: "ao-hoodie10",
        ten: "Áo hoodie10",
        hinh: "aohoodie10.jpg",
        gia: 500000,
        sl: 0
    }]

    $scope.show = function(id) {
        for (var i = 0; i < $scope.showSanpham.length; i++) {
            if ($scope.showSanpham[i].id == id) {
                $scope.p = angular.copy($scope.showSanpham[i]);
            }
        }
    }

    $scope.begin = 0;
    $scope.pageCount = Math.ceil($scope.showSanpham.length / 9);
    console.log(Math.ceil($scope.showSanpham.length / 9));
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