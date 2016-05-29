"use strict";

(function() {

    $(document).ready(function() {
        console.log('Screen size:', screen.size.x, 'x', screen.size.y);

        var character = new Character('wrapper', screen.middle());
        character.speed = new Vector2({ x: 50, y: 50});
        character.on('mousemove', function(event) {
            var direction = new Vector2({ x: character.transform.position.x - event.pageX, y: character.transform.position.y - event.pageY });
            var unit = Vector2.unit(direction);
            console.log('Direction -->', '<' + unit.x, ',', unit.y + '>');
            character.move(unit.x, unit.y);
        });
    });
    
})();
