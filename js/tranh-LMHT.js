var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "tranh-lm1",
        ten: "Tranh treo tường LMHT01",
        hinh: "tranh-LMHT1.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm2",
        ten: "Tranh treo tường LMHT02",
        hinh: "tranh-LMHT2.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm3",
        ten: "Tranh treo tường LMHT03",
        hinh: "tranh-LMHT3.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm4",
        ten: "Tranh treo tường LMHT04",
        hinh: "tranh-LMHT4.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm5",
        ten: "Tranh treo tường LMHT05",
        hinh: "tranh-LMHT5.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm6",
        ten: "Tranh treo tường LMHT06",
        hinh: "tranh-LMHT6.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm7",
        ten: "Tranh treo tường LMHT07",
        hinh: "tranh-LMHT7.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm8",
        ten: "Tranh treo tường LMHT08",
        hinh: "tranh-LMHT8.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm9",
        ten: "Tranh treo tường LMHT09",
        hinh: "tranh-LMHT9.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-lm10",
        ten: "Tranh treo tường LMHT10",
        hinh: "tranh-LMHT10.jpg",
        gia: 295000,
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