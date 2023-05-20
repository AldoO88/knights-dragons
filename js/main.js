const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let requestId;
let gameFrames = 0;
let dragonFrames = 0;
let gravity = 8.9;
let points = 0;
let demons =[];
let touching = 0;

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function vikingAnimation(){
    if(gameFrames % 5 === 0){
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

function vikinDead() {

    if(gameFrames % 5 === 0){
    if(viking.animate === 9){
        viking.animate = 0;
        viking.state = 'stand'
        viking.positionAnimate = 0;
        viking.x = 10;
        viking.hp--;
        dontKey = true;
        touching = 0;
    }else{
        viking.animate++
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
    demons.forEach(demon => {
        if(gameFrames % 5 === 0) {
            if(demon.state === 'walk'){
                if(demon.animate === 0){
                    demon.animate = 5; 
                    demon.state = 'attack';
                    demon.positionAnimate = 2;
                }else{
                    demon.animate--;
                }
            } 
            if(demon.state === 'attack'){
                if(demon.animate === 2){
                    demon.animate = 5; 
                    demon.state = 'walk';
                    demon.positionAnimate = 1;
                }else{
                    demon.animate--;
                }
            } 
        }
    });
}


function dragonWalk(){
    if(gameFrames % 10 === 0) {
        
        if(dragon.state === 'walk' ){
            if(dragon.animate === 5) {
                dragon.animate = 8;
                dragon.positionAnimate = 0;
                dragon.state = 'attack';
            } else {
                dragon.animate--;             
            }
       }
       
       if(dragon.state === 'attack'){
        if(dragon.animate === 0) {
            dragon.animate = 8; 
            dragon.positionAnimate = 2;
            dragon.state = 'move';
            
        } else {
            dragon.animate--; 
            //dragonFrames++;
        }
    }
    if(dragon.state === 'move'){
        if(dragon.animate === 5) {
            dragon.animate = 8; 
            dragon.state = 'walk';
            dragon.positionAnimate = 2;
        } else {
            dragon.animate--;
            dragon.y = Math.floor(Math.random() * (60 + 200) - 200);
            console.log(dragon.y);
            dragon.x += 30;
               
        }
   }
       
    }   
}

function dragonHit(){
    if(gameFrames % 10 === 0) {
        if(dragon.state === 'hit'){
            if(dragon.animate === 3){
                dragon.animate = 8;
                dragon.state = 'move';
                dragon.positionAnimate = 2;

            }else{
                dragon.animate--;
            }
        }
        
    }   
}

function dragonDead(){
    if(gameFrames % 10 === 0) {
        if(dragon.state === 'dead'){
            if(dragon.animate === 3){
                dragon.animate = 3;
                dragon.state = 'move';
                dragon.positionAnimate = 2;

            }else{
                dragon.animate--;
            }
        }
    }

    
}
function checkCollisionsDragon() {

        if(viking.isTouching(dragon)) {
            if(viking.state === 'attack' && viking.isAttaking && viking.positionAnimate === 4){  
                dragon.hp--;
                points += 5;
                dragon.state = 'hit'
                dragon.animate = 8;
                dragon.positionAnimate = 4;
                viking.x -= 100;

                if(dragon.hp <= 0){
                    dragon.state = 'dead';
                    dragon.animate = 8;
                     dragon.positionAnimate = 3;
                }   
            }else if(dragon.state === 'attack'){
                
                touching++;
                if(touching === 1){
                    viking.animate = 0;
                    viking.positionAnimate = 6;
                    viking.state = 'dead';
                    dragon.animate = 8;
                    dragon.state = 'move';
                    dontKey = false;
                    //viking.x = 10;
                }
            }   
        }
}

function checkCollisions() {
    demons.forEach((demon, i) => {
        
        if(viking.isTouching(demon)) {

            if(viking.state === 'attack' && viking.isAttaking && viking.positionAnimate === 4){  
                demons.splice(i, 1);
                points += 1;
                
            }else if(demon.state === 'attack'){
                //demons.splice(i, 1);
                touching++;
                if(touching === 1){
                    viking.animate = 0;
                    viking.positionAnimate = 6;
                    viking.state = 'dead';
                    dontKey = false;
                    //viking.x = 10;
                }     
            }   
        }
        if(demon.x <  (canvas.width - demon.width) - (canvas.width -100)){
            points -= 1;
            demons.splice(i, 1);
        }
    })
}
function generateDemons() {
    if(gameFrames % 200 === 0) {
            const randomPosition = Math.floor(Math.random() * (310 - 40) + 40);
            const demon = new Demon(randomPosition);
            demons.push(demon);
    }
}
function drawDemons() {
    demons.forEach(demon => {
        demon.draw();
    });
}

function drawInfo(){
    ctx.font = '28px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Points: ${points}`, 300, 30);
    ctx.fillText(`Viking lives: ${viking.hp}`, 50, 30);
}

function drawInfoDragon(){
    ctx.font = '28px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Dragon live: ${dragon.hp}`, 900, 30);
}

function gameOver(){
    if(viking.hp === 0){
        ctx.font = '60px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(`Game Over:`, 400, canvas.height / 2);
        requestId = cancelAnimationFrame(requestId);
        
    }

    if(dragon.hp === 0 && dragon.animate === 3){
        ctx.font = '60px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText(`You Win!!!:`, 400, canvas.height / 2);
        requestId = cancelAnimationFrame(requestId);
        
    }
}

function limitsViking(){

    if(viking.x <= -30){
        viking.x = -30;
    }else if(viking.x >= 1050){
        viking.x = 1050;
    }
    if(viking.y >= 250){
        viking.y = 250;

    }else if(viking.y <= 10){
        viking.y = 10;
    }

}

function limitsDragon(){
    if(dragon.x <= 400){
        dragon.x += 30;

    }else if(dragon.x >= 1050){
        dragon.x = 1050;
    }
}
function updateGame(){
    gameFrames++;
    clearCanvas();
    background.draw();
    vikingAnimation();
    viking.draw();
    drawInfo();
 
    checkCollisions();
    checkCollisionsDragon()
    limitsViking()
    limitsDragon()

    if(points >= 6){
        drawInfoDragon();
        dragon.draw();
        dragonWalk();
        
    }else{
        drawDemons();
        generateDemons();
        demonAnimation();
    }
    if(requestId) {
        requestId = requestAnimationFrame(updateGame)
    } 

    if(viking.state === 'dead'){
        vikinDead();
    }

    if(dragon.state === 'hit'){
        dragonHit();
    }

    if(dragon.state === 'dead'){
        dragonDead();

    }
    if(dragon.hp === 0){

    }
    gameOver();

    
}

function startGame(){
    canvas.style.display ='';
    document.getElementById('start').style.display = 'none';
    document.getElementById('controls').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.getElementById('reset').style.display = '';
    document.getElementById('return').style.display = '';
    document.getElementById('return-control').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.getElementById('movekeys').style.display = 'none';
    requestId;
    gameFrames = 0;
    dragonFrames = 0;
    gravity = 8.9;
    points = 0;
    demons =[];
    touching = 0;
    viking.positionInY = 0;
        viking.isAttaking = false;
        viking.state = 'stand';
        viking.y = 0//canvas.height - this.height; // canvas.height - this.height
        viking.x = 50;
        viking.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        viking.positionAnimate = 0; // variable para seleccionar a flash de arriba a abajo
        viking.hp = 3;
        dragon.state = 'walk';
        dragon.y = -125//canvas.height - this.height; // canvas.height - this.height
        dragon.x = canvas.width;
        dragon.animate = 8;  //variable para seleccionar a flash de izquierda a derecha
        dragon.positionAnimate = 2;
        dragon.hp = 3;

    if(!requestId){
        requestId = requestAnimationFrame(updateGame)
    }   
}

window.onload = () => {

    document.getElementById('start').onclick = () => {

        startGame(); 
    }

    document.getElementById('return').onclick = () => {
        canvas.style.display = 'none';
        document.getElementById('controls').style.display = '';
        document.getElementById('start').style.display = '';
        document.querySelector('h1').style.display = '';
        document.getElementById('reset').style.display = 'none';
        document.getElementById('return').style.display = 'none';
        document.getElementById('return-control').style.display = 'none';
        document.querySelector('h2').style.display = 'none';
        document.getElementById('movekeys').style.display = 'none';


        gameFrames = 0;
        dragonFrames = 0;
        gravity = 8.9;
        points = 0;
        demons =[];
        touching = 0;
        viking.positionInY = 0;
        viking.isAttaking = false;
        viking.state = 'stand';
        viking.y = 0//canvas.height - this.height; // canvas.height - this.height
        viking.x = 50;
        viking.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        viking.positionAnimate = 0; // variable para seleccionar a flash de arriba a abajo
        viking.hp = 3;
        dragon.state = 'walk';
        dragon.y = -125//canvas.height - this.height; // canvas.height - this.height
        dragon.x = canvas.width;
        dragon.animate = 8;  //variable para seleccionar a flash de izquierda a derecha
        dragon.positionAnimate = 2;
        dragon.hp = 3;
        //startGame();
    }

    document.getElementById('reset').onclick = () => {
        canvas.style.display ='';
        document.getElementById('start').style.display = 'none';
        document.getElementById('controls').style.display = 'none';
        document.querySelector('h1').style.display = 'none';
        document.getElementById('reset').style.display = '';
        document.getElementById('return').style.display = '';
        document.getElementById('return-control').style.display = 'none';
        document.querySelector('h2').style.display = 'none';
        document.getElementById('movekeys').style.display = 'none';
        
        gameFrames = 0;
        dragonFrames = 0;
        gravity = 8.9;
        points = 0;
        demons =[];
        touching = 0;
        viking.positionInY = 0;
        viking.isAttaking = false;
        viking.state = 'stand';
        viking.y = 0//canvas.height - this.height; // canvas.height - this.height
        viking.x = 50;
        viking.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        viking.positionAnimate = 0; // variable para seleccionar a flash de arriba a abajo
        viking.hp = 3;
        dragon.state = 'walk';
        dragon.y = -125//canvas.height - this.height; // canvas.height - this.height
        dragon.x = canvas.width;
        dragon.animate = 8;  //variable para seleccionar a flash de izquierda a derecha
        dragon.positionAnimate = 2;
        dragon.hp = 3;
        startGame();
    }

    document.getElementById('controls').onclick = () => {
        canvas.style.display = 'none';
        document.getElementById('start').style.display = 'none';
        document.getElementById('controls').style.display = 'none';
        document.querySelector('h1').style.display = 'none';
        document.getElementById('reset').style.display = 'none';
        document.getElementById('return').style.display = 'none';
        document.getElementById('return-control').style.display = '';
        document.querySelector('h2').style.display = '';
        document.querySelector('h3').style.display = '';
        document.getElementById('movekeys').style.display = '';
        document.getElementById('moveviking').style.display = '';
        document.getElementById('vikingattack').style.display = '';
        document.getElementById('keya').style.display = '';
        document.getElementById('p1').style.display = '';
        document.getElementById('p2').style.display = '';
        document.getElementById('p3').style.display = '';
        document.getElementById('p4').style.display = '';
        gameFrames = 0;
        dragonFrames = 0;
        gravity = 8.9;
        points = 0;
        demons =[];
        touching = 0;
        viking.positionInY = 0;
        viking.isAttaking = false;
        viking.state = 'stand';
        viking.y = 0//canvas.height - this.height; // canvas.height - this.height
        viking.x = 50;
        viking.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        viking.positionAnimate = 0; // variable para seleccionar a flash de arriba a abajo
        viking.hp = 3;
        dragon.state = 'walk';
        dragon.y = -125//canvas.height - this.height; // canvas.height - this.height
        dragon.x = canvas.width;
        dragon.animate = 8;  //variable para seleccionar a flash de izquierda a derecha
        dragon.positionAnimate = 2;
        dragon.hp = 3;
        
        
        

    }

    document.getElementById('return-control').onclick = () => {
        canvas.style.display = 'none';
        document.getElementById('controls').style.display = '';
        document.getElementById('start').style.display = '';
        document.querySelector('h1').style.display = '';
        document.getElementById('reset').style.display = 'none';
        document.getElementById('return').style.display = 'none';
        document.getElementById('return-control').style.display = 'none';
        document.querySelector('h2').style.display = 'none';
        document.querySelector('h3').style.display = 'none';
        document.getElementById('movekeys').style.display = 'none';
        document.getElementById('moveviking').style.display = 'none';
        document.getElementById('vikingattack').style.display = 'none';
        document.getElementById('keya').style.display = 'none';
        document.getElementById('p1').style.display = 'none';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('p4').style.display = 'none';
        gameFrames = 0;
        dragonFrames = 0;
        gravity = 8.9;
        points = 0;
        demons =[];
        touching = 0;
        viking.positionInY = 0;
        viking.isAttaking = false;
        viking.state = 'stand';
        viking.y = 0//canvas.height - this.height; // canvas.height - this.height
        viking.x = 50;
        viking.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        viking.positionAnimate = 0; // variable para seleccionar a flash de arriba a abajo
        viking.hp = 3;
        dragon.state = 'walk';
        dragon.y = -125//canvas.height - this.height; // canvas.height - this.height
        dragon.x = canvas.width;
        dragon.animate = 8;  //variable para seleccionar a flash de izquierda a derecha
        dragon.positionAnimate = 2;
        dragon.hp = 3;

    }

       
}
