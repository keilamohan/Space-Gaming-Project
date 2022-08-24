//functions that manages the timing of the drops by adding a new object every 1 second.


function droppingStuff(){
   d = new Drop(); 
   d2 = new Drop();
   d3 = new Drop();

   var counter =0;
   

   //if a whole frame has passed AND the timer is above zero then decrement the timer by one
   if (frameCount % 60 < 2 && timer > 0) {
         timer-= 3;
         


       
      
   }

   //when the timer is zero, push a new drop ojbect into the totalsdrops array
   if (timer == 0) {
      timer = 3;
      
      // for(var x = 0; x < random(1, 5); x++){
      //    drops.push(d);
      // }   
      drops.push(d);
      drops.push(d2);
      drops.push(d3);

      //counter++;

      
   }


   //for every drop in the drops array, move it and display it
   for(let drop of drops){
      drop.move();
      drop.display();
      //counter++;
   
   }
}

//drop object
class Drop{

   //initialize the variables 
   //"this." refers the current object
   constructor(){
      
      this.xPos = random(width);
      this.xPosTwo = random(width);
      this.yPos = 0;
      this.yPosTwo = 0;
      this.speed = random(5,20);
      this.speedTwo = random(10, 15);

      this.xPosThree = random(width);
      this.yPosThree = 0;
      this.speedThree = random(5, 10);

      this.size = random(10, 20);
   }

   //moves it down the screen with random speeds
   move(){
      this.yPos+= this.speed;
      this.yPosTwo += this.speedTwo;
      this.yPosThree += this.speedThree;


   }

   //draws it at the given locations
   display(){
      fill(255, 0, 0);
      noStroke();
      circle(this.xPos, this.yPos, this.size);
      
      //circle(this.xPosTwo, this.yPosTwo, this.size);
      //circle(this.xPosThree, this.yPosThree, this.size);

   }

}