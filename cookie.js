var cookieCounting=false;
$ ( document ).ready(function () {

    var nowTime = Date.now()/1000;
    var startTimeCookie = document.cookie;

    if(!(startTimeCookie=="")){
     second = Math.round(nowTime - startTimeCookie);
        secondsToHours(second);
        paused=false;
        cookieCounting=true;
    }

    $("#offline").click(function () {
        second=0;
        var startTime = Date.now()/1000;
        document.cookie = "0; expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = startTime+"";
        paused=false;
        cookieCounting=true;
        secondsToHours(second);

    });

    $("#reset").click(function () {
        document.cookie = "0; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    });

    function secondsToHours(totalSec) {
        var hours   = Math.floor(totalSec / 3600);
        var minutes = Math.floor((totalSec - (hours * 3600)) / 60);
        var seconds = totalSec - (hours * 3600) - (minutes * 60);

        var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);

        $("#counter").html(result);

    }

});