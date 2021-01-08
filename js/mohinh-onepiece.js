var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "mohinh-one1",
        ten: "Mô hình Onepiece01",
        hinh: "mohinh-onpiece01.jpg",
        gia: 3200000,
        sl: 0
    }, {
        id: "mohinh-one2",
        ten: "Mô hình Onepiece02",
        hinh: "mohinh-onpiece02.jpg",
        gia: 850000,
        sl: 0
    }, {
        id: "mohinh-one3",
        ten: "Mô hình Onepiece03",
        hinh: "mohinh-onpiece03.jpg",
        gia: 850000,
        sl: 0
    }, {
        id: "mohinh-one4",
        ten: "Mô hình Onepiece04",
        hinh: "mohinh-onpiece04.jpg",
        gia: 350000,
        sl: 0
    }, {
        id: "mohinh-one5",
        ten: "Mô hình Onepiece05",
        hinh: "mohinh-onpiece05.jpg",
        gia: 545000,
        sl: 0
    }, {
        id: "mohinh-one6",
        ten: "Mô hình Onepiece06",
        hinh: "mohinh-onpiece06.jpg",
        gia: 990000,
        sl: 0
    }, {
        id: "mohinh-one7",
        ten: "Mô hình Onepiece07",
        hinh: "mohinh-onpiece07.jpg",
        gia: 790000,
        sl: 0
    }, {
        id: "mohinh-one8",
        ten: "Mô hình Onepiece08",
        hinh: "mohinh-onpiece08.jpg",
        gia: 2500000,
        sl: 0
    }, {
        id: "mohinh-one9",
        ten: "Mô hình Onepiece09",
        hinh: "mohinh-onpiece09.jpg",
        gia: 875000,
        sl: 0
    }, {
        id: "mohinh-one10",
        ten: "Mô hình Onepiece10",
        hinh: "mohinh-onpiece10.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "mohinh-one11",
        ten: "Mô hình Onepiece11",
        hinh: "mohinh-onpiece11.jpg",
        gia: 1350000,
        sl: 0
    }, {
        id: "mohinh-one12",
        ten: "Mô hình Onepiece12",
        hinh: "mohinh-onpiece12.jpg",
        gia: 1200000,
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
    }, {
        id: "mohinh-one16",
        ten: "Mô hình Onepiece16",
        hinh: "mohinh-onpiece16.jpg",
        gia: 1800000,
        sl: 0
    }, {
        id: "mohinh-one17",
        ten: "Mô hình Onepiece17",
        hinh: "mohinh-onpiece17.jpg",
        gia: 2900000,
        sl: 0
    }, {
        id: "mohinh-one18",
        ten: "Mô hình Onepiece18",
        hinh: "mohinh-onpiece18.jpg",
        gia: 2900000,
        sl: 0
    }, {
        id: "mohinh-one19",
        ten: "Mô hình Onepiece19",
        hinh: "mohinh-onpiece19.jpg",
        gia: 3200000,
        sl: 0
    }, {
        id: "mohinh-one20",
        ten: "Mô hình Onepiece20",
        hinh: "mohinh-onpiece20.jpg",
        gia: 1800000,
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