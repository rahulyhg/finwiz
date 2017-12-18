myApp.controller('HomeCtrl', function ($scope, $uibModal, TemplateService, NavigationService, $timeout, $location, $document, $state, toastr) {
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
        $scope.emailData = {};
        $scope.formData={};
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };
        $scope.photo = ['img/gallery/1.jpg', 'img/gallery/2.jpg', 'img/gallery/3.jpg', 'img/gallery/4.jpg', 'img/gallery/5.jpg', 'img/gallery/6.jpg']


        // $scope.funfact = ["Rats ate $10 billion of Pablo Escobar’s loose change",
        //     "Bill Gates told his Harvard University professors that he would be a millionaire by age 30. He became a billionaire at age 31",
        //     "10 percent of the Russian government's income comes from the sale of vodka",
        //     "Until the nineteenth century, solid blocks of tea were used as money in Siberia",
        //     "All the platinum ever mined would fit into an average-sized living-room!",
        //     "The image of Mahatma Gandhi on the currency notes is not hand-drawn. It is a copy of a photo which was taken in 1947. In the original photo, Gandhiji is smiling at a person nearby. The photo was cropped to be used on Indian rupee notes."
        // ]




        ////

        NavigationService.apiCallWithoutData("FunFacts/findAllFacts", function (data) {
            if (data.value === true) {
                $scope.funfact = data.data;
            }
        })
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

        $scope.saveCompData = function (formdata,nomination) {
            NavigationService.apiCall("NominateComp/saveCompData", formdata, function (data) {
                if (data.value === true) {
                    // toastr.success("Data Submitted Successfully");
                    $scope.formData = {};
                    nomination.$setPristine();
                    nomination.$setUntouched();
                    $uibModal.open({
                        animation: true,
                        templateUrl: "views/model/datasubmited.html",
                        scope: $scope,
                        backdrop: false
                    });
                    // $timeout(function () {
                    //     $state.reload();
                    // }, 1500)
                    // $state.reload();
                } else {
                   
                    // formdata = "";
                    $scope.formData = {};
                    nomination.$setPristine();
                    nomination.$setUntouched();
                    toastr.error("Something Went Wrong");

                    // $timeout(function () {
                    //     $state.reload();
                    // }, 1000)
                }
            });
        }

        $scope.saveEmails = function (formdata,subscribe) {
            // console.log("aaaaaa",data);
            NavigationService.apiCall("SubscribersEmail/saveEmailData", formdata, function (data) {
                console.log(data, "sdddddddddddddddd")
                if (data.value === true) {
                    $uibModal.open({
                        animation: true,
                        templateUrl: "views/model/thanks.html",
                        scope: $scope,
                        backdrop: false
                    });
                    $scope.emailData.email = "";
                    subscribe.$setPristine();
                    subscribe.$setUntouched();
                    // toastr.success("Data Submitted Successfully");
                    //    $state.reload();
                } else {
                    // $scope.emailData.email = "";
                    subscribe.$setPristine();
                    subscribe.$setUntouched();
                    // console.log(subscribe,"sssssssd")
                    $uibModal.open({
                        animation: true,
                        templateUrl: "views/model/allreadyregister.html",
                        scope: $scope,
                        backdrop: false
                    });
                   
                }
            });
        }


        //for article

        NavigationService.apiCallWithoutData("Articles/getAllArticlesData", function (data) {
            if (data.value === true) {
                $scope.articleData = data.data[0];
                $scope.stateData = $scope.articleData.title;
            }
        });

        // for videos
        NavigationService.apiCallWithoutData("VideoGallery/findVideoForHomePage", function (data) {
            if (data.value) {
                // $scope.articleData = data.data[0];
                $scope.videos = data.data;
                // console.log(data.data)
            } else {
                console.log("error in getting home page videos ");
            }
        })

        $scope.convertUrltoID = function (url) {
            return url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)[1];
        }


        //for photos
        // NavigationService.apiCallWithoutData("ImageGallery/findImagesForHomePage", function (data) {
        //     if (data.value) {

        //         console.log(data.data,"top 6")
        //     } else {
        //         console.log("error in getting home page photos ");
        //     }
        // })
        NavigationService.apiCallWithoutData("ImageGallery/findAllImages", function (data) {
            if (data.value) {

                // console.log(data.data[data.data.length-1],"all img")
                $scope.photos = data.data[data.data.length - 1].data[0].image;
                $scope.photos.length = 6;
            } else {
                console.log("error in getting home page photos ");
            }
        })


        // quick bites 

        NavigationService.apiCallWithoutData("QuickBytes/getAllQuickBytes", function (data) {
            $scope.quickData = data.data[0];
            console.log(data.data, "quick bites")
        })

        // for testimonial
        NavigationService.apiCallWithoutData("Testimonials/getAllTestimonials", function (data) {
            $scope.testimonialData = data.data[0];
        })
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