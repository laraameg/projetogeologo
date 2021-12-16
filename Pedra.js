class Pedra {
    constructor(x, y) {
      var options = {
        density: 12,
        restitution: 0.8,
        friction: 0.9
      };
      
      this.body = Bodies.rectangle(x,y,75,75,options);
      World.add(world,this.body);
      this.width = 75;
      this.height = 75;
    }

    display(){
      var pos = this.body.position;
      push();
      fill("grey");
      //push salva do jeito q ta
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
      //restaurar o ultimo estado salvo
    }
}