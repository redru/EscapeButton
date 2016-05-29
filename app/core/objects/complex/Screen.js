"use strict";

/**
 * 
 * @constructor
 */
var Screen = function() {
    this.size = new Vector2({ x: $(window).width(), y: $(window).height() });
};

/**
 *
 * @returns {Vector2}
 */
Screen.prototype.middle = function() {
    return new Vector2({ x: this.size.x / 2, y: this.size.y / 2 });
};

var screen = new Screen();
