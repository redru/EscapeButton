"use strict";

(function() {

    var devUI = {
        timer: undefined
    };

    // On load
    $(window).load(function() {

        devUI.timer = $('timer');

        _main_loop();
    });

    function _main_loop() {
        var milliseconds = 0;

        window.setInterval(function () {
            milliseconds += 16;

            if (devUI.timer)
                devUI.timer.html(milliseconds + ' ms');
        }, 16);
    }

})();
