"use strict";

/**
 *
 * @param {number} id
 * @param {Vector2} position
 * @constructor
 */
function Character(id, position) {
    this.element = $('#' + id);

    // Init modules
    this.transform = new Transform(position.x, position.y, 0, 0, this.element.width(), this.element.height());
    this.speed = Vector2.one();

    $('<span/>', {
        html: '+',
        style: 'font: bold 12px/30px Georgia, serif; color: red; position: relative; top: ' + this.element.height() / 2 + 'px; left: ' + this.element.width() / 2 + 'px;' + 'z-index: 99999;'
    }).appendTo(this.element);

    // Update position
    this.updatePosition();
}

/**
 *
 * @param {number} offsetX
 * @param {number} offsetY
 */
Character.prototype.move = function(offsetX, offsetY) {
    this.transform.move(offsetX * this.speed.x, offsetY * this.speed.y);
    this.updatePosition();
};

/**
 *
 */
Character.prototype.updatePosition = function() {
    this.element.css({
        left: (this.transform.position.x - this.transform.size.x / 2) + 'px',
        top: (this.transform.position.y - this.transform.size.y / 2) + 'px',
        position: 'absolute'
    });
};

/**
 *
 * @param {string} e
 * @param {function} callback
 */
Character.prototype.on = function(e, callback) {
    this.element.on(e, function (event) {
        return callback(event);
    });
};
