const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let requestId;
let gameFrames = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function vikingAnimation(){
    if(gameFrames % 10 === 0) {
        if(viking.animate === 11) {
            viking.animate = 0; 
        } else {
            viking.animate++;
        }
    }

}
function updateGame(){
    gameFrames++;
    clearCanvas();
    background.draw();
    vikingAnimation();
    viking.draw();
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
