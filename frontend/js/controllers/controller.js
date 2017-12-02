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
    .controller('NewsLetterCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/newsletter.html");
        TemplateService.title = "NewsLetter"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

    })
    .controller('ArticleCtrl', function ($scope, $timeout, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/article.html");
        TemplateService.title = "Article"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.selectedContent = {
            heading: "5 things to remember while over splurging",
            img: "img/article1.png",
            content: {
                txt: "Why did I even buy this?” – If you keep asking yourself this question often, then you are over splurging. We often get into shopping mode whenever we are bored. It starts with window shopping and then before you realize, you either come home with those rich looking matte paper shopping bags, or you get messages from your bank about the amount debited on those online shopping sites.To curb the splurging, we need to consciously be strict about our spending behavior and remember the below mentioned five points.",
                subheading: [{
                        heading: "Jot down your shopping list",
                        content: "Most of the time, we end up going to the store not knowing what we need and randomly pick up things that are not required. To avoid this mistake, write down your monthly shopping list two days before your salary gets credited. Strike off the items that aren’t of importance for that month or mark it optional. Since you have already prioritized your shopping needs, you end up sticking to the list and avoid gazing around the store and overspending or buying unnecessary things.",
                    },
                    {
                        heading: "Stick to the plan",
                        content: "When there is a function to attend, we would want to look our best. Nothing wrong in that, but to avoid over splurging, it is better to decide and finalize on what we are looking for and then get into action mode. Decide what type of attire you want, how much you can afford to spend for that, is it practical to buy something so expensive and keep it lying in a corner of your closet after that one time. This will help you zero down on the right product. Choose the right shop, decide your budget, finalize the style and then get to the shopping mode. Look around in other shops and choose the one that is best suited and thrifty."
                    },
                    {
                        heading: "Say NO to last minute shopping",
                        content: "Ensure that your shopping plans are always made well in advance. Prioritize the events you would be taking part in. Decide if you need shopping for the same, set aside a budget and start saving for the same at least 2 months before the event. When you know you have a cousin’s engagement in the next 3 months, start saving for it and aim to shop for it a month before the event. Last minute shopping will cost you a bomb. There is always a sale going on – make use of it. But remember to buy what’s necessary and stay away from overspending. Your mantra should be - Needs should be addressed and wants should be suppressed!"
                    }, {
                        heading: "Save first and spend later",
                        content: "I know it is easier said than done, but when you get your paycheck, put aside a certain percentage of it in a savings mode of your choice. This has to be the norm, not an option. The savings need not be something extravagant, it could be 5% of your earnings or 50%; it totally depends on you. The idea is to save a percentage of your earnings and then spend with whatever you are left with."
                    },
                    {
                        heading: "Prepare the monthly budget",
                        content: "Always have your monthly budget regularly prepared so you can allocate a reasonable budget for everything. If you want to dedicate 10% of your earnings for groceries, then ensure you don’t go overboard and stock only what is necessary. Same applies to eating out and weekend entertainment expenses. This way, you are aware of your cash limits and will not have the urge to spend lavishly. Self-control is extremely important. Ensure you don’t go overboard and stick to your budget. The bottom line is splurging is fine when it happens once in a while, but when it becomes a routine; it is necessary to control yourself to avoid getting into financial trouble."
                    }
                ]
            }
        }

        // json structure for articlelist
        // $scope.selectedContent = 
        //    {
        //         heading: "",
        //         img: "",
        //         content: {
        //             txt: "",
        //             subheading: [{
        //                 heading: "",
        //                 content: ''
        //             }]
        //         }
        //     }

        $scope.articlelist = [{
                heading: "5 things to remember while over splurging",
                img: "img/article1.png",
                content: {
                    txt: "Why did I even buy this?” – If you keep asking yourself this question often, then you are over splurging. We often get into shopping mode whenever we are bored. It starts with window shopping and then before you realize, you either come home with those rich looking matte paper shopping bags, or you get messages from your bank about the amount debited on those online shopping sites.To curb the splurging, we need to consciously be strict about our spending behavior and remember the below mentioned five points.",
                    subheading: [{
                            heading: "Jot down your shopping list",
                            content: "Most of the time, we end up going to the store not knowing what we need and randomly pick up things that are not required. To avoid this mistake, write down your monthly shopping list two days before your salary gets credited. Strike off the items that aren’t of importance for that month or mark it optional. Since you have already prioritized your shopping needs, you end up sticking to the list and avoid gazing around the store and overspending or buying unnecessary things.",
                        },
                        {
                            heading: "Stick to the plan",
                            content: "When there is a function to attend, we would want to look our best. Nothing wrong in that, but to avoid over splurging, it is better to decide and finalize on what we are looking for and then get into action mode. Decide what type of attire you want, how much you can afford to spend for that, is it practical to buy something so expensive and keep it lying in a corner of your closet after that one time. This will help you zero down on the right product. Choose the right shop, decide your budget, finalize the style and then get to the shopping mode. Look around in other shops and choose the one that is best suited and thrifty."
                        },
                        {
                            heading: "Say NO to last minute shopping",
                            content: "Ensure that your shopping plans are always made well in advance. Prioritize the events you would be taking part in. Decide if you need shopping for the same, set aside a budget and start saving for the same at least 2 months before the event. When you know you have a cousin’s engagement in the next 3 months, start saving for it and aim to shop for it a month before the event. Last minute shopping will cost you a bomb. There is always a sale going on – make use of it. But remember to buy what’s necessary and stay away from overspending. Your mantra should be - Needs should be addressed and wants should be suppressed!"
                        }, {
                            heading: "Save first and spend later",
                            content: "I know it is easier said than done, but when you get your paycheck, put aside a certain percentage of it in a savings mode of your choice. This has to be the norm, not an option. The savings need not be something extravagant, it could be 5% of your earnings or 50%; it totally depends on you. The idea is to save a percentage of your earnings and then spend with whatever you are left with."
                        },
                        {
                            heading: "Prepare the monthly budget",
                            content: "Always have your monthly budget regularly prepared so you can allocate a reasonable budget for everything. If you want to dedicate 10% of your earnings for groceries, then ensure you don’t go overboard and stock only what is necessary. Same applies to eating out and weekend entertainment expenses. This way, you are aware of your cash limits and will not have the urge to spend lavishly. Self-control is extremely important. Ensure you don’t go overboard and stick to your budget. The bottom line is splurging is fine when it happens once in a while, but when it becomes a routine; it is necessary to control yourself to avoid getting into financial trouble."
                        }
                    ]
                }
            }, {

                heading: "Avoid 7 spending mistakes and save more money",
                img: "img/article2.png",
                content: {
                    txt: "",
                    subheading: [{
                        heading: "",
                        content: ''
                    }]
                }

            }, {

                heading: "Avoid 7 spending mistakes and save more money",
                img: "img/article3.png",
                content: {
                    txt: "",
                    subheading: [{
                        heading: "",
                        content: ''
                    }]
                }

            }, {
                img: "img/article1.png",
                content: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            },
            {
                img: "img/article1.png",
                content: "last Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendreritnim eget augue commodo, sit amet molestie urna venenatis",
            }
        ];
        $scope.length = $scope.articlelist.length;
        $scope.current = 0;
        $scope.toshow = 4;
        $scope.articlemovedown = function () {
            if ($scope.current > ($scope.toshow - $scope.length)) {
                $scope.current = $scope.current - 1;

            } else {
                $scope.current = 0
            }

            $(".article .article_list ul li").css('transform', 'translateY(' + 100 * $scope.current + '%)');
            console.log($scope.current)


        }
        $scope.articlemoveup = function () {
            if ($scope.current < 0) {
                $scope.current = $scope.current + 1;
            } else {
                $scope.current = $scope.toshow - $scope.length;
            }



            $(".article .article_list ul li").css('transform', 'translateY(' + 100 * $scope.current + '%)');
            console.log($scope.current)
        }

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