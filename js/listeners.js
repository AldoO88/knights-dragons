document.addEventListener('keydown', e => {
    console.log(e.keyCode);
    e.preventDefault();
    switch (e.keyCode) {
        case 37:
            viking.state = 'moveleft';
            viking.moveLeft(true);
            return;
        case 39:
            viking.state = 'moveright';
            viking.moveRight();
            return;
        case 38:
            viking.state = 'moveup';
            viking.moveUp();
            return;
        case 40:
            viking.state = 'moveDown';
            viking.moveDown();
            return;
        case 68:
            viking.state = 'jump';
            viking.positionInY = viking.y;
            viking.jump();
            return;
        case 65:
            viking.state = 'attack'
            viking.attack();
            return;
    }
})