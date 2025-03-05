//  Adit V
// Sunny day
//this semester, im not exactly sure what theme or concept i want to follow, i think the nature/seasons concept is pretty interesting and i might stick with that.
//the code showcases some trees on a sunny day with a couple of clouds
//press either "M" or "m" to move the sun from left to right
//move your mouse down to increase the size of the sun
//left click your mouse button to change the background color moving from blue to an orange sunset color

//DECLARING VARIABLES FOR THE COLORS 
let r = 0;
let g =0;
let b = 60;

// Making variables for the X and Y position of the sun so i can use a function with the sun
let sunx=200
let suny=200  

function setup(){
  createCanvas(1920,1080);
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
  fill(50, 180, 80);
  triangle(800, 750, 1100, 750, 950, 200);
  
  
  
  //tree on left
  fill(150,75,0)
  rect(400,350,75,500);
  fill(50, 180, 80);
  triangle(290, 750, 590, 750, 440, 200);
  //tree on right
  fill(150,75,0)
  rect(1400,350,75,500);
  fill(50, 180, 80);
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

  }
  

  function mousePressed(){
 // Gradually transition from night sky to sunset colors
 if (r < 255) r += 15;   // Increase red gradually to move towards sunset
 if (g < 50) g +=1;    // 
 if (b > 0) b -= 30;    // Decrease blue gradually for sunset
 
 // Prevent the color from going beyond sunset
 if (r > 255) r = 190;
 if (g > 50) g = 20;    // Stop green from exceeding 50 
 if (b < 0) b = 0;
}

function keyPressed() {
  if ((key === 'q' || key === 'Q') && sunx < width - 400) {
    sunx += 120; // Move by 120 pixels
  }
}

