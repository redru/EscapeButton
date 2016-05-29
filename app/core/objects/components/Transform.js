"use strict";

/**
 *
 * @param {number} posX
 * @param {number} posY
 * @param {number} rotX
 * @param {number} rotY
 * @param {number} sizeX
 * @param {number} sizeY
 * @constructor
 */
function Transform(posX, posY, rotX, rotY, sizeX, sizeY) {
    this.position = new Vector2({ x: posX, y: posY });
    this.rotation = new Vector2({ x: rotX, y: rotY });
    this.size = new Vector2({ x: sizeX, y: sizeY });
}

/**
 *
 * @param {number} offsetX
 * @param {number} offsetY
 * @constructor
 */
Transform.prototype.move = function(offsetX, offsetY) {
    this.position.x += offsetX;
    this.position.y += offsetY;
};

/**
 *
 * @param {number} newX
 * @param {number} newY
 * @constructor
 */
Transform.prototype.moveTo = function(newX, newY) {
    this.position.x = newX;
    this.position.y = newY;
};
