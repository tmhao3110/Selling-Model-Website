var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "tranh-na1",
        ten: "Tranh treo tường Naruto01",
        hinh: "tranh-naruto1.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na2",
        ten: "Tranh treo tường Naruto02",
        hinh: "tranh-naruto2.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na3",
        ten: "Tranh treo tường Naruto03",
        hinh: "tranh-naruto3.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na4",
        ten: "Tranh treo tường Naruto04",
        hinh: "tranh-naruto4.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na5",
        ten: "Tranh treo tường Naruto05",
        hinh: "tranh-naruto5.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na6",
        ten: "Tranh treo tường Naruto06",
        hinh: "tranh-naruto6.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na7",
        ten: "Tranh treo tường Naruto07",
        hinh: "tranh-naruto7.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na8",
        ten: "Tranh treo tường Naruto08",
        hinh: "tranh-naruto8.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na9",
        ten: "Tranh treo tường Naruto09",
        hinh: "tranh-naruto9.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-na10",
        ten: "Tranh treo tường Naruto10",
        hinh: "tranh-naruto10.jpg",
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