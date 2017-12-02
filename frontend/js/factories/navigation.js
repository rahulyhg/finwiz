myApp.factory('NavigationService', function () {
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
    };
});