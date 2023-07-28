$(document).ready(function () {
    $('.ico').click(function () {
        $('.container').addClass('open');
    });


    $('.close').click(function () {
        $('.container').removeClass('open');
    });
});