
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var bob1, bob2, bob3, bob4, bob5;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject1=new ground(width/2,670,width,20);
	groundObject2=new ground(700,150,600,50);
	
	
bob1 = new bob(900,500);
bob2 = new bob(800,500);
bob3 = new bob(700,500);
bob4 = new bob(600,500);
bob5 = new bob(500,500);
	Engine.run(engine);
  
    chain1 = new chain(bob1.body,groundObject2.body,-bobDiameter*2, 0);

}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject1.display();
  groundObject2.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();

}

