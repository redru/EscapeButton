"use strict";

// CLASS ---------------------------------------------------------------------------------------------------------------

/**
 *
 * @param {Object} argmap
 * @param {Vector2} [argmap.vector]
 * @param {number} [argmap.x]
 * @param {number} [argmap.y]
 * @constructor
 */
function Vector2(argmap) {
    this.x = 0;
    this.y = 0;

    if (argmap.vector) {
        this.x = argmap.vector.x;
        this.y = argmap.vector.y;
    } else {
        this.x = argmap.x;
        this.y = argmap.y;
    }
}

// STATIC --------------------------------------------------------------------------------------------------------------

/**
 *
 * @returns {Vector2}
 */
Vector2.zero = function() {
    return new Vector2({ x: 0, y: 0});
};

/**
 *
 * @returns {Vector2}
 */
Vector2.one = function() {
    return new Vector2({ x: 1, y: 1});
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
 * @param {Vector2} vector
 * @returns {Vector2}
 */
Vector2.unit = function(vector) {
    var magnitude = Vector2.magnitude(vector);
    return new Vector2({ x: vector.x / magnitude, y: vector.y / magnitude});
};

/**
 *
 * @param {Object} v1
 * @param {Object} v2
 * @returns {Vector2}
 */
Vector2.multiply = function(v1, v2) {
    return new Vector2({ x: v1.x * v2.x, y: v1.y * v2.y});
};

// ---------------------------------------------------------------------------------------------------------------------
