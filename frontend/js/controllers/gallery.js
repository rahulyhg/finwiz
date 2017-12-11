 myApp.controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
     $scope.template = TemplateService.getHTML("content/gallery.html");
     TemplateService.title = "Gallery"; // This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     //  /for season4
     $scope.season4 = [{
             img1: 'img/gallery/season4/1.png',
             //  img2: 'img/small-season3/article1.png',
         }, {
             img1: 'img/gallery/season4/2.png',

         }, {
             img1: 'img/gallery/season4/3.png',

         }, {
             img1: 'img/gallery/season4/4.png',

         }, {
             img1: 'img/gallery/season4/5.png',

         }, {
             img1: 'img/gallery/season4/6.png',

         }, {
             img1: 'img/gallery/season4/7.png',

         }, {
             img1: 'img/gallery/season4/8.png',

         }, {
             img1: 'img/gallery/season4/9.png',

         }, {
             img1: 'img/gallery/season4/10.png',

         }, {
             img1: 'img/gallery/season4/11.png',

         }, {
             img1: 'img/gallery/season4/12.png',

         }, {
             img1: 'img/gallery/season4/13.png',

         }, {
             img1: 'img/gallery/season4/14.png',

         }, {
             img1: 'img/gallery/season4/15.png',

         }, {
             img1: 'img/gallery/season4/16.png',

         }, {
             img1: 'img/gallery/season4/17.png',

         }, {
             img1: 'img/gallery/season4/18.png',

         }, {
             img1: 'img/gallery/season4/19.png',

         }, {
             img1: 'img/gallery/season4/20.png',
             img2: 'img/small-season3/72.jpg',
         }, {
             img1: 'img/gallery/season4/21.png',
             img2: 'img/small-season3/73.jpg',
         }, {
             img1: 'img/gallery/season4/22.png',
             img2: 'img/small-season3/74.jpg',
         }, {
             img1: 'img/gallery/season4/23.png',
             img2: 'img/small-season3/75.jpg',
         }, {
             img1: 'img/gallery/season4/24.png',
             img2: 'img/small-season3/76.jpg',
         }, {
             img1: 'img/gallery/season4/25.png',
             img2: 'img/small-season3/77.jpg',
         }, {
             img1: 'img/gallery/season4/26.png',
             img2: 'img/small-season3/78.jpg',
         }, {
             img1: 'img/gallery/season4/27.png',
             img2: 'img/small-season3/79.jpg',
         }, {
             img1: 'img/gallery/season4/28.png',
             img2: 'img/small-season3/80.jpg',
         }, {
             img1: 'img/gallery/season4/29.png',
             img2: 'img/small-season3/81.jpg',
         }, {
             img1: 'img/gallery/season4/30.png',
             img2: 'img/small-season3/82.jpg',
         }, {
             img1: 'img/gallery/season4/31.png',
             img2: 'img/small-season3/83.jpg',
         }, {
             img1: 'img/gallery/season4/32.png',
             img2: 'img/small-season3/84.jpg',
         }, {
             img1: 'img/gallery/season4/33.png',
             img2: 'img/small-season3/85.jpg',
         }, {
             img1: 'img/gallery/season4/34.png',
             img2: 'img/small-season3/86.jpg',
         }, {
             img1: 'img/gallery/season4/35.png',
             img2: 'img/small-season3/87.jpg',
         }, {
             img1: 'img/gallery/season4/36.png',
             img2: 'img/small-season3/88.jpg',
         }, {
             img1: 'img/gallery/season4/37.png',
             img2: 'img/small-season3/89.jpg',
         }, {
             img1: 'img/gallery/season4/38.png',
             img2: 'img/small-season3/90.jpg',
         }, {
             img1: 'img/gallery/season4/39.png',
             img2: 'img/small-season3/1.jpg',
         }, {
             img1: 'img/gallery/season4/40.png',
             img2: 'img/small-season3/5.jpg',
         },

         {
             img1: 'img/gallery/season4/41.png',
             img2: 'img/small-season3/7.jpg',
         }, {
             img1: 'img/gallery/season4/42.png',
             img2: 'img/small-season3/8.jpg',
         },

         {
             img1: 'img/gallery/season4/43.png',
             img2: 'img/small-season3/12.jpg',
         }, {
             img1: 'img/gallery/season4/44.png',
             img2: 'img/small-season3/15.jpg',
         }, {
             img1: 'img/gallery/season4/45.png',
             img2: 'img/small-season3/17.jpg',
         }, {
             img1: 'img/gallery/season4/46.png',
             img2: 'img/small-season3/18.jpg',
         }, {
             img1: 'img/gallery/season4/47.png',
             img2: 'img/small-season3/19.jpg',
         }, {
             img1: 'img/gallery/season4/48.png',
             img2: 'img/small-season3/20.jpg',
         }, {
             img1: 'img/gallery/season4/49.png',
             img2: 'img/small-season3/21.jpg',
         }, {
             img1: 'img/gallery/season4/50.png',
             img2: 'img/small-season3/24.jpg',
         }, {
             img1: 'img/gallery/season4/51.png',
             img2: 'img/small-season3/25.jpg',
         }, {
             img1: 'img/gallery/season4/52.png',
             img2: 'img/small-season3/26.jpg',
         }, {
             img1: 'img/gallery/season4/53.png',
             img2: 'img/small-season3/27.jpg',
         }, {
             img1: 'img/gallery/season4/54.png',
             img2: 'img/small-season3/28.jpg',
         }, {
             img1: 'img/gallery/season4/55.png',
             img2: 'img/small-season3/29.jpg',
         }
     ];



     $scope.more3 = false;
     $scope.view3 = true;

     $scope.viewMore3 = function () {
         $scope.more3 = true;
         $scope.view3 = false;
     }
     $scope.viewLess3 = function () {
         $scope.more3 = false;
         $scope.view3 = true;
     }
     //end of season3

     //for season3
     $scope.season3 = [{
        img1: 'img/gallery/season3/1.jpg',
        //  img2: 'img/small-season3/article1.jpg',
    }, {
        img1: 'img/gallery/season3/2.jpg',

    }, {
        img1: 'img/gallery/season3/3.jpg',

    }, {
        img1: 'img/gallery/season3/4.jpg',

    }, {
        img1: 'img/gallery/season3/5.jpg',

    }, {
        img1: 'img/gallery/season3/6.jpg',

    }, {
        img1: 'img/gallery/season3/7.jpg',

    }, {
        img1: 'img/gallery/season3/8.jpg',

    }, {
        img1: 'img/gallery/season3/9.jpg',

    }, {
        img1: 'img/gallery/season3/10.jpg',

    }, {
        img1: 'img/gallery/season3/11.jpg',

    }, {
        img1: 'img/gallery/season3/12.jpg',

    }, {
        img1: 'img/gallery/season3/13.jpg',

    }, {
        img1: 'img/gallery/season3/14.jpg',

    }, {
        img1: 'img/gallery/season3/15.jpg',

    }, {
        img1: 'img/gallery/season3/16.jpg',

    }, {
        img1: 'img/gallery/season3/17.jpg',

    }, {
        img1: 'img/gallery/season3/18.jpg',

    }, {
        img1: 'img/gallery/season3/19.jpg',

    }, {
        img1: 'img/gallery/season3/20.jpg',
        img2: 'img/small-season3/72.jpg',
    }, {
        img1: 'img/gallery/season3/21.jpg',
        img2: 'img/small-season3/73.jpg',
    }, {
        img1: 'img/gallery/season3/22.jpg',
        img2: 'img/small-season3/74.jpg',
    }, {
        img1: 'img/gallery/season3/23.jpg',
        img2: 'img/small-season3/75.jpg',
    }, {
        img1: 'img/gallery/season3/24.jpg',
        img2: 'img/small-season3/76.jpg',
    }, {
        img1: 'img/gallery/season3/25.jpg',
        img2: 'img/small-season3/77.jpg',
    }, {
        img1: 'img/gallery/season3/26.jpg',
        img2: 'img/small-season3/78.jpg',
    }, {
        img1: 'img/gallery/season3/27.jpg',
        img2: 'img/small-season3/79.jpg',
    }, {
        img1: 'img/gallery/season3/28.jpg',
        img2: 'img/small-season3/80.jpg',
    }, {
        img1: 'img/gallery/season3/29.jpg',
        img2: 'img/small-season3/81.jpg',
    }, {
        img1: 'img/gallery/season3/30.jpg',
        img2: 'img/small-season3/82.jpg',
    }, {
        img1: 'img/gallery/season3/31.jpg',
        img2: 'img/small-season3/83.jpg',
    }, {
        img1: 'img/gallery/season3/32.jpg',
        img2: 'img/small-season3/84.jpg',
    }, {
        img1: 'img/gallery/season3/33.jpg',
        img2: 'img/small-season3/85.jpg',
    }, {
        img1: 'img/gallery/season3/34.jpg',
        img2: 'img/small-season3/86.jpg',
    }, {
        img1: 'img/gallery/season3/35.jpg',
        img2: 'img/small-season3/87.jpg',
    }, {
        img1: 'img/gallery/season3/36.jpg',
        img2: 'img/small-season3/88.jpg',
    }, {
        img1: 'img/gallery/season3/37.jpg',
        img2: 'img/small-season3/89.jpg',
    }, {
        img1: 'img/gallery/season3/38.jpg',
        img2: 'img/small-season3/90.jpg',
    }, {
        img1: 'img/gallery/season3/39.jpg',
        img2: 'img/small-season3/1.jpg',
    }, {
        img1: 'img/gallery/season3/40.jpg',
        img2: 'img/small-season3/5.jpg',
    },

    {
        img1: 'img/gallery/season3/41.jpg',
        img2: 'img/small-season3/7.jpg',
    }, {
        img1: 'img/gallery/season3/42.jpg',
        img2: 'img/small-season3/8.jpg',
    },

    {
        img1: 'img/gallery/season3/43.jpg',
        img2: 'img/small-season3/12.jpg',
    }, {
        img1: 'img/gallery/season3/44.jpg',
        img2: 'img/small-season3/15.jpg',
    }, {
        img1: 'img/gallery/season3/45.jpg',
        img2: 'img/small-season3/17.jpg',
    }, {
        img1: 'img/gallery/season3/46.jpg',
        img2: 'img/small-season3/18.jpg',
    }, {
        img1: 'img/gallery/season3/47.jpg',
        img2: 'img/small-season3/19.jpg',
    }, {
        img1: 'img/gallery/season3/48.jpg',
        img2: 'img/small-season3/20.jpg',
    }, {
        img1: 'img/gallery/season3/49.jpg',
        img2: 'img/small-season3/21.jpg',
    }, {
        img1: 'img/gallery/season3/50.jpg',
        img2: 'img/small-season3/24.jpg',
    }
];

     $scope.more2 = false;
     $scope.view2 = true;

     $scope.viewMore2 = function () {
         $scope.more2 = true;
         $scope.view2 = false;
     }
     $scope.viewLess2 = function () {
         $scope.more2 = false;
         $scope.view2 = true;
     }
     //end of season3

     //for season2
     $scope.season2 = [{
        img1: 'img/gallery/season2/1.jpg',
        //  img2: 'img/small-season2/article1.jpg',
    }, {
        img1: 'img/gallery/season2/2.jpg',

    }, {
        img1: 'img/gallery/season2/3.jpg',

    }, {
        img1: 'img/gallery/season2/4.jpg',

    }, {
        img1: 'img/gallery/season2/5.jpg',

    }, {
        img1: 'img/gallery/season2/6.jpg',

    }, {
        img1: 'img/gallery/season2/7.jpg',

    }, {
        img1: 'img/gallery/season2/8.jpg',

    }, {
        img1: 'img/gallery/season2/9.jpg',

    }, {
        img1: 'img/gallery/season2/10.jpg',

    }, {
        img1: 'img/gallery/season2/11.jpg',

    }, {
        img1: 'img/gallery/season2/12.jpg',

    }, {
        img1: 'img/gallery/season2/13.jpg',

    }, {
        img1: 'img/gallery/season2/14.jpg',

    }, {
        img1: 'img/gallery/season2/15.jpg',

    }, {
        img1: 'img/gallery/season2/16.jpg',

    }, {
        img1: 'img/gallery/season2/17.jpg',

    }, {
        img1: 'img/gallery/season2/18.jpg',

    }, {
        img1: 'img/gallery/season2/19.jpg',

    }, {
        img1: 'img/gallery/season2/20.jpg',
        img2: 'img/small-season2/72.jpg',
    }, {
        img1: 'img/gallery/season2/21.jpg',
        img2: 'img/small-season2/73.jpg',
    }, {
        img1: 'img/gallery/season2/22.jpg',
        img2: 'img/small-season2/74.jpg',
    }, {
        img1: 'img/gallery/season2/23.jpg',
        img2: 'img/small-season2/75.jpg',
    }, {
        img1: 'img/gallery/season2/24.jpg',
        img2: 'img/small-season2/76.jpg',
    }, {
        img1: 'img/gallery/season2/25.jpg',
        img2: 'img/small-season2/77.jpg',
    }, {
        img1: 'img/gallery/season2/26.jpg',
        img2: 'img/small-season2/78.jpg',
    }, {
        img1: 'img/gallery/season2/27.jpg',
        img2: 'img/small-season2/79.jpg',
    }, {
        img1: 'img/gallery/season2/28.jpg',
        img2: 'img/small-season2/80.jpg',
    }, {
        img1: 'img/gallery/season2/29.jpg',
        img2: 'img/small-season2/81.jpg',
    }, {
        img1: 'img/gallery/season2/30.jpg',
        img2: 'img/small-season2/82.jpg',
    }, {
        img1: 'img/gallery/season2/31.jpg',
        img2: 'img/small-season2/83.jpg',
    }, {
        img1: 'img/gallery/season2/32.jpg',
        img2: 'img/small-season2/84.jpg',
    }, {
        img1: 'img/gallery/season2/33.jpg',
        img2: 'img/small-season2/85.jpg',
    }, {
        img1: 'img/gallery/season2/34.jpg',
        img2: 'img/small-season2/86.jpg',
    }, {
        img1: 'img/gallery/season2/35.jpg',
        img2: 'img/small-season2/87.jpg',
    }, {
        img1: 'img/gallery/season2/36.jpg',
        img2: 'img/small-season2/88.jpg',
    }, {
        img1: 'img/gallery/season2/37.jpg',
        img2: 'img/small-season2/89.jpg',
    }, {
        img1: 'img/gallery/season2/38.jpg',
        img2: 'img/small-season2/90.jpg',
    }, {
        img1: 'img/gallery/season2/39.jpg',
        img2: 'img/small-season2/1.jpg',
    }, {
        img1: 'img/gallery/season2/40.jpg',
        img2: 'img/small-season2/5.jpg',
    },

    {
        img1: 'img/gallery/season2/41.jpg',
        img2: 'img/small-season2/7.jpg',
    }, {
        img1: 'img/gallery/season2/42.jpg',
        img2: 'img/small-season2/8.jpg',
    },

    {
        img1: 'img/gallery/season2/43.jpg',
        img2: 'img/small-season2/12.jpg',
    }, {
        img1: 'img/gallery/season2/44.jpg',
        img2: 'img/small-season2/15.jpg',
    }, {
        img1: 'img/gallery/season2/45.jpg',
        img2: 'img/small-season2/17.jpg',
    }, {
        img1: 'img/gallery/season2/46.jpg',
        img2: 'img/small-season2/18.jpg',
    }, {
        img1: 'img/gallery/season2/47.jpg',
        img2: 'img/small-season2/19.jpg',
    }, {
        img1: 'img/gallery/season2/48.jpg',
        img2: 'img/small-season2/20.jpg',
    }, {
        img1: 'img/gallery/season2/49.jpg',
        img2: 'img/small-season2/21.jpg',
    }, {
        img1: 'img/gallery/season2/50.jpg',
        img2: 'img/small-season2/24.jpg',
    }
];

     $scope.more1 = false;
     $scope.view1 = true;

     $scope.viewMore1 = function () {
         $scope.more1 = true;
         $scope.view1 = false;
     }
     $scope.viewLess1 = function () {
         $scope.more1 = false;
         $scope.view1 = true;
     }
     //end of season1
 })