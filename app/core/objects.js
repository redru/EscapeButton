// GLOBALS ----------------------------------------------------------------------------------------

var screen = new Screen();

var V2 = {
    /**
     *
     * @param vector
     * @returns {number}
     * @constructor
     */
    Magnitude: function(vector) {
        return Math.sqrt((Math.pow(vector.x, 2) + Math.pow(vector.y, 2)));
    },
    /**
     *
     * @param vector
     * @returns {Vector2}
     * @constructor
     */
    Unit: function(vector) {
        var magnitude = this.Magnitude(vector);
        return new Vector2(vector.x / magnitude, vector.y / magnitude);
    }
};

// CLASSES ----------------------------------------------------------------------------------------

function Vector2(x, y) {
    var _x = x;
    var _y = y;

    return {
        x: _x,
        y: _y
    }
}

function Screen() {
    var _size = new Vector2($(window).width(), $(window).height());

    function _middle() {
        return new Vector2(_size.x / 2, _size.y / 2);
    }

    return {
        size: _size,
        middle: _middle
    }
}

function Character(id, position) {
    { // Constructor
        var _element = $('#' + id);

        var _position = {x: 0, y: 0};
        var _size = { x: _element.width(), y: _element.height() };
        var _speed = {x: 1, y: 1};

        if (position)
            _moveTo(position);
    }

    // PRIVATE --------------------------------------------

    function _update_position() {
        _element.css({
            left: (_position.x - _size.x / 2) + 'px',
            top: (_position.y - _size.y / 2) + 'px',
            position: 'absolute'
        });
    }

    function _check_bounds() {
        return _position.x <= 0 || _position.x >= screen.size.x || _position.y <= 0 || _position.y >= screen.size.y;
    }

    // PUBLIC ---------------------------------------------

    function _move(offset) {
        _position.x += (offset.x * _speed.x);
        _position.y += (offset.y * _speed.y);

        if (_check_bounds()) {
            console.log('Entered border! Resetting position...');
            _position = screen.middle();
        }

        _update_position();
    }

    function _moveTo(point) {
        _position.x = point.x;
        _position.y = point.y;

        if (_check_bounds()) {
            console.log('Entered border! Resetting position...');
            _position = screen.middle();
        }

        _update_position();
    }

    function _on(event, callback) {
        $('#' + id).on(event, function (event) {
            return callback(event)
        });
    }

    // ----------------------------------------------------

    return {
        position: _position,
        size: _size,
        speed: _speed,
        move: _move,
        moveTo: _moveTo,
        on: _on
    }
}
