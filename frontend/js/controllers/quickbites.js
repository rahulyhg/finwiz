myApp.controller('QuickBitesCtrl', function ($scope, TemplateService, NavigationService, toastr, $http, $interval) {
    $scope.template = TemplateService.getHTML("content/quickbites.html");
    TemplateService.title = "Quick Bites"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    NavigationService.apiCallWithoutData("QuickBytes/getAllQuickBytes", function (data) {
        $scope.quickData = data.data;
    })
    var i = 0;
    $('.test-bottom').animate({
        scrollTop: 0
    }, 50);

    function scroll() {
        i = i + 10;
        // $(".test-bottom").scrollTop(i);
        $('.test-bottom').animate({
            scrollTop: i
        }, 500);
        // console.log(i);
    }
    // var myinterval = $interval(scroll, 1000);
    var id = setInterval(scroll, 500);
    // console.log(myinterval, "first")



    $scope.stopAutoScroll = function () {
        console.log("stop")
         clearInterval(id);
      

    }
    $scope.startAutoScroll = function () {
        console.log("start")
        id = setInterval(scroll, 500);
    }

});