$(document).ready(function() {
    // change every 2 seconds
    $('#mycarousel').carousel({interval: 2000});

    /* $('#carousel-pause').on('click', function() {
        $('#mycarousel').carousel('pause');
    });

    $('#carousel-play').on('click', function() {
        $('#mycarousel').carousel('cycle');
    }); */

    $('#carouselButton').on('click', function() {
        if ($(this).children('span').hasClass('fa-pause')) { // it is a pause button
            $('#mycarousel').carousel('pause');
            $(this).children('span').removeClass('fa-pause');
            $(this).children('span').addClass('fa-play');
        } else if ($(this).children('span').hasClass('fa-play')) { // it is a play button
            $('#mycarousel').carousel('cycle');
            $(this).children('span').addClass('fa-pause');
            $(this).children('span').removeClass('fa-play');
        }
    });

    $('#reserveButton').on('click', function() {
        $('#reservationModal').modal('show');
    });

    $('#loginLink').on('click', function() {
        $('#loginModal').modal('show');
    });

});