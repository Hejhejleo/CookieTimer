var paused=true;
var second=0;
$( document ).ready(function() {


function count() {
        if (!paused) {
            second++;
            secondsToHours(second);
        }
    }

    setInterval(function() {
    count();
    },1000);

    $("#start").click(function () {
    paused=false;
    });

    $("#pause").click(function () {
    paused=true;
    });

    $("#reset").click(function () {
    second=0;
    secondsToHours(second)
    paused=true;
    });


    function secondsToHours(totalSec) {
        var hours   = Math.floor(totalSec / 3600);
        var minutes = Math.floor((totalSec - (hours * 3600)) / 60);
        var seconds = totalSec - (hours * 3600) - (minutes * 60);

        var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);

        $("#counter").html(result);

    }

});