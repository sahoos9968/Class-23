var fixedRect, movingRect;

var s1, s2; 

var s3,s4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  s1 = createSprite(20,20,30,30);
  s1.shapeColor = "green";
  s1.velocityX = 2;

  s2 = createSprite(120,20,30,30);
  s2.shapeColor = "red";
  s2.velocityX = -2;

  s3 = createSprite(140,50,30,30);
  s3.shapeColor = "green";
  s3.velocityX = -2;

  s4 = createSprite(20,50,30,30);
  s4.shapeColor = "red";
  s4.velocityX = 2;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "blue";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  bounceOff(s1,s2);
  
  collide(s3,s4);

  drawSprites();
}