myApp.controller('NewsLetterCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/newsletter.html");
    TemplateService.title = "NewsLetter"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.tabs = [{
            name: "Edition 1",
            content: [{
                    heading: "heading 1",
                    img: "img/article1.png",
                    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis"
                },
                {
                    heading: "heading 2",
                    img: "img/article1.png",
                    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis"
                },
                {
                    heading: "heading 3",
                    img: "img/article1.png",
                    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis"
                }
            ]
        },
        {
            name: "Edition 2",
            content: [{
                heading: "heading 1",
                img: "img/article1.png",
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis"
            }]
        },
        {
            name: "Edition 3",
            content: [{
                heading: "heading 1",
                img: "img/article1.png",
                txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis"
            }]
        }
    ];
    $scope.show_seemore = function (index) {
        var classSelect = ".txtheight" + index;
        return ($(classSelect).height() > 115)

    }

    $scope.selectedNewsLetter = $scope.tabs[0];
    $scope.selectNewsLetter = function (x) {
        $scope.selectedNewsLetter = x;
        // console.log($scope.selectedNewsLetter);
    }


})