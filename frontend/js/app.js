// Link all the JS Docs here
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'ui.bootstrap',
    // 'ngAnimate',
    'ngSanitize',
    'angular-flexslider',
    'ui.swiper',
    'angularPromiseButtons',
    'toastr',
    'vcRecaptcha'
]);


// Define all the routes below
myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    var tempateURL = "views/template/template.html"; //Default Template URL

    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: tempateURL,
            controller: 'HomeCtrl'
        })
        .state('form', {
            url: "/form",
            templateUrl: tempateURL,
            controller: 'FormCtrl'
        })
        .state('grid', {
            url: "/grid",
            templateUrl: tempateURL,
            controller: 'GridCtrl'
        })
        .state('newsletter', {
            url: "/newsletter",
            templateUrl: tempateURL,
            controller: 'NewsLetterCtrl'
        })
        .state('article', {
            url: "/article/:title",
            templateUrl: tempateURL,
            controller: 'ArticleCtrl'
        })
          .state('photo', {
            url: "/photo",
            templateUrl: tempateURL,
            controller: 'GalleryCtrl'
        })
          .state('episode', {
            url: "/episode",
            templateUrl: tempateURL,
            controller: 'EpisodeCtrl'
        })
           .state('testimonial', {
            url: "/testimonial",
            templateUrl: tempateURL,
            controller: 'TestimonialCtrl'
        })
        .state('vlogs', {
            url: "/vlogs",
            templateUrl: tempateURL,
            controller: 'VlogsCtrl'
        })
        .state('quickbites', {
            url: "/quickbites",
            templateUrl: tempateURL,
            controller: 'QuickBitesCtrl'
        })
        ;
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(isproduction);
});

// For Language JS
myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});

myApp.filter('serverimage', function () {
    return function (image) {
        if (image && image !== null) {
            return adminurl + "upload/readFile?file=" + image;
        } else {
            return undefined;
        }
    }
});