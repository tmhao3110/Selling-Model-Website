var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "tainghe-air1",
        ten: "Tai nghe Airpod01",
        hinh: "tainghe1.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air2",
        ten: "Tai nghe Airpod02",
        hinh: "tainghe2.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air3",
        ten: "Tai nghe Airpod03",
        hinh: "tainghe3.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air4",
        ten: "Tai nghe Airpod04",
        hinh: "tainghe4.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air5",
        ten: "Tai nghe Airpod05",
        hinh: "tainghe5.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air6",
        ten: "Tai nghe Airpod06",
        hinh: "tainghe6.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air7",
        ten: "Tai nghe Airpod07",
        hinh: "tainghe7.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air8",
        ten: "Tai nghe Airpod08",
        hinh: "tainghe8.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air9",
        ten: "Tai nghe Airpod09",
        hinh: "tainghe9.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air10",
        ten: "Tai nghe Airpod10",
        hinh: "tainghe10.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air11",
        ten: "Tai nghe Airpod11",
        hinh: "tainghe11.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air12",
        ten: "Tai nghe Airpod12",
        hinh: "tainghe12.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air13",
        ten: "Tai nghe Airpod13",
        hinh: "tainghe13.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air14",
        ten: "Tai nghe Airpod14",
        hinh: "tainghe14.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air15",
        ten: "Tai nghe Airpod15",
        hinh: "tainghe15.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air16",
        ten: "Tai nghe Airpod16",
        hinh: "tainghe16.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air17",
        ten: "Tai nghe Airpod17",
        hinh: "tainghe17.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air18",
        ten: "Tai nghe Airpod18",
        hinh: "tainghe18.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air19",
        ten: "Tai nghe Airpod19",
        hinh: "tainghe19.jpg",
        gia: 395000,
        sl: 0
    }, {
        id: "tainghe-air20",
        ten: "Tai nghe Airpod20",
        hinh: "tainghe20.jpg",
        gia: 395000,
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