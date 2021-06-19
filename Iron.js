class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options = {
		'density':30,
		'friction': 3,
		'restitution':0.8
	  };


		
		this.width=width
        this.height=height
		this.body=Bodies.rectangle(x,y, width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rect(0,0, this.width,this.height)
			pop()
	}

}

