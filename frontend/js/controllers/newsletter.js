myApp.controller('NewsLetterCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/newsletter.html");
    TemplateService.title = "NewsLetter"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.tabs = [{
            name: "Edition 1",
            content: [{
                    heading: "heading 1",
                    img: "img/article1.png",
                    txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisNam hendrerit enim eget augue commodo, sit amet molestie urna venenatis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis end"
                },
                {
                    heading: "heading 2",
                    img: "img/article1.png",
                    txt: "Lorem Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatisLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque ex id ligula porttitor,sed fringilla mauris pharetra. Vestibulum venenatis neque eu cursus dapibus. Nam hendrerit enim eget augue commodo, sit amet molestie urna venenatis"
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
        // solution 1 (checking text height with max height it can contain )
        // return ($(classSelect).height() > 115)

        //solution 2 ( checking  height after changing attribute)
        console.log(classSelect);
        var clone=$(classSelect).clone();
        var beforeheight=$(classSelect).height();


        console.log("before height",beforeheight)
       $(classSelect).css('-webkit-line-clamp',"unset");

       
       var afterheight=$(classSelect).height();
       console.log("after height",afterheight);
       $(classSelect).replaceWith(clone);

       return beforeheight<afterheight;

    }

    $scope.selectedNewsLetter = $scope.tabs[0];
    $scope.selectNewsLetter = function (x) {
        $scope.selectedNewsLetter = x;
        // console.log($scope.selectedNewsLetter);
    }


})