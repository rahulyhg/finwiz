myApp.controller('VlogsCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/vlogs.html");
    TemplateService.title = "VLogs"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.vlog = [{
            title: "Why to invest in Mutual Funds",
            url: "3IfIdT-MXxE"
        },
        {
            title: "How to start investing",
            url: "3IfIdT-MXxE"
        }, {
            title: "Stages of your financial life",
            url: "3IfIdT-MXxE"
        },
        {
            title: "3 Reasons you will never get Rich",
            url: "3IfIdT-MXxE"
        },
        {
            title: "Personal Finance made easy",
            url: "3IfIdT-MXxE"
        },
        {
            title: "About NSE and its offerings",
            url: "3IfIdT-MXxE"
        },
        {
            title: "Things to keep in mind before investing in equities",
            url: "3IfIdT-MXxE"
        },
        {
            title: "History of Stock Trading (India)",
            url: "3IfIdT-MXxE"
        },
        {
            title:"The Priceline of Gold",
            url:"3IfIdT-MXxE"
        }
    ]
})