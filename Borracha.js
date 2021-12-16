class Borracha{
	constructor(x,y,r){
		var options = {
			density: 1,
			restitution: 0.3,
			friction: 5
		  };
// adicione opções a bola de borracha, coloque densidade baixa e atrito alto
		this.x=x;
		this.y=y;
		this.r=2*r;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);
			rectMode(RADIUS);
			strokeWeight(3);
			stroke("white")
			fill("darkblue");
			ellipseMode(CENTER);
			//use ellipse() aqui para desehar a bola de borracha
			ellipse(0, 0, this.r, this.r);
			pop();
	}

}
