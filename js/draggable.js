$(function(){
    $(".cube").mousemove(function (e){
        var elm = $(this);
        var xPos = e.pageX - elm.offset().left;
        var yPos = e.pageY - elm.offset().top;
        // console.log(xPos/5)
        var move = (xPos - yPos)/-10
        // console.log(move)

        // $(".cube").animate({rotation: move},{ duration: 0, step: function(now, fx) { $(this).css({"transform":  "rotateY("+now+"deg)"}); } } )
    });
    $(".logoBox").animate({opacity:1},{duration: 3000, queue: false });
    $(".logoBox").animate({bottom:5 + "%"},{duration: 2000, queue: false });  
})