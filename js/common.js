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

    // 안내팝업
    fnInfoPop();     

});

function fnCloseInfo(){
    $('.info-pop-wrap').hide();
    $('.dimmed').hide();
} 

function footer(){
    let str = "";

    str += '<div class="footer-wrap">';
    str += '    <p class="footer-tit">Ordinary Days, <br class="mo">special you.</p>';
    str += '    <div class="flex-box">';
    str += '        <div class="cont">';
    str += '            <div class="address-box">';
    str += '                <p>서울시 중구 을지로 170 올디카드(주) 대표이사 올디</p>';
    str += '                <div class="info">';
    str += '                    <p>사업자번호 000-00-00000</p>';
    str += '                    <p>통신판매업 신고번호 제 2024-서울중구-0000호</p>';
    str += '                </div>';
    str += '            </div>';
    str += '            <div class="family-site">';
    str += '                <ul>';
    str += '                    <li><a href="#;" title="새 창 열림">회원가입</a></li>';
    str += '                    <li><a href="#;" title="새 창 열림">고객센터</a></li>';
    str += '                    <li><a href="#;" title="새 창 열림">FAQ</a></li>';
    str += '                </ul>';
    str += '            </div>';
    str += '        </div>';
    str += '        <div class="terms-wrap">';
    str += '            <div class="terms-box">';
    str += '                <a href="#;" title="새 창 열림">개인정보처리방침</a>';
    str += '                <a href="#;" title="새 창 열림">이용약관</a>';
    str += '            </div>';
    str += '        </div>';
    str += '    </div>';
    str += '</div>';

    $('#footer').html(str);
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