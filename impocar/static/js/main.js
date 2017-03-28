"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
'use strict';

$(function () {

    function tabWork() {
        $('.tab-content').finish();
        $('.tab-content').fadeOut();
        $('.tab-content[data-tab="' + $('.tab__inp:checked').val() + '"]').fadeIn();
    }

    tabWork();

    $('.tab').on('click', function () {
        $('.tab_active').removeClass('tab_active');
        $(this).addClass('tab_active');
        tabWork();
    });
});
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
'use strict';

$(function () {
    slider();
    $(window).resize(slider);

    function slider() {
        if ($(window).width() < 1000) {
            try {
                $('.news__list').slick({
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    prevArrow: $('.news .slider__arrow_prev'),
                    nextArrow: $('.news .slider__arrow_next'),
                    responsive: [{
                        breakpoint: 760,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            } catch (e) {}
        } else if ($('.news__list').hasClass('slick-slider')) {
            $('.news__list').slick('unslick');
        }
    }
});
"use strict";
"use strict";
'use strict';

$(function () {
    $('.reviews__slider .slider__list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: false,
        centerMode: true,
        initialSlide: 1,
        prevArrow: $('.reviews__slider .slider__arrow_prev'),
        nextArrow: $('.reviews__slider .slider__arrow_next')
    });
});
'use strict';

$(function () {

    var allRoutes = $('.route');

    [].forEach.call(allRoutes, function (route) {
        var tr = $(route).find('tr').length - 1;
        $(route).find('.route-table__cell_period').attr('rowspan', tr);

        function init() {
            var points = [];
            $(route).find('.point__name').each(function () {
                points.push($(this).text());
            });

            var multiRoute = new ymaps.multiRouter.MultiRoute({
                // Описание опорных точек мультимаршрута.
                referencePoints: points,
                // Параметры маршрутизации.
                params: {
                    // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                    results: 1
                }
            }, {
                // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                boundsAutoApply: true
            });

            // Создаем карту
            var myMap = new ymaps.Map(route.querySelector('.ymap'), {
                center: [55.750625, 37.626],
                zoom: 7,
                controls: []
            });

            // Добавляем мультимаршрут на карту.
            myMap.geoObjects.add(multiRoute);
        }

        ymaps.ready(init);
    });

    $('.route').on('click', function () {
        $('.route_open').removeClass('route_open');
        $(this).addClass('route_open');
    });
});
"use strict";
'use strict';

$(function () {
    $('.slide-image').on('mousemove', function (e) {
        $('.slide-image li[data-level="1"]').css('width', $(window).width() - e.pageX);
        $('.slide-image li[data-level="1"] img').css('left', -e.pageX);
    });
});