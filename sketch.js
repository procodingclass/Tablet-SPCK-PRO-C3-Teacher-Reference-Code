var trex, trexRunning;
var ground, groundImage;

function preload() {
  trexRunning = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50, 180, 20, 50);
  trex.addAnimation("running", trexRunning);

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;

  //create ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
}

function draw() {
  background(220);

  ground.velocityX = -2;
  console.log(ground.x);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //jumping the trex on space key press
  if (keyDown("space")) {
    trex.velocityY = -12;
  }

  trex.velocityY = trex.velocityY + 0.8;

  //stop trex from falling down
  trex.collide(ground);
  drawSprites();
}
