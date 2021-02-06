var movR, fixR;

function setup() {
  createCanvas(800,400);
  fixR =createSprite(300, 200, 60, 80);
  movR = createSprite(300,50,40,40);
  movR.velocityY = 4;
  movR.velocityX = 2;
  
  movR.debug=true;
  fixR.debug=true;
}

function draw() {
  background(0); 
  
  //movR.x=mouseX;
 // movR.y=mouseY;

  console.log(movR.x-fixR.x);

  if(movR.x-fixR.x < fixR.width/2+movR.width/2
    && fixR.x-movR.x <fixR.width/2+movR.width/2
    &&movR.y-fixR.y < fixR.height/2+movR.height/2
    && fixR.y-movR.y <fixR.height/2+movR.height/2 ){
    movR.shapeColor="cyan";
    fixR.shapeColor ="cyan";
    
    movR.velocityY = 0;
    movR.velocityX = 0;
  }
  else {
    movR.shapeColor="lime";
    fixR.shapeColor ="lime";
  }

  
  
  drawSprites();
}