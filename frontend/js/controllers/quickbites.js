myApp.controller('QuickBitesCtrl', function ($scope, TemplateService, NavigationService, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/quickbites.html");
    TemplateService.title = "Quick Bites"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    NavigationService.apiCallWithoutData("QuickBytes/getAllQuickBytes",function(data){
        $scope.quickData=data.data;
    })
});