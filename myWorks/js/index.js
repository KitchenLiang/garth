/**
 * Created by Administrator on 2015/11/26 0026.
 */
$(document).ready(function(){

    //alert($('.responsive_show').find('li').length);
    $('.responsive_show').find('li').each(function(index,element){
        $(this).click(function(){
            $(this).addClass("text_blue");
            $(this).prevUntil().removeClass("text_blue");
            $(this).nextUntil().removeClass("text_blue");
            //alert( $(".responsive_show img")[index].src);
            $($(".responsive_show img")[index]).fadeIn(1000);
            $($(".responsive_show img")[index]).siblings().hide();
         });
    });

$('.panel-heading').find('a').each(function(index,element){
    $(this).click(function(){
        //alert( $($(this).parent().next()).html());
        //$(this).parent().next().slideToggle("slow");
        $(this).find('p').slideToggle("slow");
    });
});

    $('.search').click(function(){
       $('#user_search').fadeToggle(1000);
    });

    $(function (){
        setSlip();
    });

    var setSlip = function(){
        var slip = $('#navslip');
        var a = $('.nav_active');
        //��ʼ������
        slip.css({
            'width':a.width(),
            'left' :parseInt(a.position().left)+'px'
        });
        if(slip.css('display') == 'none'){
            slip.show();
        };
        $('.nav_right li').mouseenter(function(){
            //��ʾ����

            if(slip.css('display') == 'none'){
                slip.show();
            };

            if($(this).find('a').hasClass('nav_active')){

            }else{
                $('.nav_active').removeClass('nav_active');
                //�ƶ�����
                slip.stop().animate({
                    width: $(this).width(),
                    left:  parseInt($(this).position().left)+'px'
                },300);

            }

        });



        $('.nav_right li').mouseleave(function(){

            slip.stop().animate({
                width: $('#this_page').width(),
                left:  parseInt($('#this_page').position().left)+'px'
            },300,function(){
                $('#this_page').addClass('nav_active');
            });



        });
    };

    (function(){

            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 5000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
            });



        //$(".user_reg").bind("click",function(){
        //    $(".reg_form").load("reg.html");
        //});
        //$(".user_login").bind("click",function(){
        //    $("#myModal2").load("login.html");
        //
        //});
    })();





});