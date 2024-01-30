$(document).ready(function(){        

    // mobile menu
    $('.mo-btn').click(function(){
        $('.main-menu-wrap').addClass('on');;        
        $('.dimmed').show();
        $('body').addClass('stop-scroll');
    });

    $('.main-menu-wrap .menu-close .btn-close').click(function(){
        $('.main-menu-wrap').removeClass('on');
        $('.dimmed').hide();
        $('body').removeClass('stop-scroll');

    });

});