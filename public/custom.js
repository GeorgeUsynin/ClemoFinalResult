$(document).ready(function () {

    //contact form show/hide

    $('.send').click(function () {
        $('#contactForm').hide();
        $('#thank').show();
    });

    $('#new_message').click(function () {
        $('#thank').hide();
        $('#contactForm').show();
    });

    //works show/hide

    $('#showMore').click(function () {
        $('.lab').show().css('display', 'grid');
        $('.show-more').hide();
        $('.hide-more').show();
    });

    $('#hideMore').click(function () {
        $('.lab, .hide-more').hide();
        $('.show-more').show();

    });

    $('#cat1').click(function () {
        $('.arch, .coast').show().css('display', 'grid');
        $('.show-more').show();
        $('.lab').hide();
    });

    $('#cat2').click(function () {
        $('.arch').show().css('display', 'grid');
        $('.coast, .show-more, .lab, .hide-more').hide();

    });

    $('#cat3').click(function () {
        $('.arch, .show-more, .lab, .hide-more').hide();
        $('.coast').show().css('display', 'grid');

    });

    $('#cat4').click(function () {
        $('.arch, .coast, .show-more, .hide-more').hide();
        $('.lab').show().css('display', 'grid');

    });

    //worksolo counter
    $('.next').click(function () {
        var numberOfSlide = $('#slideNumber').html();
        var number = parseInt(numberOfSlide);
        if (number >= 1 && number <= 4) {

            number++;
            $('#slideNumber').html(`${number}/5`);
        }
        else {
            $('#slideNumber').html('1/5');
        }
    });

    $('.previous').click(function () {
        var numberOfSlide = $('#slideNumber').html();
        var number = parseInt(numberOfSlide);
        if (number <= 5 && number >= 2) {
            number--;
            $('#slideNumber').html(`${number}/5`);
        }
        else {
            $('#slideNumber').html(`5/5`);
        }
    });

    $('#circle1').click(function () {
        $('#slideNumber').html(`1/5`);
    });
    $('#circle2').click(function () {
        $('#slideNumber').html(`2/5`);
    });
    $('#circle3').click(function () {
        $('#slideNumber').html(`3/5`);
    });
    $('#circle4').click(function () {
        $('#slideNumber').html(`4/5`);
    });
    $('#circle5').click(function () {
        $('#slideNumber').html(`5/5`);
    });

    //blog show/hide

    $('#showMore2').click(function () {
        $('.last, .hide-more2').show();
        $('.show-more2').hide();

    });

    $('#hideMore2').click(function () {
        $('.last, .hide-more2').hide();
        $('.show-more2').show();

    });

    $('#cat11').click(function () {
        $('.creative, .art, .design, .show-more2').show();
        $('.last').hide();
        $('.forth').css('grid-row', '4/span 1');
        $('.last').css('grid-row', '6/span 1');
    });

    $('#cat22').click(function () {
        $('.creative').show();
        $('.art, .design, .show-more2, .hide-more2').hide();

    });

    $('#cat33').click(function () {
        $('.creative, .design, .show-more2, .hide-more2').hide();
        $('.art').show();
        $('.forth').css('grid-row', '2/span 1');

    });

    $('#cat44').click(function () {
        $('.creative, .art, .show-more2, .hide-more2').hide();
        $('.design').show();
        $('.last').css('grid-row', '2/span 1');

    });

});

var radioNumber = null;

function showComment(radioNumber) {
    var arrayComment = document.getElementsByClassName('comment');

    if (radioNumber <= 3) {
        for (var i = 0; i <= 3; i++) {
            arrayComment[i].style.display = 'none';
        }
        arrayComment[radioNumber].style.display = 'grid';
    }
    else if (3 < radioNumber && radioNumber <= 7) {
        for (var i = 4; i <= 7; i++) {
            arrayComment[i].style.display = 'none';
        }
        arrayComment[radioNumber].style.display = 'grid';
    }
    else {
        for (var i = 8; i <= 11; i++) {
            arrayComment[i].style.display = 'none';
        }
        arrayComment[radioNumber].style.display = 'grid';
    }
}
