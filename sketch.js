var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  particle = new Particles(500,350,10,10)
  particle1 = new Particles(300,150,10,10)
  particle2 = new Particles(400,100,10,10)
  particle3 = new Particles(500,250,10,10)
  particle4 = new Particles(550,200,10,10)
  particle5 = new Particles(600,400,10,10)
  particle6 = new Particles(650,50,10,10)
  particle7 = new Particles(700,450,10,10)
  particle8 = new Particles(750,500,10,10)
  particle9 = new Particles(800,550,10,10)
  particle10 = new Particles(850,600,10,10)


  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=180; k = k + 180) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=280; k = k + 280) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=380; k = k + 380) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=480; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=580; k = k + 580) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=680; k = k + 680) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 0; k <=780; k = k + 780) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 15; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }
  if(frameCount%90 === 0){
    particles.push(new Particles((width/2-10 , width/2+10) , 10 , 10))
  }
 
  //create 4th row of plinko objects


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  particle.display();
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();

  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }



  //display the paricles 

}