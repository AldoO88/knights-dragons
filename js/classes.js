class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.img = new Image();
        this.img.src = '/images/game_background_4.png'
        this.img.onload = () => {
            this.draw()
        }
    }

    draw() {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(this.img, this.x, this.y, this.width*-1, this.height);
        ctx.restore();
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
        this.positionanimate = 1; // variable para seleccionar a flash de arriba a abajo
        this.jumpStrength = 18;
        this.hp = 3
        this.img = new Image()
        this.img.src =
          '/images/Viking.png'
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
                (this.animate * 1536) /12,
                // posición de y en la sub-imagen (fuente, sy)
                (this.positionanimate * 640) / 5,
                // ancho desde la posición x del sub-frame (sw)
                1536 / 12,
                // alto desde la posición de y del sub-frame (sw)
                640 / 5,

                this.x,
                // posición de y en canvas (esquiba superior izquierda del primer frame)
                this.y,
                // ancho desde la posición de x en canvas (dw)
                this.width*-1,
                // alto desde la posición de y en canvas (dh)
                this.height
              )
              ctx.restore();
        }
      
    
}