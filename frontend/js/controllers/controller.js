myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.mySlides = [
            'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
            'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
        ];
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };
        $scope.photo = ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg']
        $scope.episode = [{
                img: "img/episode/1.png",
                url: "https://www.youtube.com/watch?v=zCvPGkCCTsA"
            }, {
                img: "img/episode/1.png",
                url: "https://www.youtube.com/watch?v=zCvPGkCCTsA"
            }, {
                img: "img/episode/1.png",
                url: "https://www.youtube.com/watch?v=zCvPGkCCTsA"
            }, {
                img: "img/episode/1.png",
                url: "https://www.youtube.com/watch?v=zCvPGkCCTsA"
            },
            {
                img: "img/episode/1.png",
                url: "https://www.youtube.com/watch?v=zCvPGkCCTsA"
            },
            {
                img: "img/episode/1.png",
                url: "https://www.youtube.com/watch?v=zCvPGkCCTsA"
            }
        ]

    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

    })
    .controller('footerCtrl', function ($scope, $uibModal, TemplateService, NavigationService, $timeout, toastr, $http) {
        // $scope.template = TemplateService.getHTML("content/grid.html");
        // TemplateService.title = "footer"; // This is the Title of the Website
        // $scope.navigation = NavigationService.getNavigation();
        $scope.opendisclaimer = function (size) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/model/disclaimer.html',

                size: size,
                // resolve: {
                //     items: function () {
                //         return $ctrl.items;
                //     }
                // }
            });
            console.log(modalInstance);
        }
        $scope.footerNav = [{
                name: 'About',
                anchor: 'about',
            },
            {
                name: 'Articles',
                anchor: 'articles',
            },
            {
                name: 'Quick Bites',
                anchor: 'quickbites',
            }, {
                name: 'Testimonials',
                anchor: 'testimonials',
            }, {
                name: 'VLogs',
                anchor: 'vlogs',
            }, {
                name: 'Gallery',
                anchor: 'gallery',
            },
            {
                name: 'Calculator',
                anchor: 'calculator',
            }, {
                name: 'Quiz',
                anchor: 'quiz',
            }, {
                name: 'Nominate your Company',
                anchor: 'nominate_your_company',
            }, {
                name: 'Site Map',
                anchor: 'site_map',
            }, {
                name: "Disclaimer",
                anchor: "disclaimer",
            }, {
                name: 'Terms',
                anchor: 'terms',
            }
        ]

    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });