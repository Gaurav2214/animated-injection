$(document).ready(function () {
    dargDrop();
});

function dargDrop() {
    var wrongCount = 0;
    var i;
    var n = 2;
    var hita = 1.7;
    var checkPoint;
    $('#draggable1').draggable({
        axis: "x",
        containment: ".area",
        scroll: 'false',
        /*revert: 'true',*/

        start: function (event, ui) {
            var Startpos = $(this).position();
        },
        drag: function () {
            var Dragpos = $(this).position();
        },
        stop: function () {
            var Stoppos = $(this).position();
            checkPoint = Stoppos.left;
            // alert(checkPoint);
            $("#draggable1").draggable('disable');
            if (checkPoint / 61 <= (hita + 0.03) && checkPoint / 61 >= (hita - 0.03)) {
                $('.popMain').css('display', 'block');
                $('.popBottom').html('Correct');
            } else {
                $("#draggable1").draggable('enable');
                $("#draggable1").animate({
                    left: "0"
                }, 500, function () {
                });

                wrongCount++;
                $('.popMain').css('display', 'block');


                if (wrongCount == 2) {
                    $("#draggable1").stop();
                    $('.popBottom').html('Incorrect');

                } else {
                    $("#draggable1").stop();
                    $('.popBottom').html('Incorrect - try again');
                }
            }

        }
    });
    $('.reset').click(function () {
        $('#draggable1').stop();
        $("#draggable1").css('left', '0px');
        $("#draggable1").draggable('enable');
        $('.popMain').css('display', 'none');
        $('#yellowLabel1').css('display', 'none');
    });
    $('.close').click(function () {
        if (checkPoint / 61 <= (hita + 0.05) && checkPoint / 61 >= (hita - 0.05)) {
            $('.popMain').css('display', 'none');
            $("#draggable1").draggable('disable');
        } else {
            $("#draggable1").animate({ left: "0" }, 500, function () { });
            $('.popMain').css('display', 'none');
            $("#draggable1").draggable('enable');
            if (wrongCount == 2) {
                $('#draggable1').animate({
                    left: (hita * 61) + 'px'
                },
                    2500, function () {
                        $('#thisUnit').css('display', 'block');
                        $('#ansLane').css('display', 'block');
                    });

                $("#draggable1").draggable('disable');
            }
        }
    });
}
