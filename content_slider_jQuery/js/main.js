$(document).ready(function(){
    speed = 500;
    auto_speed = 500;
    auto_slide_handler = true;
    //initialize
    $('.slide').first().addClass('active');
    $('.slide').hide();
    $('.active').show();

    $('#prev').on('click',pre_slide);
    $('#next').on('click',next_slide);

    function pre_slide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        } else{
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }
    function next_slide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active');
        } else{
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

});