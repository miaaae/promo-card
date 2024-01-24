$(document).ready(function(){        

    $('#all').click(function(){
        if(this.checked == true){
            $('.terms-list-box .terms').prop('checked', true);
        }else{
            $('.terms-list-box .terms').prop('checked', false);
        }
    });    

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
    $('.terms-list-box .terms').on('change', function(){
        if($('.terms-list-box .terms').length === $('.terms-list-box .terms:checked').length){
            $('.terms-box #all').prop('checked', true);
            $('.terms-box #all').attr('disabled', false);
        }else{
            $('.terms-box #all').prop('checked', false);
            $('.terms-box #all').attr('disabled', true);
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