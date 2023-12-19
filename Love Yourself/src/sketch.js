
let newFont;
let toRotate = false;
let sizeMsg=25;
let sizeHeart=15;
let bgColor="white";
let heartOpacity = 100;
let mouseIsPressed=false;
let msg1 = "love yourself love yourself love yourself love yourself love";
let toStop = false;


//pre-load the font before the setup
function preload() {
  newFont = loadFont(
    "https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf"
  );
}



function setup() {
  //use WEBGL to create a rotating animation around y-axis
  createCanvas(400, 400, WEBGL);
  frameRate(5);
  
}

function draw() {
  
  //background color will change when the mouse is clicked 
  background(bgColor);
  
  //set up the teddxt font
  textFont(newFont, 20);
  
  //align the text to the center
  textAlign(CENTER);

  
  //draw the heart
  let letter= "love";
  textSize(sizeHeart);
  
  //create a shape to be able to rotate it later
  beginShape();
  //use push and pop to apply the rotation only to the heart shape
  push();
  
  if(toStop==false){
    //rotate the heart around the y-axis
      rotateY(millis() / 1000);
  }

  
  //opacity of the heart is modifiable
  fill(210, 4, 45,heartOpacity);
   stroke(0);
  
  //if we set a to be 0.01, we will get a heart with densely located letters 
  for(let a=0; a<TWO_PI; a+=0.05){
    let r=10;
    let x= r*16*pow(sin(a),3);
    let y=-r*(13*cos(a) - 5*cos(2*a) - 2*cos(3*a) - cos(4*a))
    text(letter,x,y);
  }
  pop();
  endShape();
  

  //draw the text
  let textLength = msg1.length;
  let tWidth = textWidth(msg1);
  noStroke();
  textSize(sizeMsg);
  
  //plce the text in the center
  let textStart_x = 0 - (tWidth / 2) + 20;
  
   //make the characters of the string follow a sine wave pattern
  for(j=0; j<5; j++){
    
    //since we have 5 rows of the same text, each of the rows will start at different y locations
    let textStart_y = -20 + j*20;
    
    for(i=0; i<textLength; i++){
      
      //change the text and its opacity when the mouse is pressed
      if(mouseIsPressed){
        fill(255,255,255,80*(j+1));
        msg1="trust yourself trust yourself trust yourself trust yourself trust yourself";
      }
      else{
        fill(0,0,0, 30*(j+1));
        msg1="love yourself love yourself love yourself love yourself love";
      }
      
      //print the text by printing characters one by one
      text(msg1[i],textStart_x+i*10, textStart_y+10*sin((textStart_x+i*10)/30));
    }
  }
  
  
}



//the user would be able to change the text and "mode" of the artwork from bright to dark by pressing the mouse
function mousePressed() {
  
  mouseIsPressed=!mouseIsPressed;
  
  if(bgColor == "white"){
     bgColor = "black";
    heartOpacity = 200;
  }
  else if(bgColor == "black"){
     bgColor = "white";
    heartOpacity = 100;
  }
}

//when the user presses 's', heart will stop rotating
function keyTyped(){
   if (key === 's') {
    toStop=!toStop;
  }

}


//heart formula
//https://www.youtube.com/watch?v=oUBAi9xQ2X4
