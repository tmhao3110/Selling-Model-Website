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
    }, {
        id: "mohinh-da1",
        ten: "Mô hình Dragon Ball01",
        hinh: "mohinh-dragonball01.jpg",
        gia: 550000,
        sl: 0
    }, {
        id: "mohinh-da2",
        ten: "Mô hình Dragon Ball02",
        hinh: "mohinh-dragonball02.jpg",
        gia: 850000,
        sl: 0
    }, {
        id: "mohinh-da3",
        ten: "Mô hình Dragon Ball03",
        hinh: "mohinh-dragonball03.jpg",
        gia: 750000,
        sl: 0
    }, {
        id: "mohinh-da4",
        ten: "Mô hình Dragon Ball04",
        hinh: "mohinh-dragonball04.jpg",
        gia: 750000,
        sl: 0
    }, {
        id: "mohinh-da5",
        ten: "Mô hình Dragon Ball05",
        hinh: "mohinh-dragonball05.jpg",
        gia: 425000,
        sl: 0
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }];

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