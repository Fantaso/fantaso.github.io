var a = $("#fh5co-about").offset().top;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('#nav-bar').css({"background":"rgba(0,0,0, 0.3)"});
    } else {
       $('#nav-bar').css({"background":"rgba(0,0,0, 0.1)"});
    }
});