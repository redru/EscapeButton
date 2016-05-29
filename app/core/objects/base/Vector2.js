"use strict";

/**
 *
 * @param {Object} argmap
 * @param {Vector2} [argmap.vector2]
 * @param {number} [argmap.x]
 * @param {number} [argmap.y]
 * @constructor
 */
var Vector2 = function(argmap) {
    this.x = 0;
    this.y = 0;

    if (argmap.vector2) {
        this.x = argmap.vector2.x;
        this.y = argmap.vector2.y;
    } else {
        this.x = argmap.x;
        this.y = argmap.y;
    }
};

/**
 *
 * @param {Object} vector
 * @returns {number}
 */
Vector2.magnitude = function(vector) {
    return Math.sqrt( (Math.pow(vector.x, 2) + Math.pow(vector.y, 2)) );
};

/**
 *
 * @param {Object} vector
 * @returns {Vector2}
 */
Vector2.unit = function(vector) {
    var magnitude = Vector2.magnitude(vector);
    return new Vector2({ x: vector.x / magnitude, y: vector.y / magnitude});
};
