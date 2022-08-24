
function mainMenu(){
	clear();
	background(51);

	//title
	push();
	fill(255);
	textSize(200);
	text('TITLE', 120, 300);
	pop();
	

	
	//boxes attributes
	fill(20);
	stroke('black');
	strokeWeight(2);

	//play box
	rect(width/2-150, 400, 300, 50);
	fill(255);
	text('PLAY', (width/2)-15, 430);

	//how to play box
	fill(20);
	rect(width/2-150, 480, 300, 50);
	fill(255);
	text('HOW TO PLAY', (width/2)-40, 510);

	//credits box
	fill(20);
	rect(width/2-150, 560, 300, 50);
	fill(255);
	text('CREDITS', (width/2)-25, 590);

}

function howToPlay(){
	background(51);

}

function credits(){
	background(51);
}

function mousePressed(){
	if(mouseX  >  width/2-150 && mouseX < width/2+250 && mouseY > 400 && mouseY < 450 && mode == 0){
		mode = 1;
	}

	if(mouseX  >  width/2-150 && mouseX < width/2+250 && mouseY > 480 && mouseY < 520 && mode == 0){
		mode = 2;
	}

	if(mouseX  >  width/2-150 && mouseX < width/2+250 && mouseY > 560 && mouseY < 610 && mode == 0){
		mode = 3;
	}
}

