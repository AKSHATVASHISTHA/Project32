const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onSling"
var hero,img;
function preload() {
    backgroundImg = loadImage("shiva tample.jpg");
    img= loadImage('Hero1.png');
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

    box1 = new Box(600,320,70,70);
    box2 = new Box(600,320,70,70);
    pig1 = new Pig(800, 250);
    
   // log1 = new Log(810,260,300, PI/2);

    box3 = new Box(600,320,70,70);
    box4 = new Box(600,320,70,70);
   // pig3 = new Pig(810, 220);

   // log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(710,160,70,70);
    box6 = new Box(600,100,70,70);
    box7 = new Box(890,160,70,70);
    box8 = new Box(1010,160,70,70);
    box9 = new Box(1010,160,70,70);
    box10 = new Box(1010,160,70,70);
    box11 = new Box(1010,160,70,70);
    box12 = new Box(1010,160,70,70);
    box13 = new Box(800,160,70,70);
    
   // log4 = new Log(760,120,150, PI/7);
    //log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:230, y:170});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
   // ground.display();
    pig1.display();
   // log1.display();

    box3.display();
    box4.display();
   // pig3.display();
    //log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    
    box5.display();
    
   // log4.display();
   // log5.display();

    bird.display();
  // platform.display();
    //log6.display();
    slingshot.display();    
    
}

function mouseDragged(){
    if(gameState!=="Launch"){

    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    
}
}


function mouseReleased(){
    slingshot.fly();
    gameState="Launch"

}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
 
    }
}


