//create variables
var bullet, wall;
var thickness, weight, speed;
function setup() {
  //create the canvas
  createCanvas(1600,400);

  //set the speed and weight for the car
  speed = random(223,321);
  weight = random(30, 52);
  thickness = random(22,83);
  //create a bullet and assign speed
  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;

  //create a wall to detect collision
  wall = createSprite(1200,200, thickness,height/2 );
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  //set the background to black
  background(0,0,0);  

  //detect collision between the bullet and the wall
  if(hasCollided(bullet,wall))
  {
    //stop the car when it collides with the wall
    bullet.velocityX = 0;

    //damage formula 0.5xbulletWeight x bulletSpeed x bulletSpeed/thickness of wall x thickness of wall x thickness of wall
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    //if the damage is greater than 10 change the color of the bullet to red
    if(damage > 10)
    {
      bullet.shapeColor = color(255,0,0);
    }

    //if the damage is less than 10 change the color of the bullet to green
    if(damage < 10)
    {
      bullet.shapeColor = color(0,255,0);
    }      
  }

  //draw the sprites
  drawSprites();
}

//Has Collided algorithm
function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}