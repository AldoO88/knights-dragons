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
        this.width = 300;
        this.height = 300;
        this.y = 100//canvas.height - this.height; // canvas.height - this.height
        this.x = 50;
        this.vx = 0;
        this.vy = 0;
        this.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        this.positionAnimate = 1; // variable para seleccionar a flash de arriba a abajo
        this.jumpStrength = 18;
        this.hp = 3;
        this.img = new Image();
        this.img.src = '/images/Viking.png';
        this.img.onload = () => {
          this.draw()
        }
    }

    draw() {         
        //ctx.save();
        //ctx.scale(-1, 1);
        ctx.drawImage(this.img, (this.animate * 1536) / 12, (this.positionAnimate * 896) / 7, 1536 / 12, 896 / 7, this.x, this.y, this.width/**-1*/, this.height);
              //ctx.restore();
    }

    moveLeft() {  
       /* ctx.save();
        ctx.scale(-1, 1);
        cctx.drawImage(this.img, (this.animate * 1536) / 12, (this.positionAnimate * 896) / 7, 1536 / 12, 896 / 7, this.x, this.y, this.width *-1, this.height);
        ctx.restore();
        this.vx += 1;
        this.positionAnimate = 2;
        this.animate = 0;*/
        
    }

    moveRight() {
        this.positionAnimate = 2;
        this.x += 25;
        if(viking.animate === 5){
            this.animate = 0;
        }else{
            viking.animate++;
        }
    }
    moveUp() {
        
        this.y -= 40;
        this.positionAnimate = 2;
        if(viking.animate === 5){
            this.animate = 0;
        }else{
            viking.animate++;
        }
    }

    moveDown() {
        this.y += 40;
        this.positionAnimate = 2;
        if(viking.animate === 5){
            this.animate = 0;
        }else{
            viking.animate++;
        }

    }

    jump() {
        this.vy = -2*this.jumpStrength;
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
        this.width = 600;
        this.height = 600;
        this.y = 100//canvas.height - this.height; // canvas.height - this.height
        this.x = -600;
        this.vx = 0;
        this.vy = 0;
        this.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        this.positionanimate = 0; // variable para seleccionar a flash de arriba a abajo
        this.jumpStrength = 18;
        this.hp = 3
        this.img = new Image()
        this.img.src =
          '/images/Dragon.png'
        this.img.onload = () => {
          this.draw()
        }
    }

        draw() {         
              ctx.save();
              ctx.scale(-1, 1);
              ctx.drawImage(
                // imagen fuente
                this.img,
                /**Elije al Flash en la malla de sprites */
                // posición de x en la sub-imagen (sx)
                (this.animate * 2304) /9,
                // posición de y en la sub-imagen (fuente, sy)
                (this.positionanimate * 1280) / 5,
                // ancho desde la posición x del sub-frame (sw)
                2304 / 9,
                // alto desde la posición de y del sub-frame (sw)
                1280 / 5,

                this.x,
                // posición de y en canvas (esquiba superior izquierda del primer frame)
                this.y,
                // ancho desde la posición de x en canvas (dw)
                this.width * -1,
                // alto desde la posición de y en canvas (dh)
                this.height
              )
              ctx.restore();
        }
}


class Demon{
    constructor(){
        this.width = 300;
        this.height = 300;
        this.y = 150//canvas.height - this.height; // canvas.height - this.height
        this.x = -600;
        this.vx = 0;
        this.vy = 0;
        this.animate = 0;  //variable para seleccionar a flash de izquierda a derecha
        this.positionanimate = 2; // variable para seleccionar a flash de arriba a abajo
        this.jumpStrength = 18;
        this.hp = 3
        this.img = new Image()
        this.img.src =
          '/images/demon.png'
        this.img.onload = () => {
          this.draw()
        }
    }

        draw() {         
              ctx.save();
              ctx.scale(-1, 1);
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
                this.width * -1,
                // alto desde la posición de y en canvas (dh)
                this.height
              )
              ctx.restore();
        }
}