const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon;
var backgroundImg;
var gameState = "onSling";

function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(550,300,250,10);
  stand2 = new Stand(860,200,200,10);
 
  block1 = new Block(450,275,30,40);
  block2 = new Block(480,275,30,40);
  block3 = new Block(510,275,30,40);
  block4 = new Block(540,275,30,40);
  block5 = new Block(570,275,30,40);
  block6 = new Block(600,275,30,40);
  block7 = new Block(630,275,30,40);
  block8 = new Block(480,235,30,40);
  block9 = new Block(510,235,30,40);
  block10 = new Block(540,235,30,40);
  block11 = new Block(570,235,30,40);
  block12 = new Block(600,235,30,40);
  block13 = new Block(510,195,30,40);
  block14 = new Block(540,195,30,40);
  block15 = new Block(570,195,30,40);
  block16 = new Block(540,155,30,40);

  blocks1 = new Block(800,175,30,40);
  blocks2 = new Block(830,175,30,40);
  blocks3 = new Block(860,175,30,40);
  blocks4 = new Block(890,175,30,40);
  blocks5 = new Block(920,175,30,40);
  blocks6 = new Block(830,135,30,40);
  blocks7 = new Block(860,135,30,40);
  blocks8 = new Block(890,135,30,40);
  blocks9 = new Block(860,95,30,40);

  polygon = new Polygon(100, 200);

  slingShot = new Slingshot(polygon.body,{x:100,y:200});
}

function draw() {
  if(backgroundImg) {
  background(backgroundImg);
  }

  Engine.update(engine);

  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  
  fill("grey");
  block16.display();
  
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  
  fill("pink")
  blocks9.display();

  polygon.display();
  slingShot.display();
}

function mouseDragged(){
  if (gameState!=="launched"){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY}); }
}

function mouseReleased(){
  slingShot.fly();
  gameState = "launched";
}

function keyPressed() {
  if(keyCode === 32) {
    //slingShot.attach(polygon.body);
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON.datetime);
  var datetime =  responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  
  if(hour >=06 && hour <=19){
      bg = "1.jpeg";
  }
  else {
      bg = "2.jpg";
  }
  backgroundImg = loadImage(bg);
  };
