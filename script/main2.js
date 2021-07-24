$(document).ready(function () {
    const navBtn = document.querySelectorAll('.navigation__item-open');
    const tabItem = document.querySelectorAll('.navigation__wrapp');
    navBtn.forEach((item) => {
        item.addEventListener('click', function () {
            let activeBtn = item;
            let activeId = activeBtn.getAttribute('data-tab');
            let activeTab = document.querySelector(activeId);

            tabItem.forEach(function (item) {
                activeTab.classList.remove('navigation__wrapp-active');
            });

            $(activeBtn).toggleClass('navigation__item-close')
            activeTab.classList.add('navigation__wrapp-active');
            if (!activeBtn.classList.contains('navigation__item-close')) {
                activeTab.classList.remove('navigation__wrapp-active');
            }
        });
    });
    $('.header__open-btn').click((event) => {
        $('body').toggleClass('look')
    });

    $('.authorization__registration-transition').click((event) => {
        $('.authorization__wrapp-input').toggleClass('authorization__active'),
            $('.authorization__wrapp-registration').removeClass('authorization__active')
    });

    $('.authorization-deactive').click((event) => {
        $('.authorization__wrapp-registration').toggleClass('authorization__active'),
            $('.authorization__wrapp-input').removeClass('authorization__active')
    });


    $('.main__slaider-wrapp').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('body').on('click', '.password-control', function () {
        if ($('#password-input').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-input').attr('type', 'password');
        }
        return false;
    });

    $('body').on('click', '.password-control', function () {
        if ($('#password-input-2').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password-input-2').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-input-2').attr('type', 'password');
        }
        return false;
    });

    $('.authorization-popup-active').magnificPopup({});


    //card
    $('.card__list--scroll').not('.slick-initialized').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 500) {
            $('.card__list--scroll').not('.slick-initialized').slick({
                dots: true,
                dotsClass: "my-dots",
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }]
            });
        } else {
            $('.card__list--scroll').filter('.slick-initialized').slick('unslick');
        }
    });

    const slaiderBtn = document.querySelectorAll('.card__slaider-img');
    const slaiderItem = document.querySelectorAll('.card__foto-img');
    slaiderBtn.forEach((item) => {
        item.addEventListener('click', function () {
            let activeBtn = item;
            let activeId = activeBtn.getAttribute('data-open');
            let activeTab = document.querySelector(activeId);
            if (!activeBtn.classList.contains('-active')) {
                slaiderItem.forEach(function (item) {
                    item.classList.remove('--active');
                });
                activeTab.classList.add('--active');
            }
        });
    });

    const cabinetBtn = document.querySelectorAll('.cabinet__column-link');
    const cabinetItem = document.querySelectorAll('.cabinet__column-2-box ');
    cabinetBtn.forEach((item) => {
        item.addEventListener('click', function () {
            let activeBtn = item;
            let activeId = activeBtn.getAttribute('data-active');
            let activeTab = document.querySelector(activeId);
            if (!activeBtn.classList.contains('-active')) {
                cabinetItem.forEach(function (item) {
                    item.classList.remove('cabinet--active');
                });
                activeTab.classList.add('cabinet--active');
            }
        });
    });




    $('.card__foto-slaider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-btn slick-prev"><img src="img/img/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="img/img/arrow-right.png" alt="next"></button>'

    });

});