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

    // 약관 전체 동의하기
    $('#all').click(function(e){
        if(this.checked == true){
            $('.terms-list-box .terms').prop('checked', true);            
        }else{
            $('.terms-list-box .terms').prop('checked', false);
        }
    });

    // 약관팝업 닫기
    $('.btn-close').click(function(){
        $('.lpop-wrap').hide();
        $('.dimmed').hide();
        $('body').removeClass('stop-scroll');
    });

    checking();

});

function fnOpTerms(layer){
    let $me = $(layer);
    let $dimmed = $('.dimmed');

    $me.show();
    $me.find('.lpop-all-box').focus();
    $dimmed.show();
    $('body').addClass('stop-scroll');
}

function fnSubmitTerms(chId){
    let $chkId = $(chId);

    $chkId.prop('checked', true);
    fnBtnClose();
}

function fnBtnClose(){
    checking();
    $('.btn.agree').parent().siblings('.lpop-header').find('.btn-close').click();
}

function checking(){
    $('.terms-list-box .terms').on('click', function(){
        if($('.terms-list-box .terms').length === $('.terms-list-box .terms:checked').length){
            $('.terms-box #all').prop('checked', true);
            $('.terms-box #all').attr('disabled', false);
        }else{
            $('.terms-box #all').prop('checked', false);
        }
    });

    $('.btn.agree').on('click', function(){
        if($('.terms-list-box .terms').length === $('.terms-list-box .terms:checked').length){
            $('.terms-box #all').prop('checked', true);
            $('.terms-box #all').attr('disabled', false);
        }else{
            $('.terms-box #all').prop('checked', false);
            $('.terms-box #all').attr('disabled', true);
        }
    });
}