"use strict";
"use strict";
"use strict";
'use strict';

$(function () {
    $('.content').on('click', function () {
        var slide = $(this).find('.content__slide');

        if (!slide) return;

        $(slide).toggleClass('content__slide_up');
    });
});
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
'use strict';

$(function () {
    $('.header__menu').on('click', function () {
        $(this).toggleClass('header__menu_opened');
        $('.page').toggleClass('page_no-scroll');
    });
});
"use strict";
"use strict";
"use strict";
'use strict';

$(function () {

    $('[data-dropitem]').hover(function () {
        function leave() {
            $('.menu__item_active').removeClass('menu__item_active');
            $('.navigation__drop_show').removeClass('navigation__drop_show');
            $('.menu_show').removeClass('menu_show');
        };
        leave();

        var navigation = $('.navigation__drop'),
            menu = $(navigation).find('[data-menuitem=' + $(this).attr('data-dropitem') + ']');

        $(this).addClass('menu__item_active');
        $(navigation).addClass('navigation__drop_show');
        $(menu).addClass('menu_show');

        $('header').on('mouseleave', leave);
    });

    $('.menu__item_drop-m').on('click', function (e) {
        var target = e.target;

        if (!$(target).hasClass('menu__link_m')) return;
        $('.menu__list-drop_m').slideUp();

        var drop = $(this).find('.menu__list-drop_m');

        if ($(drop).css('display') === 'none') {
            drop.slideDown();
        }
    });
});
'use strict';

$(function () {
    slider();
    $(window).resize(slider);

    function slider() {
        if ($(window).width() < 1000) {
            try {
                if ($('.news__list').hasClass('news__list_full')) {} else {
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
                }
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
    var frame = $('.pdf__frame iframe');

    $('[data-pdf]').on('click', function () {
        var href = $(this).attr('data-pdf');

        if ($(window).width() > 760) {
            $('.pdf__list-item_active').removeClass('pdf__list-item_active');
            $(this).addClass('pdf__list-item_active');
            frame.attr('src', 'http://docs.google.com/gview?url=' + href + '&embedded=true');
            try {
                frame.contentWindow.location.reload(true);
            } catch (e) {}
        } else {
            window.open(href, '_blank');
        }
    });

    $('[data-pdf]:first-child').trigger('click');

    if ($('.pdf__list').outerHeight() > $('.pdf').outerHeight()) {
        $('.pdf__list').css('height', 'inherit');
        $('.pdf__list').jScrollPane({
            hideFocus: true
        });
    }

    $(window).resize(function () {
        if ($(window).width() < 1170) {
            $('.jspContainer').css('width', '100%');
            $('.jspPane').css('width', '100%');
            $('.pdf__list').css('width', '100%');
        } else {
            $('.jspContainer').css('width', '');
            $('.jspPane').css('width', '');
            $('.pdf__list').css('width', '');
        }
    });
});
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
"use strict";
'use strict';

$(function () {
    $('.slide-image').on('mousemove', function (e) {
        $('.slide-image li[data-level="1"]').css('width', $(window).width() - e.pageX);
        $('.slide-image li[data-level="1"] img').css('left', -e.pageX);
    });

    if ($(window).width() < 760) {
        $('iframe').attr('height', '200px');
    }
});