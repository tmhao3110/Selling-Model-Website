var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "tainghe-pro1",
        ten: "Tai nghe Airpod Pro01",
        hinh: "tainghe-pro1.jpg",
        gia: 795000,
        sl: 0
    }, {
        id: "tainghe-pro2",
        ten: "Tai nghe Airpod Pro02",
        hinh: "tainghe-pro2.jpg",
        gia: 795000,
        sl: 0
    }, {
        id: "tainghe-pro3",
        ten: "Tai nghe Airpod Pro03",
        hinh: "tainghe-pro3.jpg",
        gia: 795000,
        sl: 0
    }, {
        id: "tainghe-pro4",
        ten: "Tai nghe Airpod Pro04",
        hinh: "tainghe-pro4.jpg",
        gia: 795000,
        sl: 0
    }, {
        id: "tainghe-pro5",
        ten: "Tai nghe Airpod Pro05",
        hinh: "tainghe-pro5.jpg",
        gia: 795000,
        sl: 0
    }, {
        id: "tainghe-pro6",
        ten: "Tai nghe Airpod Pro06",
        hinh: "tainghe-pro6.jpg",
        gia: 795000,
        sl: 0
    }, {
        id: "tainghe-pro7",
        ten: "Tai nghe Airpod Pro07",
        hinh: "tainghe-pro7.jpg",
        gia: 795000,
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