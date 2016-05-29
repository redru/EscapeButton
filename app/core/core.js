"use strict";
(function() {

    var devUI = { };

    // On load
    $(window).load(function() {

        if ( $('timer').length )
            devUI.timer = $('timer');

        _main_loop();
    });

    /**
     *
     * @private
     */
    function _main_loop() {
        var milliseconds = 0;

        window.setInterval(function () {
            milliseconds += 16;

            if (devUI.timer)
                devUI.timer.html(milliseconds + ' ms');
        }, 16);
    }

})();
