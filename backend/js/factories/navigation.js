var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;



myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Users",
            classis: "active",
            sref: "#!/page/viewUser//"
        },
        {
            name: "Article",
            classis: "active",
            sref: "#!/page/viewArticle//"
        }, {
            name: "Fun Facts",
            classis: "active",
            sref: "#!/page/viewFunFacts//"
        },
        {
            name: "News Letter",
            classis: "active",
            sref: "#!/page/viewNewsLetter//"
        }, {
            name: "Subscribed Emails",
            classis: "active",
            sref: "#!/page/viewSubscribersEmail//"
        },
        {
            name: "Nominate Company",
            classis: "active",
            sref: "#!/page/viewNominateComp//"
        },
        {
            name: "Season",
            classis: "active",
            sref: "#!/page/viewSeason//"
        },
        {
            name: "Video Gallery",
            classis: "active",
            sref: "#!/page/viewVideoGallery//"
        },
        {
            name: "Image Gallery",
            classis: "active",
            sref: "#!/page/viewImageGallery//"
        },
        {
            name: "Testimonials",
            classis: "active",
            sref: "#!/page/viewTestimonials//"
        },
        {
            name: "Quick Bytes",
            classis: "active",
            sref: "#!/page/viewQuickBytes//"
        }
    ];

    return {
        getnav: function () {
            return navigation;
        },

        parseAccessToken: function (data, callback) {
            if (data) {
                $.jStorage.set("accessToken", data);
                $.jStorage.setTTL("accessToken", 900000);
                callback();
            }
        },
        removeAccessToken: function (data, callback) {
            var data = {
                accessToken: $.jStorage.get("accessToken"),                
                isLogin:'False',
            };
            $http.post(adminurl + 'user/profile', data).then(function (data) {
                data = data.data;
                if (data.value === true) {
                    callback();
                    $.jStorage.flush();                    
                }else {
                    errorCallback(data.error);
                }
            });
        },
        profile: function (callback, errorCallback) {
            var data = {
                accessToken: $.jStorage.get("accessToken"),
                isLogin:'True',
                loginTime:new Date()
            };
            $http.post(adminurl + 'user/profile', data).then(function (data) {
                data = data.data;
                if (data.value === true) {
                    $.jStorage.set("profile", data.data);

                    callback();
                } else {
                    errorCallback(data.error);
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        search: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        countrySave: function (formData, callback) {
            $http.post(adminurl + 'country/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
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

        getOneCountry: function (id, callback) {
            $http.post(adminurl + 'country/getOne', {
                _id: id
            }).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        getLatLng: function (address, i, callback) {
            $http({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
                method: 'GET',
                withCredentials: false,
            }).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        uploadExcel: function (form, callback) {
            $http.post(adminurl + form.model + '/import', {
                file: form.file
            }).then(function (data) {
                data = data.data;
                callback(data);

            });

        },

    };
});