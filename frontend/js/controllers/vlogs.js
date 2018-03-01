myApp.controller('VlogsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/vlogs.html");
    TemplateService.title = "VLogs"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.vlog = [{
            title: "STAGES OF FINANCIAL LIFE",
            url: "YU3mzAHOAMc"
        },
        {
            title: "WHY YOU WILL NEVER GET RICH",
            url: "ZF1m8a5znho"
        }, {
            title: "SAVING Vs. INVESTMENT",
            url: "9Iz0NwC0NkA"
        }
    ]
})