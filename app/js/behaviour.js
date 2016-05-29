(function() {
    var character = null;

    $(document).ready(function() {
        console.log('Screen size:', screen.size.x, 'x', screen.size.y);

        character = new Character('wrapper', screen.middle());
        character._speed = new Vector2(50, 50);
        character.on('mousemove', function(event) {
            var direction = new Vector2(character.position.x - event.pageX, character.position.y - event.pageY);
            console.log('Direction -->', '<' + direction.x, ',', direction.y + '>');
            character.move(V2.Unit(direction));
        });
    });
})();
