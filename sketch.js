var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg,ribbon;

function preload()
{
	plA=loadImage("player1.png")
	plB=loadImage("player2.png")
	bg=loadImage("background.jpg");
	ribbon=loadImage("ribbon1.png");
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	/* = Bodies.rectangle(width-700, 400, 10,10, {restitution:0.4, isStatic:true});
//playerA=createSprite(width-700, 400, 10,10);
    World.add(world, playerA);
	
	//packageSprite.scale=0.2

	playerB = Bodies.rectangle(width-100, 400, 10,10, {restitution:0.4, isStatic:true});
	World.add(world, playerB);
	
	//playerB=createSprite(width-100, 400, 10,10);
	//playerB.addImage(plB)
	//helicopterSprite.scale=0.6
	*/
	playerA= new Player(width-700, 400, 150,150);
	//playerA.addImage(plA);
	playerB= new Player(width-100, 400, 150,150);
	//playerB.addImage(plB);
	
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	rope=new Rope(playerA.body,playerB.body);
	
	
}


function draw() {
  background(bg);
  Engine.update(engine);

  
  rope.display();
  playerA.display();
  playerB.display();

  image(plA,playerA.body.position.x,playerA.body.position.y);
  image(plB,playerB.body.position.x,playerB.body.position.y);
  //line(width-700,420,width-100,420);
  

  console.log(playerA.body.position.x);
  console.log(playerA.body.position.y);

  drawSprites();
 
}

function keyPressed() {
 /*if (keyCode === DOWN_ARROW) {
  //  Matter.Body.setStatic(packageBody,false);
    
  }
}
function movement() {*/
   if (keyCode === LEFT_ARROW){
	playerA.body.position.x = playerA.body.position.x - 1;

   } else if(keyCode === RIGHT_ARROW){
	playerA.body.position.x = playerA.body.position.x + 1;
   }

   if (keyCode === 65){
	playerB.body.position.x = playerB.body.position.x - 1;
   }
   else if (keyCode === 68){
	playerB.body.position.x = playerB.body.position.x + 1;
   }
}





































