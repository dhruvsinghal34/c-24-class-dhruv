const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,50,50);
    box2 = new Box(900,320,50,50);
    pig1=new Pig(800,320,40,40);
    log1= new Log(800,220,270,20,PI); 
    box3= new Box(700,120,50,50);
    pig2= new Pig(800,120,40,40);
    box4= new Box (900,120,50,50);
    log2=new Log(800,50,280,20,PI);
    box5= new Box(800,40,50,50);
    log3 = new Log(760,120,150, PI/7);
    log4 = new Log(870,120,150, -PI/7);


     

    ground = new Ground(600,400,1200,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
   
    ground.display();
}