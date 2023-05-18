document.addEventListener('keydown', e => {
    e.preventDefault();
    switch (e.keyCode) {
        case 37:
            viking.state = 'moveleft';
            viking.isAttaking = false;
            viking.moveLeft(true);
            return;
        case 39:
            viking.state = 'moveright';
            viking.isAttaking = false;
            viking.moveRight();
            return;
        case 38:
            viking.state = 'moveup';
            viking.isAttaking = false;
            viking.moveUp();
            return;
        case 40:
            viking.state = 'moveDown';
            viking.isAttaking = false;
            viking.moveDown();
            return;
        case 68:
            viking.state = 'jump';
            viking.isAttaking = false;
            viking.positionInY = viking.y;
            viking.jump();
            return;
        case 65:
            viking.state = 'attack'
            viking.isAttaking = true;
            viking.attack();
            return;
    }
})