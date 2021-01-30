const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    Pig1 = new Pig(800, 350)
    Log1 = new Log(800, 250, 280, PI/2)
    box3 = new Box(700,220,70,70);
    box4 = new Box(900,220,70,70);
    Pig2 = new Pig(800, 250)
    Log2 = new Log(800, 200, 280, PI/2)
    box5 = new Box(800,180,70,70);
    Log3 = new Log(750, 100, 150, PI/7)
    Log4 = new Log(830, 100, 150, -PI/7)
    Bird1= new Bird(100, 20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Pig1.display();
    Log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    Log2.display();
    box5.display();
    Log3.display();
    Log4.display();
    Bird1.display();
}