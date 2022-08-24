var txPos;
var tyPos;

var distance1;
var distance2;
var distance3;



function turtleCharacter(){

   var t = new Turtle();
   
   //37 is left arrow key
   //39 is right arrow key
   if(keyIsDown(37)){
      turtleX -= dx;
      t.setLocation(turtleX, turtleY);
      t.display();

      //drawTurtle(turtleX, turtleY);
      //

   } else if(keyIsDown(39)){

      turtleX += dx;
      t.setLocation(turtleX, turtleY);
      t.display();

      //drawTurtle(turtleX, turtleY);
      

   }

   t.display();

   t.interaction(d, d2, d3);

   //text(distance)


}





class Turtle{

   

   constructor(){
      txPos = turtleX;
      tyPos = turtleY;
   }

   setLocation(tempX, tempY){
      txPos = tempX;
      tyPos = tempY;
   }

   display(){
      //neck 
   push(); 
      translate(txPos,tyPos);
      scale(0.2);
      noStroke();

   //head 
   fill(50,200,50)
   ellipse(125, -60, 60, 50);

//eyes 
   fill(0)
   ellipse(120, -65, 8, 12);
   ellipse(130, -65, 8, 12);

   fill(50,200,50);
   ellipse(70, 0, 40, 60);
   ellipse(-70, 0, 40, 60);

//shell 
      fill(130,250,80);
      rotate(PI/2 + PI/4.28);
      arc(0, 0, 220, 220, 70, PI + QUARTER_PI, CHORD);


      rotate(-PI/2 + -PI/4.28)

      fill(0, 100, 0)
      noStroke(); 
     

      ellipse(85, -25, 30, 15);

      ellipse(5, -25, 50, 30);

      ellipse(55, -50, 40, 20);

      ellipse(-5, -60, 50, 30);

      ellipse(-55, -75, 40, 20);

      ellipse(-70, -35, 30, 15);

      ellipse(-20, -97, 30, 15);

      ellipse(40, -80, 40, 20);
   

   pop();
   }

   interaction(d1, d2, d3){
      distance1 = dist(txPos, tyPos, d1.xPos, d1.yPos);
      distance2 = dist(txPos, tyPos, d2.xPos, d2.yPos);
      distance3 = dist(txPos, tyPos, d3.xPos, d3.yPos);

      // if(distance1 < d1.size + 155 || distance2 < d2.size + 155 || distance3 < d3.size + 155){
      //    mode = 2;
      // }

      if(distance1 < d1.size){
         mode = 2;
      }


   }

}



