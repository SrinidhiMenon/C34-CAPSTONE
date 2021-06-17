class Rope {
    constructor(body,point){
    var options = {
        length:300,
        bodyA:body,
        pointB:point,
        stiffness:1.2
    }
    this.rope = Constraint.create(options);
    World.add(world,this.rope);

    }
display(){
    var point1 = this.rope.bodyA.position
    var point2 = this.rope.pointB
    strokeWeight(3);
    line(point1.x,point1.y,point2.x,point2.y);
}

}
