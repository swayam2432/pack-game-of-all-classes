const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball ;
var invisibleGround;
var box1, box2, box3;

var leftWall;
var rightWall;
var upWall;
var chain;


function preload() {

}

function setup() {
    var canvas = createCanvas(1800, 1200);
    engine = Engine.create();
    world = engine.world;


    var options = {
        isStatic: true
    }

    rightWall = Bodies.rectangle(1780, 600, 100, 1200, options);
    World.add(world, rightWall);

    leftWall = Bodies.rectangle(20, 600, 100, 1200, options);
    World.add(world, leftWall);

    upWall = Bodies.rectangle(width / 2, 30, width, 200, options);
    World.add(world, upWall);

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(width / 2, 1190, width, 200, ground_options);
    World.add(world, ground);


    var ball_options = {
        isStatic: false,
        restitution: 0.3,
        friction: 1.5
    }

    strokeWeight(4);
    stroke("blue");
    fill("red");
    ball = Bodies.circle(400, 10, 50, ball_options);
    World.add(world, ball);

    box1 = new Box(1200, 600);
    box2 = new Box(600, 300);
    box3 = new Box(100, 300);
    chain = new Chain(ball, box2.body);


    Engine.run(engine);

}

function draw() {
    background(0);

    //for the right wall
    rectMode(CENTER);
    rect(rightWall.position.x, rightWall.position.y, 100, height);

    //for the left wall
    rectMode(CENTER);
    rect(leftWall.position.x, leftWall.position.y, 100, height);

    //for the up upWall
    rectMode(CENTER);
    rect(upWall.position.x, upWall.position.y, width, 200);


    //for the ground
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, width, 200);

    //mouseX and the mouseY position of the mouse
    ball.position.x = mouseX;
    ball.position.y = mouseY;

    //displayed the box
    box1.display();
    box2.display();
    box3.display();
    chain.display();


    //for the ball
    ellipseMode(CENTER);
    ellipse(ball.position.x, ball.position.y, 100, 100);

}

