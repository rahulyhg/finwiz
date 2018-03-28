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
            $http.get('https://finwiz.wohlig.co.in/csrfToken').then(function (data) {
                data = data.data;
                // console.log("------", data);
                $http.defaults.headers.post['x-csrf-token'] = data._csrf;
                $http.post(adminurl + url, formData).then(function (data) {
                    data = data.data;
                    callback(data);

                });
            });
        },
        searchCall: function (url, formData, i, callback) {
            $http.get('https://finwiz.wohlig.co.in/csrfToken').then(function (data) {
                data = data.data;
                // console.log("------", data);
                $http.defaults.headers.post['x-csrf-token'] = data._csrf;
                $http.post(adminurl + url, formData).then(function (data) {
                    data = data.data;
                    callback(data, i);
                });
            });
        },

        apiCallWithData: function (url, formData, callback) {
            $http.get('https://finwiz.wohlig.co.in/csrfToken').then(function (data) {
                data = data.data;
                //  $.ajax({
                //     url: adminurl + url,
                //     type: "POST",
                //     crossDomain: true,
                //     beforeSend: function (xhr, settings) {
                //         xhr.setRequestHeader('X-CSRF-Token', data._csrf);
                //         xhr.setRequestHeader('Content-Type', 'application/json');
                //     },
                //     xhrFields: {
                //         withCredentials: true
                //     },
                //     data:formData,
                //     success: function (resp) {
                //         console.log("resp------",resp.data);
                //         callback(resp);

                //     }
                // })
                $http.defaults.headers.post['x-csrf-token'] = data._csrf;
                $http.post(adminurl + url, formData).then(function (data) {
                    data = data.data;
                    callback(data);
                });
            });

        },

        apiCallWithoutData: function (url, callback) {
            $http.get('https://finwiz.wohlig.co.in/csrfToken').then(function (data) {
                data = data.data;
                // console.log("------", data);
                $http.defaults.headers.post['x-csrf-token'] = data._csrf;
                $http.post(adminurl + url).then(function (data) {
                    data = data.data;
                    callback(data);
                });
            });
        },
    };
});