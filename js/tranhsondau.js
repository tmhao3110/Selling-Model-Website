var app = angular.module("myApp", []);
app.controller("mySanpham", function($scope) {

    $scope.showSanpham = [{
        id: "tranh-one1",
        ten: "Tranh treo tường Onepiece01",
        hinh: "tranh1.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one2",
        ten: "Tranh treo tường Onepiece02",
        hinh: "tranh2.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one3",
        ten: "Tranh treo tường Onepiece03",
        hinh: "tranh3.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one4",
        ten: "Tranh treo tường Onepiece04",
        hinh: "tranh4.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one5",
        ten: "Tranh treo tường Onepiece05",
        hinh: "tranh5.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one6",
        ten: "Tranh treo tường Onepiece06",
        hinh: "tranh6.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one7",
        ten: "Tranh treo tường Onepiece07",
        hinh: "tranh7.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one8",
        ten: "Tranh treo tường Onepiece08",
        hinh: "tranh8.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one9",
        ten: "Tranh treo tường Onepiece09",
        hinh: "tranh9.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one10",
        ten: "Tranh treo tường Onepiece10",
        hinh: "tranh10.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one11",
        ten: "Tranh treo tường Onepiece11",
        hinh: "tranh11.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one12",
        ten: "Tranh treo tường Onepiece12",
        hinh: "tranh12.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-one13",
        ten: "Tranh treo tường Onepiece13",
        hinh: "tranh13.jpg",
        gia: 495000,
        sl: 0
    }, {
        id: "tranh-one14",
        ten: "Tranh treo tường Onepiece14",
        hinh: "tranh14.jpg",
        gia: 495000,
        sl: 0
    }, {
        id: "tranh-one15",
        ten: "Tranh treo tường Onepiece15",
        hinh: "tranh15.jpg",
        gia: 495000,
        sl: 0
    }, {
        id: "tranh-one16",
        ten: "Tranh treo tường Onepiece16",
        hinh: "tranh16.jpg",
        gia: 695000,
        sl: 0
    }, {
        id: "tranh-one17",
        ten: "Tranh treo tường Onepiece17",
        hinh: "tranh17.jpg",
        gia: 695000,
        sl: 0
    }, {
        id: "tranh-one18",
        ten: "Tranh treo tường Onepiece18",
        hinh: "tranh18.jpg",
        gia: 695000,
        sl: 0
    }, {
        id: "tranh-one19",
        ten: "Tranh treo tường Onepiece19",
        hinh: "tranh19.jpg",
        gia: 495000,
        sl: 0
    }, {
        id: "tranh-one20",
        ten: "Tranh treo tường Onepiece20",
        hinh: "tranh20.jpg",
        gia: 695000,
        sl: 0
    }, {
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
    }, {
        id: "tranh-da1",
        ten: "Tranh treo tường Dragon Ball01",
        hinh: "tranh-dragonball1.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-da2",
        ten: "Tranh treo tường Dragon Ball02",
        hinh: "tranh-dragonball2.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-da3",
        ten: "Tranh treo tường Dragon Ball03",
        hinh: "tranh-dragonball3.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-da4",
        ten: "Tranh treo tường Dragon Ball04",
        hinh: "tranh-dragonball4.jpg",
        gia: 295000,
        sl: 0
    }, {
        id: "tranh-da5",
        ten: "Tranh treo tường Dragon Ball05",
        hinh: "tranh-dragonball5.jpg",
        gia: 295000,
        sl: 0
    }, {
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