$(function(){
    //사이드 메뉴 show/hide
    $('.menuButtonWrap').on('click', function(){
        var $menuBox = $('.slideMenu');
        $(this).toggleClass('active');
        if($menuBox.hasClass('active')){
            $menuBox.removeClass('active');
        }else{
            $menuBox.addClass('active');
        }
    });

    //메시지 클릭 시 css애니메이션 토글
    $('.header .message').on('click', function(){
        $(this).toggleClass('stop');
    });
});

//page scroll event
$(window).scroll(function(){
    var scTop = $(window).scrollTop();
    if(scTop > 40){
        $('header').addClass('minSize');
    }else{
        $('header').removeClass('minSize');
    }

});
//Layer Content
function layerContShow(thisClass){
    $('.'+thisClass).show();
}
function layerContHide(thisClass){
    $('.'+thisClass).hide();
}

//page animation in
function pageMoveBetween(){
    setTimeout(function(){
        $('.mask.m01').addClass('active');
    }, 0);
    setTimeout(function(){
        $('.mask.m02').addClass('active');
    }, 150);
    setTimeout(function(){
        $('.mask.m03').addClass('active');
    }, 300);
    setTimeout(function(){
        $('.loading').addClass('active');
    }, 450);
}

//page animation out
function pageMoveFin(){
    setTimeout(function(){
        $('.loading').addClass('actived');
    }, 0);
    setTimeout(function(){
        $('.mask.m03').addClass('actived');    
    }, 150);
    setTimeout(function(){
        $('.mask.m02').addClass('actived');
    }, 300);
    setTimeout(function(){
        $('.mask.m01').addClass('actived');
    }, 450);
}
