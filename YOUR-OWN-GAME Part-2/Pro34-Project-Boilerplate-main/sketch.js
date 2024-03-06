
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground1;
var rightwall;
var leftwall;
var topwall;
var wall1;
var radius = 40;
var world;


function setup() {
  createCanvas(1250,700);    

  rectMode(CENTER)

  engine = Engine.create();
  world = engine.world;

  var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2
  }

  ball = Bodies.circle(60,650,radius/2,ball_options);
	World.add(world,ball);
  ground1 = new Ground(650,680,1290,20)
  topwall = new Ground(650,20,1290,20)
	leftwall = new Ground(25,300 ,20,790)
	rightwall = new Ground(1240,300,20,850)
    wall1 = new Ground(1155,500,150,20)
  

	Engine.run(engine);
  
}


function draw() 
{
  background(51);

  Engine.update(engine);

  rectMode(CENTER);
  
  ellipse(ball.position.x,ball.position.y,radius,radius)
  ground1.display()
  leftwall.display()
  rightwall.display()
  topwall.display()
  wall1.display()

  
  
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:55,y:-55})
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:-55,y:55})
	}

	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:-55,y:55})
	}

	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:55,y:-55})
	}
}


