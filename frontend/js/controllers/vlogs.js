myApp.controller('VlogsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/vlogs.html");
    TemplateService.title = "VLogs"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.vlog = [{
        title: "STAGES OF FINANCIAL LIFE",
        url: "YU3mzAHOAMc"
    }, {
        title: "WHY YOU WILL NEVER GET RICH",
        url: "ZF1m8a5znho"
    }, {
        title: "SAVING Vs. INVESTMENT",
        url: "9Iz0NwC0NkA"
    }, {
        title: "Investing In Equity For Beginners",
        url: "sOeqEHJL9-c"
    }, {
        title: "5 Things To Keep In Mind Before Investing",
        url: "E3FROqDhiMQ"
    }, {
        title: "Why Must You Invest In Mutual Funds",
        url: "rzUpPBHjUUg"
    }, {
        title: "3 Stages Of Financial Life",
        url: "YU3mzAHOAMc"
    }, {
        title: "Why You Will Never Get Rich?",
        url: "ZF1m8a5znho"
    }, {
        title: "Saving Vs Investment",
        url: "9Iz0NwC0NkA"
    }]
})