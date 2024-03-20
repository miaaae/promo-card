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

    // 안내팝업
    fnInfoPop();  

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
        }
    });
}

function fnInfoPop(){
    let str = "";

    str += '<div class="info-pop-wrap">';
    str += '    <div class="pop-box">';
    str += '        <P>이 페이지는 포트폴리오를 위해 구성 되었습니다. 감사합니다 😊</P>';
    str += '        <button onclick="fnCloseInfo();">닫기</button>';
    str += '    </div>';
    str += '</div>';

    $('.info-pop-wrap').show().html(str);
    $('.dimmed').show(); 
}

function fnCloseInfo(){
    $('.info-pop-wrap').hide();
    $('.dimmed').hide();
} 