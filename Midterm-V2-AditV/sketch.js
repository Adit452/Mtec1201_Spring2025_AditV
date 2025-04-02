//  Adit V
// Sunny day
//this semester, im not exactly sure what theme or concept i want to follow, i think the nature/seasons concept is pretty interesting and i might stick with that.
//the code showcases some trees on a sunny day with a couple of clouds
//press either "Q" or "q" to move the sun from left to right
//move your mouse down to increase the size of the sun
//Press S to change states
//if you hold the mouse button down it makes a smooth transition from night to sunset color background
// Press R to restart the code
//DECLARING VARIABLES FOR THE COLORS 
let r = 0;
let g =0;
let b = 60;

// Making variables for the X and Y position of the sun so i can use a function with the sun
let sunx=200
let suny=200  

//setting a variable sunspeed
let sunSpeed = 1.6  ;

let movingRight = false; // Track sun movement

//i need to put tree color outside of draw otherwsie it flickers and its going to give me epilepsy
let  treeColor1,treeColor2, treeColor3 

//making a variable for lawn so i can change the color depending on season
let lawnColor;
//creating an initial set of values so i can click a button to get those values back pretty much resetting it

let initial = {
  r: 0, g: 0, b: 60,
  sunx: 200, suny: 200,
  sunSpeed: 1,
  movingRight: false, 
  season: 0 
}

//making a variable for season
let season = 0; // 0 = Spring, 1 = Summer, 2 = Fall, 3 = Winter

//setting var for clouds therefore i can make a random positons
let cloud1X, cloud1Y, cloud2X, cloud2Y, cloud3X, cloud3Y;

// variable for moon Y postiion
let moonY = 150;
let moonSpeed = 2;

function setup(){
  createCanvas(1920,1080);



  treeColor1 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor2 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor3 = color(random(40, 200), random(80, 200), random(40, 80));

  restartSketch();
  setSeasonColors()

  cloud1X = random(300, 500);
  cloud1Y = random(50, 200);
  cloud2X = random(600, 900);
  cloud2Y = random(80, 250);
  cloud3X = random(1100, 1500);
  cloud3Y = random(200, 400);


}


function draw() 
  {
    
 let sunSize = 200 + mouseY / 10;//this changes the size of the sun based on the y position of the mouse

  //background colour is going to be blue for sky
  background(r,g,b,180);

if (season === 0 || season === 2) {
  background(r, g, b, 180);
}

if (season === 1) {
  background(135, 206, 235, 180); // blue sky for summer
}
if (season === 3) {
  background(10, 10, 40, 180); // night for winter
}

  //sun

  strokeWeight(5); // Thicker border for better visibility
  fill(255, 50, 0); // Brighter, more visible yellow
  ellipse(sunx, suny, sunSize, sunSize);


  // Lawn (ground/grass)
  noStroke();
  fill(lawnColor);
  rect(0, 450, width, height);

 

  quad(0,450,1920,450,1920,1080,0,1080);
  
  //drawing trees
 
  drawTree(910, 350, treeColor1);
  drawTree(400, 350, treeColor2);
  drawTree(1400, 350, treeColor3);
  
  drawSmallTree(700,400,treeColor2)
  drawSmallTree(1100,440,treeColor1)
  drawSmallTree(200,480,treeColor3)
  drawSmallTree(1600,450,treeColor2)
// Draw clouds
drawCloud(cloud1X, cloud1Y);
  drawCloud(cloud2X, cloud2Y);
  drawCloud(cloud3X, cloud3Y);

//making background change color

  if (mouseIsPressed) {  
    if (r < 190) r += 1;  // Increase red gradually to sunset
    if (g < 50) g += 1;   // Slightly increase green
    if (b > 0) b -= 1;    // Decrease blue gradually
  }

    // Prevent the color from going beyond sunset
 if (r > 255) r = 190;
 if (g > 50) g = 20;    // Stop green from exceeding 50 so less brown tinge
 if (b < 0) b = 0;
 //calling the instructions
 drawInstructions()

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



// Move moon up gradually at night
if (r < 50 && g < 50 && b < 80) { 
  if (moonY < 100) { 
    moonY += moonSpeed; // Move moon down into view
  }
} 

else {
  if (moonY > -200) { 
    moonY -= moonSpeed; 
  }
}

// Draw the moon only when it's night or transitioning
if (moonY < height) {
  noStroke();
  fill(255, 255, 255, 50); // Glow effect
  ellipse(width - 600, moonY, 220, 220);
  
  drawMoon(width - 600, moonY);
}
}


//making function for moon
function drawMoon(x, y) {
  // Moon
  fill(255, 255, 255);
  ellipse(x, y, 180, 180);
  
  // Craters
  fill(200, 200, 200); // making the color of craters a bit darker so you can see them
  noStroke();
  
  // Draw multiple craters
  ellipse(x - 100/4, y + 120/4, 100/8, 100/8);
  ellipse(x + 120/5, y - 90/6, 100/10, 100/10);
  ellipse(x -80 /7, y - 20/3, 100/12, 100/12);
  ellipse(x - 100/4, y + 200/4, 162/8, 139/8);
  ellipse(x + 180/5, y - 160/6, 100/10, 100/10);
  ellipse(x -400 /7, y +160/3, 140/12, 170/12);
  ellipse(x+30,y-50,200/8,200/8)
  ellipse(x+40,y+50,180/8,180/8)
  ellipse(x-40,y-50,160/8,160/8)
  
  
}

function drawInstructions() {
  fill(255);
  textSize(24);
  textAlign(LEFT, BOTTOM);
  
  // Start from the bottom-left corner without margins
  let startY = height - 240; // Position the first line
  text("Controls:", 0, startY-230);
  text("Q/q: Move sun left to right", 0, startY -200);
  text("Mouse Down: Increase sun size", 0, startY -170);
  text("Mouse Press: Transition to sunset", 0, startY -140);
  text("S: Change seasons", 0, startY - 110);
  text("R: Restart", 0, startY - 80);
  text("N: Switch to night mode", 0, startY -50);
  text("T: Randomize tree colors", 0, startY -20);
}


// Draw small trees with a smaller size
function drawSmallTree(x, y) {
  fill(150, 75, 0);
  rect(x, y, 20, 100);
  fill(treeColor1);
  triangle(x - 30, y + 60, x + 50, y + 60, x + 10, y - 40);
}


//making function for the trees

function drawTree(x, y, treeColor) {
 fill(150, 75, 0);
rect(x, y, 75, 500);
fill(treeColor);
triangle(x - 110, y + 400, x + 190, y + 400, x + 40, y - 150);
}


//making a function for clouds
function drawCloud(x, y) {
  fill(255, 255, 255, 200);
  noStroke();
  ellipse(x, y, 100, 80);
  ellipse(x + 100, y, 100, 80);
  fill(255, 255, 255);
  ellipse(x + 50, y, 150, 120);
}
  // Reset all variables to their initial values
function restartSketch() {

    r = initial.r;
    g = initial.g;
    b = initial.b;
    sunx = initial.sunx;
    suny = initial.suny;
    sunSpeed = initial.sunSpeed;
    movingRight = initial.movingRight;
    season = initial.season; // 
    setSeasonColors();
    moonY = 150;
  }



function setSeasonColors() {
  if (season == 0) { // Spring
    treeColor1 = color(50, 200, 50);
    treeColor2 = color(40, 180, 40);
    treeColor3 = color(60, 220, 60);
    lawnColor = color(180, 255, 180);
  } else if (season == 1) { // for summer i went for some kind dried tree
    treeColor1 = color(139, 69, 19);
    treeColor2 = color(160, 82, 45);
    treeColor3 = color(120, 60, 30);
    lawnColor = color(0, 100, 0); // 

  } else if (season == 2) { // for fall i think the best was the orange red color
    treeColor1 = color(255, 69, 0);
    treeColor2 = color(255, 140, 0);
    treeColor3 = color(205, 92, 92);
    lawnColor = color(255, 223, 128); // 
  } else if (season == 3) { // for winters its pure  so it covers all the leaves and stuff
    treeColor1 = color(255);
    treeColor2 = color(255);
    treeColor3 = color(255);
    lawnColor = color(255);
  }
}

  
function keyPressed() {

  if (key === 'r' || key === 'R') {
    restartSketch();
  }
  if (key === 's' || key === 'S') {
    season = (season + 1) % 4; // Cycle through 4 seasons
    setSeasonColors();
  }


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
