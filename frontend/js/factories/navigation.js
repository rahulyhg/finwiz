myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "ABOUT",
            classis: "active",
            anchor: "home",
            scroll: true,
            id: "about",
            subnav: []
        }, {
            name: "ARTICLES",
            classis: "active",
            anchor: "article",
            subnav: []
        },
        {
            name: "QUICK BITES",
            classis: "active",
            anchor: "quickbites",
            subnav: []
        },
        {
            name: "TESTIMONIALS",
            classis: "active",
            anchor: "testimonial",
            subnav: []
        },
        {
            name: "VLOGS",
            classis: "active",
            anchor: "vlogs",
            subnav: []
        },
        {
            name: "GALLERY",
            classis: "active",
            anchor: "home",
            scroll: true,
            id: "gallery",
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
        apiCall: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        searchCall: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        
        apiCallWithData: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },

        apiCallWithoutData: function (url, callback) {
            $http.post(adminurl + url).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
    };
});