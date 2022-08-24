
//star location
var xStars;
var yStars;


function setup() { 
  createCanvas(800, 800);

} 

function draw() {

	background(0);

	//random generated star locations
	  xStars = [20];
	  yStars = [20];
	  for (var i = 0; i < xStars.length; i++)
	  {
	    xStars.push(random(width));
	    yStars.push(random(width));
	  }

	  //drawing randomly generated stars
	  push();
	    noStroke();
	    fill(255);
	    for (var i =0; i < xStars.length; i++)
	    {
	      ellipse(xStars[i], yStars[i], 15, 15);
	    }
	  pop();
}