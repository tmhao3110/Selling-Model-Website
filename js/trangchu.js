var app = angular.module("myApp", []);
app.controller("spnoibat", function($scope) {
    $scope.sanphamnoibat = [{
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
    }]
    $scope.show = function(id) {
        for (var i = 0; i < $scope.sanphamnoibat.length; i++) {
            if ($scope.sanphamnoibat[i].id == id) {
                $scope.p = angular.copy($scope.sanphamnoibat[i]);
            }
        }
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
            for (var i = 0; i < $scope.sanphamnoibat.length; i++) {
                if ($scope.sanphamnoibat[i].id === id) {
                    $scope.sanphamnoibat[i].sl -= -1;
                    $scope.cart.push(angular.copy($scope.sanphamnoibat[i]));
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
app.controller("xhmuahang", function($scope) {
    $scope.xuhuongmuahang = [{
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
    }]
    $scope.show = function(id) {
        for (var i = 0; i < $scope.xuhuongmuahang.length; i++) {
            if ($scope.xuhuongmuahang[i].id == id) {
                $scope.p = angular.copy($scope.xuhuongmuahang[i]);
            }
        }
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
            for (var i = 0; i < $scope.xuhuongmuahang.length; i++) {
                if ($scope.xuhuongmuahang[i].id === id) {
                    $scope.xuhuongmuahang[i].sl -= -1;
                    $scope.cart.push(angular.copy($scope.xuhuongmuahang[i]));
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