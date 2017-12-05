myApp.controller('TestimonialCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
    $scope.template = TemplateService.getHTML("content/testimonial.html");
    TemplateService.title = "Testimonial"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

    $scope.testData=[{
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make when an unknown printer took a galley of type and scrambled it to make",
        name: "Lorem Ipsum is simply"
    }, {  
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make when an unknown printer took a galley of type and scrambled it to make",
        name: "Lorem Ipsum is simply"
    }, {  
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make when an unknown printer took a galley of type and scrambled it to make",
        name: "Lorem Ipsum is simply"
    }, {  
         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make when an unknown printer took a galley of type and scrambled it to make",
        name: "Lorem Ipsum is simply"
    }]
})