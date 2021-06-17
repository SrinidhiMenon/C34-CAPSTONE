const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
const Constraint = Matter.Constraint

var engine,world

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(600,500,1200,25);
  ball = new Ball(200,200,40,40);
  box1 = new Box(900,100,70,70);
  box2 = new Box(900,100,70,70);
  box3 = new Box(900,100,70,70);
  box4 = new Box(900,100,70,70);
  box5 = new Box(900,100,70,70);
  box6 = new Box(900,100,70,70);
  box7 = new Box(800,100,70,70);
  box8 = new Box(800,100,70,70);
  box9 = new Box(800,100,70,70);
  box10 = new Box(800,100,70,70);
  box11 = new Box(800,100,70,70);
  box12 = new Box(800,100,70,70);
  box13 = new Box(800,100,70,70);
  box14 = new Box(900,100,70,70);
  rope = new Rope(ball.body,{x:600,y:50});

}

function draw() {
  background(255,255,255);  
ground.display();
ball.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
rope.display();
}
function mouseDragged(){
  Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}