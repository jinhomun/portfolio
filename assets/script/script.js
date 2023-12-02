$(function(){
    // 이미지 슬라이드
    let currentIndex = 0;   //현재 이미지
    $(".item__img").append($(".slider").first().clone(true));

    setInterval(function(){
        currentIndex++;     //현재 이미지를 1씩 증가
        $(".slider").animate({marginlight: 0 * currentIndex}, 600);

        if(currentIndex == 3){
            setTimeout(function(){
                $(".slider").animate({marginlight:0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
});