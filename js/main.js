$(document).ready(function(){        

    // mobile menu
    $('.mo-btn').click(function(){
        $('.main-menu-wrap.mo').addClass('on');        
        $('.dimmed').show();
        $('body').addClass('stop-scroll');
    });

    $('.main-menu-wrap .menu-close .btn-close').click(function(){
        $('.main-menu-wrap.mo').removeClass('on');
        $('.dimmed').hide();
        $('body').removeClass('stop-scroll');

    });

});