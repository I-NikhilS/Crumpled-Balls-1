var rect1, rect2, rect3;            
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	rect1=createSprite(300,600,20,100);
	rect1.shapeColor="red";
	rect2=createSprite(390,650,200,20);
	rect2.shapeColor="red";
	rect3=createSprite(480,600,20,100);
	rect3.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new paper;
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  drawSprites();
 
}




function keyPressed() {
 if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
   
    
  }
}





