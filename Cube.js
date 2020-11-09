class Building{

    constructor(x,y){

        var options ={

            isStatic:false,
            friction:0.5,
            restitution:0.5,
            density:0.3

        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position
        push();
        var angle = this.body.angle;
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(3)
        stroke("Red");
        rectMode(CENTER);
        fill("black")
        rect(0,0,this.width,this.height); 
        pop();
    }



}