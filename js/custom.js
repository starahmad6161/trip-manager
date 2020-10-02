$(function() {
    'use strict';
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2 
            },
            578: {
                slidesPerView: 3 
            },
            768: {
                slidesPerView: 4 
            }
        }
    });

    var navState = false;
    $(window).on('load scroll', function() {
        var scroll_Top = $(window).scrollTop();

        if (scroll_Top >= 300 ) {
            if (!navState) { // false
                $('.navbar').addClass('fixed-top');
                navState = true;
            }
        } else {
            $('.navbar').removeClass('fixed-top');
            navState = false;
        }
    });

    //Responsive (Home div)
    $(window).on('load resize', function() {
        var navbarHeight = $('.navbar').innerHeight();
        var winHeight = window.innerHeight;
        $('.home').css({
            height: (winHeight - navbarHeight)
        });
    });
    $('.navbar .navbar-nav .nav-item').on('click', function() {
        var dataNav = $(this).data('nav');
        $(this).addClass('active').siblings().removeClass('active');
        $('html, body').animate({
            scrollTop: $(dataNav).offset().top - 70
        }, 700);
    });

    //Trigger datepicker
    $('#datepicker').datepicker();



    
    /*Start Info Section*/
    $(window).on('load resize', function() {
        
        var winWidth = window.innerWidth;
        //Reset All Items When Resize
        //$('.info-section .inner-contents .inner-content-1').addClass('active').show().siblings().removeClass('active').hide();
        //$('.info-section .all-content .options-list .list_option:eq(0)').addClass('selected').siblings().removeClass('selected');
        //$('.info-section .mob-option-btn:eq(0)').addClass('selected').siblings().removeClass('selected');
        
        if (winWidth < 992) {
            //Small Screen
            $('.info-section .mob-option-btn').on('click', function() {
                var dataContent = $(this).data('content');
                var innerContent = $('.info-section .inner-contents').find($(dataContent));
                
                $(this).addClass('selected').siblings().removeClass('selected');

                innerContent.siblings().removeClass('active').slideUp(200, function() {
                    innerContent.slideDown(200).addClass('active');
                });
            });
            
        } else {
            //Large Screen
            $('.info-section .all-content .options-list .list_option').on('click', function() {
                var dataContent = $(this).data('content');
                var innerContent = $('.info-section .inner-contents').find($(dataContent));
                $(this).addClass('selected').siblings().removeClass('selected');
                
                innerContent.siblings().removeClass('active').fadeOut(0, function() {
                    innerContent.fadeIn(200).addClass('active');
                });
            });
        }
    });
    

    //When Click Images [Room Type]
    $('.info-section .thumb-imgs .thumb-image').on('click', function() {
        var dataImage = $(this).data('img');
        $(this).addClass('selected').siblings().removeClass('selected');

        var mainImg = $(this).parents('.inner-content').find($(dataImage));
        mainImg.siblings().fadeOut(0, function() {
            mainImg.fadeIn(200);
        });
    });
    /*Start Info Section*/
    
    
});