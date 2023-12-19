
function setup() {
  createCanvas(400, 400);
  
  //to create animation effect
  frameRate(5);
}


function draw() {
  background("black");
  noStroke();

  //upper-left circle
  drawCircle(100,random(5,21),random(1,101));
  
  
  //upper-right circle
  push();
  translate(400,0);
  rotate(2*PI/4);
  drawCircle(100,random(5,21),random(1,101));
  pop();
  
  
  //lower-left circle
  push();
  translate(200,200);
  rotate(2*PI/4);
  drawCircle(100,random(5,21),random(1,101));
  pop();
  
  
   //lower-right circle
  push();
  translate(200,200);
  drawCircle(100,random(5,21),random(1,101));
  pop();
  
  
  //center circle
  stroke(20);
  push();
  translate(100,100);
  drawCircle(20,random(5,20),random(30,101));
  pop();
  
  
}



//function to draw the circles
//3rd variable controls how distant from each other the two hemispheres are
//2nd variable corresponds to the gap between the ellipses forming the circles
function drawCircle(radius,gap,upperCircleI){

  for(i=0; i<91; i+=gap){
    let circleWidth = 5;
    
    //upper part of the circle
    fill(255,150,2*i);
    ellipse(width/4, 10+i, 2*(sqrt(radius*radius -   upperCircleI*upperCircleI)), circleWidth);
    upperCircleI-=gap;
    
    
    //lower part of the circle
    fill(2*i,150,255);
    ellipse(width/4, 100+i, 2*(sqrt(radius*radius - i*i)), circleWidth);
    
  } 
}