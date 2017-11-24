myApp.factory('NavigationService', function () {
    var navigation = [{
            name: "ABOUT",
            classis: "active",
            anchor: "home",
            subnav: []
        }, {
            name: "ARTICLES",
            classis: "active",
            anchor: "form",
            subnav: []
        },
        {
            name: "QUICK BITES",
            classis: "active",
            anchor: "grid",
            subnav: []
        },
        {
            name: "TESTIMONIALS",
            classis: "active",
            anchor: "grid",
            subnav: []
        },
        {
            name: "VLOGS",
            classis: "active",
            anchor: "grid",
            subnav: []
        },
        {
            name: "GALLERY",
            classis: "active",
            anchor: "grid",
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});