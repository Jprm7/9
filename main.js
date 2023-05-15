var tRex 


function preload(){

}

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  tRex = createSprite(200,200,20,20)
}

function draw() {
 
 
  if (keyDown("up")){
    background("green");
    tRex.y -=5 
  }
  if (keyDown("down")){
    background("black");
    tRex.y +=5 
  }
  if (keyDown("right")){
    background("blue");
    tRex.x +=5 
  } 
  if (keyDown("left")){
    background("yellow");
    tRex.x -=5 
  }
  drawSprites();

}