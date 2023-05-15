const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let requestId;
let gameFrames = 0;
let gravity = 8.9;
let points = 0;
const demons =[];

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function vikingAnimation(){
    if(gameFrames % 10 === 0){
        console.log(viking.state);
        if(viking.state === 'stand'){
            //viking.positionAnimate = 0;
            if(viking.positionAnimate === 1){
                if(viking.animate === 0){
                    viking.animate = 0;
                    viking.state = 'stand';
                    viking.positionInY = 0;
                    viking.isAttaking = false;
                }else{
                    viking.animate++;
                }
            }
        }else if(viking.state === 'attack'){
            if(viking.positionAnimate === 4){
                if(viking.animate === 3){
                    viking.animate = 0;
                    viking.positionAnimate = 0;
                    viking.state = 'stand';
                    viking.isAttaking = false;
                    viking.positionInY = 0;

                }else{
                    viking.animate++;
                }
            }
        }else if(viking.state === 'jump'){
            if(viking.positionAnimate === 5){
                if(viking.animate === 6){
                    viking.animate = 0;
                    viking.positionAnimate = 0;
                    viking.state = 'stand';
                    viking.isAttaking = false;
                    viking.y = viking.positionInY;
                }else{
                    viking.animate++;  
                }
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

function checkCollisions() {
     
    demons.forEach((demon, i) => {
        if(viking.isTouching(demon)) {
            if(viking.state === 'attack' && viking.animate === 3){
                demons.splice(i, 1);
            }else{
                viking.hp--;
            }
            
            
        }
        points += 0.5;
    })
}

function generateDemons() {
    if(gameFrames % 400 === 0) {
        const randomPosition = Math.floor(Math.random() * 400) - 100;
        const demon = new Demon(randomPosition);
        demons.push(demon);
    }
}
function drawDemons() {
    demons.forEach(demon => {
        demon.draw();
        if(gameFrames % 20 === 0) {
            if(viking.isTouching(demon)) {
            if(demon.animate === 0) {
                demon.animate = 5; 
            } else {
                demon.animate--;
            }    
        }else{
            if(demon.animate === 2) {
                demon.animate = 5; 
            } else {
                demon.animate--;
            }
        }
    }
        
            
          
    }
    )
}


function updateGame(){
    gameFrames++;
    clearCanvas();
    background.draw();
    vikingAnimation();
    viking.draw();
    //assassinAnimation()
    //assassin.draw();
    //demonAnimation();
   //demon.draw();
    //dragon.draw();
    //dragonAnimation();
    checkCollisions();
    generateDemons();
    drawDemons();

    /*viking.y += viking.vy; 
    viking.y += gravity;
    viking.x += viking.vx;*/

    if(requestId) {
        requestId = requestAnimationFrame(updateGame)
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
