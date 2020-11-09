const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var ball,rope;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18;


function setup() {
  createCanvas(800,2000);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  ball = new Ball(0,0);
  rope = new Thread(ball.body,{x:300,y:400});
  block1 = new Building(400,730);
  block2 = new Building(460,730);
  block3 = new Building(520,730);
  block4 = new Building(580,730);
  block5 = new Building(400,680);
  block6 = new Building(460,680);
  block7 = new Building(520,680);
  block8 = new Building(580,680);
  block9 = new Building(400,630);
  block10 = new Building(460,630);
  block11 = new Building(520,630);
  block12 = new Building(580,630);
  block13 = new Building(400,580);
  block14 = new Building(460,580);
  block15 = new Building(520,580);
  block16 = new Building(580,580);
  block17 = new Building(460,530);
  block18 = new Building(520,530);
  

}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
  ground.display();
  rope.display();
  ball.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
}