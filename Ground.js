class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(1000,790,2000,20,options);
      this.width = 2000;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };