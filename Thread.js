class Thread{
 
    constructor(bodyA,pointB){

        var options ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 300

        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }

    display(){
    
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3);
    fill("Black");
    line(pointA.x,pointA.y,pointB.x,pointB.y);

    }

}