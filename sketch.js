
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var angle=60;
var wall1,wall2,wall3,wall4
var btn2


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  wall1= new Ground(50,200,40,10)
  wall2= new Ground(150,200,40,10)
  wall3= new Ground(250,200,40,10)
  wall4= new Ground(350,200,40,10)

   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  ground=new Ground(200,390,400,20)
  

  //rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);

  
  
 

  ellipse(ball.position.x,ball.position.y,20);
  //rect(ground.position.x,ground.position.y,400,20);
  ground.show()
 
  wall1.show()
 
  wall2.show()
   
  wall3.show()
   
  wall4.show()
  Engine.update(engine);
  
  
  
}




