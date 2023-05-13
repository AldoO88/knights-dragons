const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let requestId;
let gameFrames = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function vikingAnimation(){
    if(gameFrames % 10 === 0){
        if(viking.positionAnimate === 2){
            if(viking.animate === 5){
                viking.animate = 0;
            }else{
                viking.animate++;
            }

        }else{
            if(viking.animate === 11) {
                viking.animate = 0; 
            } else {
                viking.animate++;
            }
        }
    }

}

function assassinAnimation(){
    if(gameFrames % 10 === 0){

        if(assassin.animate ===17) {
            
            assassin.animate = 0; 
        } else {
            assassin.animate++;
        }
    }

}
function demonAnimation(){
    if(gameFrames % 10 === 0) {
        if(demon.animate === 3) {
            demon.animate = 0; 
        } else {
            demon.animate++;
        }
    }
}

function dragonAnimation(){
    if(gameFrames % 10 === 0) {
        if(dragon.animate === 8) {
            dragon.animate = 0; 
        } else {
            dragon.animate++;
        }
    }
}

function updateGame(){
    gameFrames++;
    clearCanvas();
    background.draw();
    //vikingAnimation();
    viking.draw();
    //assassinAnimation()
    //assassin.draw();
    //dragonAnimation();
    //demonAnimation();
    //demon.draw();
    //dragon.draw();
    //viking.x += viking.vx; 
    //viking.y += viking.vy; 
    if(requestId) {
        requestAnimationFrame(updateGame)
    } 
}

function startGame(){
    if(!requestId){
        requestId = requestAnimationFrame(updateGame)
    }   
}

window.onload = () => {
    startGame();    
}
