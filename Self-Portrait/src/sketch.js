function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("pink");
  
  //hair
  fill("#664400");
  ellipse(200,300,220, 460);

  //body
  noStroke();
  fill("#ccffcc");
  triangle(200,290,80,400,320,400);
  
  //necklace
  for(let i=0; i < 31; i+=5){
    fill("#334d4d");
    circle(170+i,320+i,5);
  }
  for(let i=0; i < 31; i+=5){
    fill("#334d4d");
    circle(200+i,350-i,5);
  }
  
  
  //neck
  fill("#fff2e6");
  rect(180,285,40,25);
  ellipse(200,310,40,15);
  
  //head
  noStroke();
  fill("#fff2e6");
  ellipse(200,200,140,180);
  
  //eyes
  fill(255);
  ellipse(170,185,25,20);
  ellipse(230,185,25,20);
  
  //pupils
  fill("#664400");
  //moving pupils
  leftpupil = circle(165 +(0.02*mouseX),183 +(0.02*mouseY),10);
  rightpupil = circle(225 +(0.02*mouseX),183 +(0.02*mouseY),10);
  

  //nose
  stroke(5);
   // curve(170,200,170,210,210,210,170,210);
  fill("#fff2e6");
  arc(200, 215, 13, 10, 0, PI , OPEN);
  
  //lips
  fill(188,8,74);
  stroke(100);

  if(mouseIsPressed){
    //talking mouth animation
    arc(200,250,40,5, 0, PI, CHORD);
    
  }
   else {
     arc(200,250,40,18, 0, PI, CHORD);
   }
  
  //eyebrows
  noFill();
  stroke(10);
  arc(170, height/2-25, 35, 25, 3 + QUARTER_PI, TWO_PI-0.7);
  arc(230, height/2-25, 35, 25, 3 + QUARTER_PI, TWO_PI-0.7);
  
  //bangs
  fill("#664400");
  noStroke();
  rotate(2/3);
  ellipse(250, -50, 100, 30);
  rotate(1/3);
  ellipse(190, -80, 30, 100);
  

  
}