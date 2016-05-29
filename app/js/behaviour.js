"use strict";

(function() {

    var character = null;

    $(document).ready(function() {
        console.log('Screen size:', screen.size.x, 'x', screen.size.y);

        character = new Character('wrapper', screen.middle());
        character._speed = new Vector2({ x: 50, y: 50});
        character.on('mousemove', function(event) {
            var direction = new Vector2({ x: character.position.x - event.pageX, y: character.position.y - event.pageY });
            console.log('Direction -->', '<' + direction.x, ',', direction.y + '>');
            character.move(Vector2.unit(direction));
        });
    });
    
})();
