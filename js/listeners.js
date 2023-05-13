
document.addEventListener('keydown', e => {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 37:
            viking.moveLeft()
            return;
        case 39:
            viking.moveRight()
            return;
        case 38:
            viking.moveUp();
            return;
        case 40:
            viking.moveDown();
            return;
    }
})