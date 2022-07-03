
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var mainground; 
var rightground;
var leftground;

function preload()
{
	
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution: 0.3,
		friction: 0,
		density: 1.4
		
	}
    ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);
	
	mainground = new ground(width / 2, 670, width, 20);
	leftground = new ground(1100, 600, 20, 120);
	rightground = new ground(1400, 600, 20, 120);

	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Body.applyForce(ball, ball.position, { x: 40, y: -40 });
   }

}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
	
  mainground.display();
  rightground.display();
  leftground.display();
  ellipse(ball.position.x, ball.position.y, 20, 20);
 
}



