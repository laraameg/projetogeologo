class Ferro {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x,y,50,50,options);
      World.add(world,this.body);
      this.width = 50;
      this.height = 50;
    }

    display(){
      var pos = this.body.position;
      push();
      fill("black");
      //push salva do jeito q ta
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
      //restaurar o ultimo estado salvo
    }
}