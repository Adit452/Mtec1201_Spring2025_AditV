// Adit V
// Sunny Day with OOP (Short Study #7)
// Press "Q" or "q" to move the sun
// Press "T" or "t" to change tree colors
// Move mouse down to make the sun bigger
// Hold mouse button to create sunset
// Based on Short Study #6

// DECLARING VARIABLES FOR THE COLORS 
let r = 0;
let g = 0;
let b = 60;

// Variables for sun position
let sunx = 200;
let suny = 200;

// Sun speed
let sunSpeed = 1.8;
let movingRight = false;

// Tree objects
let tree1, tree2, tree3;
//Flower
let flowers = [];

//setting color for tree so i can make small tree have colors

let  treeColor1,treeColor2, treeColor3 

function setup() {
  createCanvas(1920, 1080);

  //making color for the tree
  treeColor1 = color(50, 180, 60);
  treeColor2 = color(80, 150, 100);
  treeColor3 = color(100, 200, 150);
  // Create three trees using Tree class
  tree1 = new Tree(910, 350);
  tree2 = new Tree(400, 350);
  tree3 = new Tree(1400, 350);


}

function draw() {
  let sunSize = 200 + mouseY / 10; // Sun size changes with mouse Y

  background(r, g, b, 180);

  // Draw sun
  strokeWeight(3);
  fill(225, 180, 0);
  ellipse(sunx, suny, sunSize, sunSize);

  // Grass
  fill(0, 240, 0, 160);
  quad(0, 450, 1800, 450, 1800, 1000, 0, 1000);



  // 
  for (let flower of flowers) {
    flower.display();
  }

  // Display trees
  tree1.display();
  tree2.display();
  tree3.display();

  
  // Draw clouds
  drawCloud(400, 150);
  drawCloud(900, 100);
  drawCloud(1400, 200);
  drawSmallTree(700,400,treeColor2)
  drawSmallTree(1100,440,treeColor1)
  drawSmallTree(200,480,treeColor3)
  drawSmallTree(1600,450,treeColor2)
  // Smooth sunset transition when mouse is pressed
  if (mouseIsPressed) {  
    if (r < 190) r += 1;
    if (g < 50) g += 1;
    if (b > 0) b -= 1;
  }

  // Limit sunset colors
  if (r > 255) r = 190;
  if (g > 50) g = 20;
  if (b < 0) b = 0;

  // Move sun if 'Q' is pressed
  if (keyIsPressed && (key === 'q' || key === 'Q')) {
    movingRight = true;
  }

  if (movingRight) {
    sunx += sunSpeed;
    if (sunx >= width - 400 || sunx <= 200) {
      sunSpeed *= -1;
    }
  }
  //calling instructions
drawInstructions()

  }



function keyPressed() {
  if (key === 'n' || key === 'N') { // Turn to night
    r = 10; 
    g = 10; 
    b = 40;
  }

  if (key === 't' || key === 'T') { // Change tree colors
    tree1.changeColor();
    tree2.changeColor();
    tree3.changeColor();
  }

  if (key === 'f' || key === 'F') {
    let newFlower = new Flower(random(100, width - 100), random(460, 1000));
    flowers.push(newFlower);
  }
}





// Function to draw a cloud
function drawCloud(x, y,) {
  fill(255, 255, 255, 200);
  noStroke();
  ellipse(x, y, 100, 80);
  ellipse(x + 100, y, 100, 80);
  fill(255, 255, 255);
  ellipse(x + 50, y, 150, 120);
}
//making a class for tree
//i did take the overall idea from the p5 website: https://p5js.org/reference/p5/class/
class Tree {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.leafColor = color(random(40, 200), random(80, 200), random(40, 80));
  }

  display() {
    // Draw trunk
    fill(150, 75, 0);
    rect(this.x, this.y, 75, 500);

    //this is used to draw the leaves and i used a fill to give them different colors
    fill(this.leafColor);
    triangle(this.x - 110, this.y + 400, this.x + 190, this.y + 400, this.x + 40, this.y - 150);
  }

  changeColor() {
   // here im just making the color change randomly within set parameters
    this.leafColor = color(random(40, 200), random(80, 200), random(40, 80));
  }
}
// making a class for flower
class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(255, 100, 200);
    noStroke();
    ellipse(this.x, this.y, 15, 15); // center
    fill(255, 200, 0);
    ellipse(this.x - 10, this.y, 10, 10);
    ellipse(this.x + 10, this.y, 10, 10);
    ellipse(this.x, this.y - 10, 10, 10);
    ellipse(this.x, this.y + 10, 10, 10);
  }
}
// Draw small trees with a smaller size
function drawSmallTree(x, y) {
  fill(150, 75, 0);
  rect(x, y, 20, 100);
  fill(treeColor1);;
  triangle(x - 30, y + 60, x + 50, y + 60, x + 10, y - 40);
}

function drawInstructions() {
  fill(255,0,0);
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
  text("F:Add flowers ",0,startY+10)
 
}

