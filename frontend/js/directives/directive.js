myApp.directive('img', function ($compile, $parse) {
        return {
            restrict: 'E',
            replace: false,
            link: function ($scope, element, attrs) {
                var $element = $(element);
                if (!attrs.noloading) {
                    $element.after("<img src='img/loading.gif' class='loading' />");
                    var $loading = $element.next(".loading");
                    $element.load(function () {
                        $loading.remove();
                        $(this).addClass("doneLoading");
                    });
                } else {
                    $($element).addClass("doneLoading");
                }
            }
        };
    })

    .directive('hideOnScroll', function ($document) {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var lastScrollTop = 0;
                $(window).scroll(function (event) {
                    var st = $(this).scrollTop();
                    if (st > lastScrollTop) {
                        $(element).addClass('nav-up');
                    } else {
                        $(element).removeClass('nav-up');
                    }
                    lastScrollTop = st;
                });
            }
        };
    })
    // .directive('customScroll', function ($document) {
    //     return {
    //         restrict: 'EA',
    //         replace: false,
    //         link: function (scope, element, attr) {
    //             var $element = $(element);

    //             var lastScrollTop = 0;

    //             var drag = false;

    //             $($element).scroll(function (event) {

    //                 if (drag) {
    //                     return
    //                 }

    //                 console.log("this is custom scroll", $(this).scrollTop())

    //                 //    console.log($(this).height())
    //                 //    var scroll_thumb=($(this).scrollTop()/100*$(this).height())

    //                 //taking percetage of scroll  ( scrolltop/scrollbootom)

    //                 var percent1 = $(this).scrollTop() / ($(this)[0].scrollHeight - $(this).height()) * 100;

    //                 //moving thumb as per scroll percentage
    //                 var scroll_thumb = (percent1 / 100 * $(this).height())

    //                 $('.scroll_thumb').css("top", scroll_thumb)
    //                 // console.log(scroll_thumb, "SCROLL THUMB", $(this)[0].scrollHeight)

    //             });



    //             $(".scroll_thumb").mousedown(
    //                 function (event) {
    //                     drag = true;
    //                     console.log("drag down", drag)
    //                 }
    //             )

    //             $(window).mouseup(
    //                 function (event) {
    //                     drag = false;
    //                     console.log("drag up", drag)
    //                 }
    //             )
    //             // $(window).mousemove(
    //             //     function (event) {

    //             //         if (drag) {
    //             //             console.log("mouse move client Y", event.target)
    //             //             $(".scroll_thumb").css("top", event.offsetY )
    //             //         }
    //             //     })
    //             $(".scroll_thumb").draggable({
    //                 containment: 'parent',
    //                 axis: 'y',
    //                 drag: function () {
    //                     // $pos = $('.slider').position().top;
    //                     // $ScrollPercent = $pos / $sHeight * 100;
    //                     // $ScrollPx = $ScrollPercent / 100 * $bHeight;
    //                     // $('.scroll').scrollTop($ScrollPx);
    //                     console.log("this is drag")
    //                 }
    //             })



    //         }
    //     };
    // })
    .directive('articleList', function () {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element)

                $(window).scroll(
                    function (event) {
                        var top = $(this).scrollTop();
                        // console.log(top)
                        if (top > 135) {
                            $element.addClass('artical_float');
                        } else {
                            $element.removeClass('artical_float');
                        }
                        if ((top + $('.article_list').height() + 60) > $('footer').offset().top) {
                            // console.log("in the bottom")
                            $element.addClass('touched_bottom');
                            // $element.css("bottom",0);
                        } else {
                            $element.removeClass('touched_bottom');
                            // $element.css("bottom","unset");
                        }



                    }
                )

            }
        };

    })


    .directive('fancybox', function ($document) {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var target;
                if (attr.rel) {
                    target = $("[rel='" + attr.rel + "']");
                } else {
                    target = element;
                }

                target.fancybox({
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    closeBtn: true,
                    padding: 0,
                    helpers: {
                        media: {}
                    }
                });
            }
        };
    })

    .directive('autoHeight', function ($compile, $parse) {
        return {
            restrict: 'EA',
            replace: false,
            link: function ($scope, element, attrs) {
                var $element = $(element);
                var windowHeight = $(window).height();
                $element.css("min-height", windowHeight);
            }
        };
    })


    .directive('replace', function () {
        return {
            require: 'ngModel',
            scope: {
                regex: '@replace',
                with: '@with'
            },
            link: function (scope, element, attrs, model) {
                model.$parsers.push(function (val) {
                    if (!val) {
                        return;
                    }
                    var regex = new RegExp(scope.regex);
                    var replaced = val.replace(regex, scope.with);
                    if (replaced !== val) {
                        model.$setViewValue(replaced);
                        model.$render();
                    }
                    return replaced;
                });
            }
        };
    })


;