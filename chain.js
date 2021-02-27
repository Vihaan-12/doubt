class chain {

constructor(bodyA, bodyB, offsetX, offsetY) {
this.offsetY = offsetY;
this.offsetX = offsetX;
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX, y:this.offsetY}
    
    }
    this.chain=Constraint.create(options);
    World.add(world, this.chain);

}

display () {
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;

strokeWeight(3);

var anchor1x=pointA.x
var anchor1y=pointA.y

var anchor2x=pointB.x
var anchor2y=pointB.y

line(anchor1x,anchor1y,anchor2x,anchor2y);

}

}