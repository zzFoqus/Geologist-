const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1,stone2,stone3
var rubber
var iron

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(200,450,10,20)
    stone2 = new Stone(1000,200,20,30)
    stone3 = new Stone(500,100,40,60)
    rubber=  new  Rubber(300,50,100)
    iron=   new   Iron(400,300,50,50)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    stone3.display();
    rubber.display();
    iron.display();

}