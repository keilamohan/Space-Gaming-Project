
//turtle 
//var Turtle; 

var d; 
var d2;
var d3;

//turtles fixed y position
var turtleY = 650;

//turtles x position
var turtleX = 400;

//turtle scale
var turtleScale = .2

//turtle speed
var dx = 5;

var timer;
var drops = [];

var mode = 0;

var counter = 0;

//star location
var xStars = [20];
var yStars = [20];

function setup() { 
  createCanvas(800, 800);

  timer = 3;  //the interval for the drops

  for (var i = 0; i < 20; i++)
  {
    xStars[i] = (random(width));
    yStars[i] = (random(height));
  }

} 

function draw() { 
   background(200);


   if(mode == 0){
      mainMenu();
   }else if(mode == 1){
      game();
   }else if(mode == 2){
      howToPlay();
   }else{
      credits();
   }

}


function game(){

  spaceBackground()

   droppingStuff(); //dropping objects are random x positions
   counter++;
   turtleCharacter();

}

function spaceBackground()
{

  background(0, 2, 38);

  noStroke();


  for (var i = 0; i < xStars.length; i++)
  {
    fill(127, 100, 200);
    ellipse(xStars[i], yStars[i], 20, 20);
    fill(255);
    ellipse(xStars[i], yStars[i], 10, 10);
  }


  //moon body
  fill(250, 244, 234)
  ellipse(65, 730, 200, 200);

  //moon craters
  fill(220);
  strokeWeight(3);
  stroke(150);
  ellipse(110, 720, 25, 25);
  ellipse(20, 700, 15, 15);
  ellipse(80, 665, 30, 30);
  ellipse(28, 760, 20, 20);
  ellipse(100, 770, 15, 15);


  push();
    translate(170, 180);
    rotate((3.5*PI)/4);
    //body of saturn
    noStroke();
    fill(230, 178, 84);
    ellipse(0, 0, 65, 65);

    //rings of saturn
    strokeWeight(5);
    stroke(207, 185, 151);
    fill(238, 220, 156);
    ellipse(0, 0, 140, 25);

    //covering the overlap of top ring of saturn
    stroke(230, 178, 84);
    fill(230, 178, 84);
    ellipse(0, 9.3, 59.6, 20)
  pop();

  //asteroid
  fill(230, 100, 0);
  noStroke()
  triangle(480, 408, 480, 392, 360, 400);
  push();
    translate(0, 10);
    triangle(480, 410, 480, 390, 367, 400);
    translate(0, -18);
    triangle(480, 410, 480, 390, 365, 400);
  pop();
  strokeWeight(16);
  stroke(200, 60, 0);
  fill(230, 100, 0);
  ellipse(500, 400, 40, 40);

  //UFO
  stroke(0);
  strokeWeight(1);
  fill(0, 137, 182);
  ellipse (600, 200, 58, 65);
  fill(102, 51, 153);
  push();
  translate(0, 10);
  rect(560, 185, 80, 20, 10);
  rect(560, 195, 80, 20, 10);
  rect(550, 190, 100, 20, 10);
  pop();
  //windows
  fill(255);
  for (var i =1; i < 14; i++)
  {
    if (i%2 !=0)
    {
      fill('blue');
      var xWin = i*6.4;
      rect(552+xWin, 205, 6.4, 6.4)
    }
  }

}





