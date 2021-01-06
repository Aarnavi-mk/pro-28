
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var ground
var stone
var boy
var rope
var mango1,mango2,mango3,mango4,mango5
function preload()
{
  
  boyImage = loadImage("pm/boy.png")
}

function setup() {
    createCanvas(1300, 800);
    
    

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
      ground = new Ground(50,780,2500,20)
      stone = new Stone(160,600,40,40)
      tree = new Tree(900,500,500,600)
      mango1 = new Mango(940,245,50,50)
      mango2 = new Mango(820,335,50,50)
      mango3 = new Mango(1050,425,50,50)
      mango4 = new Mango(760,445,50,50)
      mango5 = new Mango(907,404,50,50)
      mango6 = new Mango(995,345,50,50)

    rope = new Rope(stone.body,{x:300, y:500});
    Engine.run(engine);
    
  }


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  console.log(mouseX,mouseY)
  image(boyImage,100,490,300,400)
   ground.display();
   stone.display();
   tree.display();
   mango1.display(); 
   mango2.display(); 
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display(); 
   rope.display();

 detectcollision(stone,mango1)
 detectcollision(stone,mango2)
 detectcollision(stone,mango3)
 detectcollision(stone,mango4)
 detectcollision(stone,mango5)
 detectcollision(stone,mango6)
}

function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(stone.body, {x:235,y:420})
lancher.attach(stone.body)
  }
  
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  } 

  function mouseReleased(){
      stone.fly();
  }

function detectcollision(stone,mango){
mangoBodyPosition = mango.body.Position 
stoneBodyPosition = stone.body.Position


var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y)
if(distance<mango.r+stone.r){
  Matter.Body.setStatic(mango.body,false)
}


}
