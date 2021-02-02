
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 
function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 10);
	groundObject=new Ground(width/2,670,width,20);
    dustbin1 = new dustbin(610,660, 200,20);
    dustbin2 = new dustbin(500,580,20,150);
    dustbin3 = new dustbin(720,580,20,150)

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
  Engine.update(engine);

  paper1.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
    }
  }



