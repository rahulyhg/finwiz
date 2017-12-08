myApp.controller('HomeCtrl', function ($scope, $uibModal, TemplateService, NavigationService, $timeout, $location, $document, $state) {
        $scope.template = TemplateService.getHTML("content/home.html");
        $scope.homepage = true;
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

        $scope.funfact = ["Rats ate $10 billion of Pablo Escobar’s loose change",
            "Bill Gates told his Harvard University professors that he would be a millionaire by age 30. He became a billionaire at age 31",
            "10 percent of the Russian government's income comes from the sale of vodka",
            "Until the nineteenth century, solid blocks of tea were used as money in Siberia",
            "All the platinum ever mined would fit into an average-sized living-room!",
            "The image of Mahatma Gandhi on the currency notes is not hand-drawn. It is a copy of a photo which was taken in 1947. In the original photo, Gandhiji is smiling at a person nearby. The photo was cropped to be used on Indian rupee notes."
        ]

        $scope.openAbtModel = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/model/aboutus.html',
                size: 'lg',
            });
        }

        $scope.openQuizModel = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/model/quizlogin.html',
                // size: 'sm',
            });
        }
    })
    .controller('NavbarCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location, $state, toastr, $http) {
        // $scope.template = TemplateService.getHTML("content/grid.html");
        // TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.goToAnchor = function (anchor, id) {
            console.log("inside anchor")
            $state.go(anchor)
            // $location.hash(anchor);
            if (id) {
                $timeout(function () {
                    // $anchorScroll();
                    $('html,body').animate({
                        scrollTop: $('#' + id).offset().top
                    }, "slow");
                }, 500);
            }
        };

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

    .controller('footerCtrl', function ($scope, $uibModal, TemplateService, NavigationService, $timeout, $location, $state, toastr, $http) {
        // $scope.template = TemplateService.getHTML("content/grid.html");
        // TemplateService.title = "footer"; // This is the Title of the Website
        // $scope.navigation = NavigationService.getNavigation();
        $scope.opendisclaimer = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/model/disclaimer.html',
                size: 'lg',
            });

        }
        $scope.openterms = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/model/terms.html',
                size: 'lg',
            });

        }
        $scope.openQuizModel = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/model/quizlogin.html',
                // size: 'sm',
            });
        }


        $scope.goToAnchor = function (anchor, id) {
            console.log("inside footer anchor")
            $state.go(anchor)
            // $location.hash(anchor);
            if (id) {
                $timeout(function () {
                    // $anchorScroll();
                    $('html,body').animate({
                        scrollTop: $('#' + id).offset().top
                    }, "slow");
                }, 500);
            }
        };
        // $scope.footerNav = [{
        //         name: 'About',
        //         anchor: 'about',
        //     },
        //     {
        //         name: 'Articles',
        //         anchor: 'articles',
        //     },
        //     {
        //         name: 'Quick Bites',
        //         anchor: 'quickbites',
        //     }, {
        //         name: 'Testimonials',
        //         anchor: 'testimonials',
        //     }, {
        //         name: 'VLogs',
        //         anchor: 'vlogs',
        //     }, {
        //         name: 'Gallery',
        //         anchor: 'gallery',
        //     },
        //     {
        //         name: 'Calculator',
        //         anchor: 'calculator',
        //     }, {
        //         name: 'Quiz',
        //         anchor: 'quiz',
        //     }, {
        //         name: 'Nominate your Company',
        //         anchor: 'nominate_your_company',
        //     }, {
        //         name: 'Site Map',
        //         anchor: 'site_map',
        //     }, {
        //         name: "Disclaimer",
        //         anchor: "disclaimer",
        //     }, {
        //         name: 'Terms',
        //         anchor: 'terms',
        //     }
        // ]

    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });