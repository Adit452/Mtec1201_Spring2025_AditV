//  Adit V
// Sunny day
//this semester, im not exactly sure what theme or concept i want to follow, i think the nature/seasons concept is pretty interesting and i might stick with that.
//the code showcases some trees on a sunny day with a couple of clouds
//press either "Q" or "q" to move the sun from left to right
//move your mouse down to increase the size of the sun

//if you hold the mouse button down it makes a smooth transition from night to sunset color background

//DECLARING VARIABLES FOR THE COLORS 
let r = 0;
let g =0;
let b = 60;

// Making variables for the X and Y position of the sun so i can use a function with the sun
let sunx=200
let suny=200  

//setting a variable sunspeed
let sunSpeed = 1.1  ;

let movingRight = false; // Track sun movement

//i need to put tree color outside of draw otherwsie it flickers and its going to give me epilepsy
let  treeColor1,treeColor2, treeColor3 
function setup(){
  createCanvas(1920,1080);


  // have to do inside setup otherwise p5.js does not see the values
  treeColor1 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor2 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor3 = color(random(40, 200), random(80, 200), random(40, 80));
}

function draw() 
  {
    
 let sunSize = 200 + mouseY / 10;//this changes the size of the sun based on the y position of the mouse

  //background colour is going to be blue for sky
  background(r,g,b,180);

  //sun
  strokeWeight(3)
  fill(225,180,0);
  ellipse(sunx,suny,sunSize, sunSize);
  
  //lawn or patch of grass
  fill(0,240,0,160);
  quad(0,450,1800,450,1800,1000,0,1000);
  
  fill(150,75,0)//tree in middle
  rect(910,350,75,500);
  fill(treeColor1);
  triangle(800, 750, 1100, 750, 950, 200);
  
  
  //tree on left
  fill(150,75,0)
  rect(400,350,75,500);
  fill(treeColor2);
  triangle(290, 750, 590, 750, 440, 200);
  //tree on right
  fill(150,75,0)
  rect(1400,350,75,500);
  fill(treeColor3);
  triangle(1290, 750, 1590, 750, 1440, 200);
  
  //cloud
  fill(255,255,255,200)
  noStroke();
  ellipse(400,150,100,80)
  ellipse(500,150,100,80)
  fill(255,255,255)
  ellipse(450,150,150,120)
  
  //cloud 2
  fill(255,255,255,200)
  ellipse(900,100,120,90)
  ellipse(1000,100,120,90)
  fill(255,255,255)
  ellipse(950,100,170,130)
  
  // Cloud 3
  fill(255,255,255,200)
  ellipse(1400,200,110,85)
  ellipse(1500,200,110,85)
  fill(255,255,255)
  ellipse(1450,200,160,125)
  if (mouseIsPressed) {  
    if (r < 190) r += 1;  // Increase red gradually to sunset
    if (g < 50) g += 1;   // Slightly increase green
    if (b > 0) b -= 1;    // Decrease blue gradually
  }

    // Prevent the color from going beyond sunset
 if (r > 255) r = 190;
 if (g > 50) g = 20;    // Stop green from exceeding 50 so less brown tinge
 if (b < 0) b = 0;
 

// Move sun if 'Q' is pressed
if (keyIsPressed && (key === 'q' || key === 'Q')) {
  movingRight = true; // Start moving right
}

// Move sun continuously if it's moving
if (movingRight) {
  sunx += sunSpeed;

  // Reverse direction when hitting boundaries
  if (sunx >= width - 400 || sunx <= 200) {
    sunSpeed *= -1;
  }
}

}


  
  
function keyPressed() {

    if (key === 'n' || key === 'N') { // Turn to night
      r = 10; g = 10; b = 40;
    }

//making a key press change tree colors
if (key === 't' || key === 'T') {
  treeColor1 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor2 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor3 = color(random(40, 200), random(80, 200), random(40, 80));

}
}

