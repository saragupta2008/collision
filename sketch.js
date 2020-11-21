function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 200, 50, 80);
  movingRect=createSprite(400,200,80,30);

  fixedRect.shapeColor=("green");
  movingRect.shapeColor=("green");
}

function draw() {
  background(255,255,255);  

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2){
fixedRect.shapeColor="red"
movingRect.shapeColor="red"

  }
  else{
    fixedRect.shapeColor=("green");
    movingRect.shapeColor=("green");
  }
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
}