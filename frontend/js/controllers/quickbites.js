myApp.controller('QuickBitesCtrl', function ($scope, TemplateService, NavigationService, toastr, $http, $interval) {
    $scope.template = TemplateService.getHTML("content/quickbites.html");
    TemplateService.title = "Quick Bites"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
   
    $scope.intervals = {
        id: null
    }
    $scope.i = 0;

    // function scroll() {
    //     i = i + 10;
    //     // $(".test-bottom").scrollTop(i);
    //     $('.test-bottom').animate({
    //         scrollTop: i
    //     }, 500);
    //     // console.log(i);
    // }
    $scope.scroll = function () {

        // not to add "i" if scroll reaches bottom
        if ($('.test-bottom').scrollTop() > $(".test-bottom").height()) {

        } else {
            $scope.i = 20 + $scope.i;
        }
        // console.log($scope.i)
        // $(".test-bottom").scrollTop(i);
        $('.test-bottom').animate({
            scrollTop: $scope.i
        }, 500);
        if ($('.test-bottom').scrollTop() > $(".test-bottom").height()) {

        }
        // console.log(i);
    }
    // var myinterval = $interval(scroll, 1000);
    $scope.intervals.id = setInterval($scope.scroll, 500);
    // console.log(myinterval, "first")



    $scope.stopAutoScroll = function () {
        console.log("stop")
        clearInterval($scope.intervals.id);


    }
    $scope.startAutoScroll = function () {
        console.log("start")
        $scope.i = $('.test-bottom').scrollTop();
        $scope.intervals.id = setInterval($scope.scroll, 500);
    }
    $scope.$on('$destroy', function () {
        // $interval.cancel(myInterval)
        clearInterval($scope.intervals.id);
    });


    NavigationService.apiCallWithoutData("QuickBytes/getAllQuickBytes", function (data) {
        $scope.quickData = data.data;
    })

});