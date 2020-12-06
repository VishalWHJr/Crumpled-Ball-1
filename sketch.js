var ball, rect1, rect2, rect3;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 650);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	rect1=new Dustbin(1000-300,650-135,20,150);
	rect2=new Dustbin(1000-200,650-70,180,20);
	rect3=new Dustbin(1000-100,650-135,20,150);
	ground=new Ground(1000/2,650-50,1000,20);
	ball=new Paper(1000+150-1000,650-90,20);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect1.display();
  rect2.display();
  rect3.display();
  ground.display();
  ball.display();
}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:65,y:-78});
	}
}
