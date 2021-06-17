class Ball{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.8,
            friction: 1,
            densitiy: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width = width
        this.height = height
    }
    display(){
        push();
        translate (this.body.position.x,this.body.position.y);
        rotate (this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}