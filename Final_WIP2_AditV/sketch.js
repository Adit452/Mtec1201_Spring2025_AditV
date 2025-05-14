//Press S to move sun
//press N to make starry night
//Press D for day




//creating variables for tree colors

let  treeColor1,treeColor2, treeColor3 


// all the variables needed for the sun
let sunx = 200;
let suny = 200;
let sunSpeed = 2;
let sunIsMoving = false;
let sunGoingUp = true;

//all the variables needed for moon and starry night
let moonY = 150;
let moonSpeed = 2;
let stars = [];

// Initial sky color (dark blue = night)
let r = 10;
let g = 10;
let b = 40; 

//declaring for audio
let bird
let insect


function setup() {
  createCanvas(1600, 1000)


  //mkaing random colors for tree
  treeColor1 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor2 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor3 = color(random(40, 200), random(80, 200), random(40, 80));

  //array for stars
  // Generate random stars
  for (let i = 0; i < 100; i++) {
    stars[i] = {
      x: random(width),
      y: random(300),
      size: random(1, 3)
    };
  }

  //calling restart function
  resetSketch();

//setting volume and loop for chirping birds
bird.setVolume(0.5); 


insect.setVolume(0.5)


}


function preload(){
  bird=loadSound('Audio/birds.mp3')
insect=loadSound('Audio/Insect.mp3')

}



function draw() {
   
background(r, g, b);

if (r === 10 && g === 10 && b === 40) {
  drawStars();
}

/// if its day make sun come down. if its night make sun go off screen
if (r === 135 && g === 206 && b === 235) {
  if (suny < 200) {
    suny += sunSpeed;
  }
} else {
  
  if (suny > -200) {
    suny -= sunSpeed;
  }
}

// Draw sun only if it's on screen
if (suny > -200 && suny < height + 200) {
  let sunSize = 200 + mouseY / 10;
  fill(255, 50, 0);
  strokeWeight(5);
  ellipse(sunx, suny, sunSize, sunSize);
}
  

  
  drawMountains()
  drawTrail()
 drawLawn()

 drawTree(1200, 150, treeColor1);
  drawTree(200, 350, treeColor2);
  drawTree(1400, 450, treeColor3);
  drawTree(500, 150, treeColor2);







 // when the moon is above the height of the screen dont draw it
 if (moonY < height) {
  drawMoon(width - 200, moonY + 35);
}
//this code is to animate the movement of the moon going up

if (r < 50 && g < 50 && b < 80) {
  if (moonY < 100) {
    moonY += moonSpeed;
  }
} else {
  if (moonY > -200) {
    moonY -= moonSpeed;
  }
}

displayInstructions()

}


//here im creating a function to draw the trail. realistically i could just do this in my draw directly 
//however if i have things i frequently change its much easier to find them as functions then looking at my draw code
function drawTrail(){

  fill(139, 69, 19); // Brown dirt
  noStroke();
  quad(width / 2 - 200, height,  // bottom left
       width / 2 + 200, height,  // bottom right
       width / 2 + 40, 400,     // top right
       width / 2 - 40, 400);     // top left
}
//function for theg gras
function drawLawn() {
  fill(34, 139, 34);
  noStroke();

   //left side of the lawn
   quad(0, height, 
    width / 2 - 200, height, 
    width / 2 - 40, 400, 
    0, 400);

//right side of the lawn
quad(width / 2 + 200, height, 
    width, height, 
    width, 400, 
    width / 2 + 40, 400);
}


//simple function for the tree
function drawTree(x, y, treeColor) {
  fill(150, 75, 0);
 rect(x, y, 75, 500);
 fill(treeColor);
 triangle(x - 110, y + 400, x + 190, y + 400, x + 40, y - 150);
 }


 // function for the mountains
 function drawMountains() {
  noStroke();

  //mountain in the back
  fill(180);
  triangle(100,700,800,100,1500,700);

  // the big mountain
  fill(120);
  triangle(300, 750,  1000, 200, 1600, 750);

  // small mountain on the left
  fill(90);
  triangle(-100, 750,  400, 300, 900, 750);

}


function drawMoon(x, y) {
  noStroke();

  // Bigger soft glow
  fill(255, 255, 255, 40); 
  ellipse(x, y, 160, 160);

  // Bigger moon body
  fill(255);
  ellipse(x, y, 130, 130);

  // Shadow to create crescent (adjust offset to match size)
  fill(r, g, b); 
  ellipse(x - 35, y, 130, 130); 
}


function drawStars() {
  fill(255);
  noStroke();
  for (let s of stars) {
    ellipse(s.x, s.y, s.size);
  }
}

function setDaytime() {
  r = 135;
  g = 206;
  b = 235;
 
  sunIsMoving = false;
  sunGoingUp = true;
  if (bird.isPlaying()) bird.stop();
  if (!insect.isPlaying()) {
    insect.setVolume(0.5);
    insect.loop();
  }


}

function resetSketch() {
  // Reset sun
  sunx = 200;
  suny = 200;
  sunIsMoving = false;
  sunGoingUp = true;

  // Reset moon
  moonY = 150;

  // Reset sky to night by default
  r = 10;
  g = 10;
  b = 40;

  // Generate new random tree colors
  treeColor1 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor2 = color(random(40, 200), random(80, 200), random(40, 80));
  treeColor3 = color(random(40, 200), random(80, 200), random(40, 80));

 
}

//instructions code
function displayInstructions() {
  fill(0,0,0);
  textSize(18);
  textAlign(LEFT);
  text(`Controls:
S - Move sun up/down
D - Daytime
N - Nighttime
R - Reset scene
M - Mute/unmute sounds`, 20, height - 300);
}







//function for key presses
function keyPressed() {
  if (key === 's' || key === 'S') {
    sunIsMoving = true;
    sunGoingUp = !sunGoingUp;
  }

  if (key === 'd' || key === 'D') {
    // Day mode
    r = 135;
    g = 206;
    b = 235;

    sunIsMoving = false;
    sunGoingUp = true;

    if (bird.isPlaying()) bird.stop();     // Stop birds during the day
    if (!insect.isPlaying()) {
      insect.setVolume(0.5);
      insect.loop();                       // Play insects during the day
    }
  }

  if (key === 'n' || key === 'N') {
    // Night mode
    r = 10;
    g = 10;
    b = 40;

    if (insect.isPlaying()) insect.stop(); // Stop insects at night
    if (!bird.isPlaying()) {
      bird.setVolume(0.5);
      bird.loop();                         // Play birds at night
    }
  }

  if (key === 'r' || key === 'R') {
    resetSketch();
  }

  if (key === 'm' || key === 'M') {
    if (bird.isPlaying() || insect.isPlaying()) {
      bird.stop();
      insect.stop();
    } else {
      if (r === 135 && g === 206 && b === 235) {
        insect.loop();
      } else {
        bird.loop();
      }
    }
  }
}