

class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.img = new Image();
        this.img.src = '/images/game_background_4.png';
        this.img.onload = () => {
            this.draw()
        }
    }

    draw() {
        //ctx.save();
        //ctx.scale(-1, 1);
        ctx.drawImage(this.img, this.x, this.y, this.width/**-1*/, this.height);
        //ctx.restore();
        //ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}
class Viking{
    constructor(){
        this.positionInY = 0;
        this.isAttaking = false;
        this.state = 'stand';
        this.width = 300;
        this.height = 300;
        this.y = 0//canvas.height - this.height; // canvas.height - this.height
        this.x = 50;
        this.vx = 0;
        this.vy = 0;
        this.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        this.positionAnimate = 0; // variable para seleccionar a flash de arriba a abajo
        this.jumpStrength = 18;
        this.hp = 3;
        this.img = new Image();
        this.img.src = '/images/Viking.png';
        this.img.onload = () => {
          this.draw()
        }
    }

    draw() {         
        if (this.y > canvas.height - this.height) {
            this.y = canvas.height - this.height;
        } else {
            //this.vy++
        } 

        ctx.drawImage(this.img, (this.animate * 1536) / 12, (this.positionAnimate * 896) / 7, 1536 / 12, 896 / 7, this.x, this.y, this.width/**-1*/, this.height);
    }

    moveLeft() {  
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.positionAnimate = 2;  
        this.x -= 25;
        if(this.animate === 5){
            this.animate = 0;
            this.positionAnimate=0;
            this.state = 'stand';
        }else{
            this.animate++;
        }
  
        /* ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(this.img, -(this.animate * 1536) / 12, -(this.positionAnimate * 896) / 7, 1536 / 12, 896 / 7, this.x  , this.y, this.width* -1, this.height);
        ctx.restore();*/
        
    }

    moveRight() {
        this.positionAnimate = 2;
        this.x += 25;
        if(this.animate === 5){
            this.animate = 0;
            this.positionAnimate=0;
            this.state = 'stand';
            this.positionInY = 0;
        }else{
            this.animate++;
        }
    }
    moveUp() {

        this.y -= 40;
        this.positionAnimate = 2;
        if(this.animate === 5){
            this.animate = 0;
            this.positionAnimate = 0;
            this.state = 'stand';
            this.isAttaking = false;
        }else{
            this.animate++;
        }
    }

    moveDown() {
        this.y += 40;
        this.positionAnimate = 2;
        if(this.animate === 5){
            this.animate = 0;
            this.positionAnimate = 0;
            this.state = 'stand';
            this.isAttaking = false;
        }else{
            this.animate++;
        }
    }
    
    jump() {
    
        this.vy += -2*this.jumpStrength;
        this.vy += 9.8;
        this.y += this.vy;
        this.positionAnimate = 5;
        this.animate = 0;
        this.x += 10;
    }

   attack(){
        this.animate =0;
        this.isAttaking = true;
        this.positionAnimate = 4;
        this.positionInY = 0;        
    }

    isTouching(enemy) {
        if (this.x < enemy.x + (enemy.width - 250) && this.x + (this.width - 250) > enemy.x &&
        this.y < enemy.y + (enemy.height - 250) && this.y + (this.height - 250) > enemy.y){ 
            return true;
        } else {
            return false;
        }
        
    }
    isTouchingDragon(dragon) {
        if (this.x < dragon.x + (dragon.width - 600) && this.x +( this.width - 250) > dragon.x &&
        this.y < dragon.y + (dragon.height - 600) && this.y + (this.height- 250) > dragon.y){ 
            return true;
        } else {
            return false;
        }
        
    }
    
}

class Assassin{
    constructor(){
        this.width = 300;
        this.height = 300;
        this.y = 250//canvas.height - this.height; // canvas.height - this.height
        this.x = 50;
        this.vx = 0;
        this.vy = 0;
        this.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        this.positionAnimate = 1; // variable para seleccionar a flash de arriba a abajo
        this.jumpStrength = 18;
        this.hp = 3;
        this.img = new Image();
        this.img.src = '/images/Assassin.png';
        this.img.onload = () => {
          this.draw()
        }
    }

    draw() {         
        //ctx.save();
        //ctx.scale(-1, 1);

        ctx.drawImage(
                // imagen fuente
                this.img,
                /**Elije al Flash en la malla de sprites */
                // posición de x en la sub-imagen (sx)
                (this.animate * 2304) / 18,
                // posición de y en la sub-imagen (fuente, sy)
                (this.positionAnimate * 896) / 7,
                // ancho desde la posición x del sub-frame (sw)
                2304 / 18,
                // alto desde la posición de y del sub-frame (sw)
                896 / 7,

                this.x,
                // posición de y en canvas (esquiba superior izquierda del primer frame)
                this.y,
                // ancho desde la posición de x en canvas (dw)
                this.width/**-1*/,
                // alto desde la posición de y en canvas (dh)
                this.height
              )
              //ctx.restore();
        }
        moveLeft() {
            ctx.save();
            ctx.scale(-1, 1);
            ctx.drawImage(
                // imagen fuente
                this.img,
                /**Elije al Flash en la malla de sprites */
                // posición de x en la sub-imagen (sx)
                (this.animate * 2304) / 18,
                // posición de y en la sub-imagen (fuente, sy)
                (this.positionAnimate * 896) / 7,
                // ancho desde la posición x del sub-frame (sw)
                2304 / 18,
                // alto desde la posición de y del sub-frame (sw)
                896 / 7,

                this.x,
                // posición de y en canvas (esquiba superior izquierda del primer frame)
                this.y,
                // ancho desde la posición de x en canvas (dw)
                this.width*-1,
                // alto desde la posición de y en canvas (dh)
                this.height
              )
              ctx.restore();
            this.vx -= 3;
            this.positionAnimate = 2;
            
        }

        moveRight() {
            this.vx += 3;
            this.positionAnimate = 2;
            
        }
        moveUp() {

        }

        moveDown() {

        }

        jump() {
            this.vy = -2*this.jumpStrength;
        }
}

class Dragon{
    constructor(){
        this.state = 'walk';
        this.width = 600;
        this.height = 600;
        this.y = -125//canvas.height - this.height; // canvas.height - this.height
        this.x = canvas.width;
        this.vx = 3;
        this.vy = 3;
        this.animate = 8;  //variable para seleccionar a flash de izquierda a derecha
        this.positionAnimate = 2; // variable para seleccionar a flash de arriba a abajo
        this.hp = 3;
        this.img = new Image();
        this.img.src = '/images/DragonReverse.png'
        this.img.onload = () => {
          this.draw()
        }
    }

    draw() {         
       
        this.x--;
        ctx.drawImage(this.img, (this.animate * 2304) /9, (this.positionAnimate * 1280) / 5, 2304 / 9, 1280 / 5, this.x, this.y, this.width,this.height);
    }
        attack(){
            if(dragon.animate === 0) {
                dragon.animate = 8; 
            } else {
                dragon.animate--; 
                //dragonFrames++;
            }
        }

        walk(){

        }

       
        
}


class Demon{
    constructor(y){
        this.state = 'walk'
        this.isAttaking = false;
        this.width = 300;
        this.height = 300;
        this.y = y//canvas.height - this.height; // canvas.height - this.height
        this.x = canvas.width;
        this.vx = 0;
        this.vy = 0;
        this.animate = 5;  //variable para seleccionar a flash de izquierda a derecha
        this.positionanimate = 1; // variable para seleccionar a flash de arriba a abajo
        this.img = new Image();
        this.img.src = '/images/demon1.png'
        this.img.onload = () => {
          this.draw()
        }
    }

        draw() {      
            this.x--;   
              ctx.drawImage(
                // imagen fuente
                this.img,
                /**Elije al Flash en la malla de sprites */
                // posición de x en la sub-imagen (sx)
                (this.animate * 1536) / 6,
                // posición de y en la sub-imagen (fuente, sy)
                (this.positionanimate * 1280) / 5,
                // ancho desde la posición x del sub-frame (sw)
                1536 / 6,
                // alto desde la posición de y del sub-frame (sw)
                1280 / 5,

                this.x,
                // posición de y en canvas (esquiba superior izquierda del primer frame)
                this.y,
                // ancho desde la posición de x en canvas (dw)
                this.width,
                // alto desde la posición de y en canvas (dh)
                this.height
              )
        }
}