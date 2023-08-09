var ship,ship_moving;
var sea;
function preload(){
    seaImg=loadImage("sea.png");
    ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
//sea_mar("sea.png");

}

function setup(){
  createCanvas(400,400);
 sea.addImage(seaImg)
  ship=createSprite(100,200,50,70)
  ship.addAnimation("flotando",ship_moving)
  ship.scale=0.3

  //sea=createSprite(200,200)
  //sea.addAnimation("mar"sea,)
}

function draw() {
  background("blue");
  if (sea.x<0){
    sea.x=sea.width/2;
  }
 drawSprites()
}