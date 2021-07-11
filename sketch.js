var ship,sea,shipimage,seaimage;


  

function preload(){
  
  shipimage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimage=loadImage("sea.png");
  
  
  
 
 
  
  
  

}


function setup(){
  createCanvas(400,400);
   sea= createSprite(200,200,40,40);
  sea.addImage("sea",seaimage);
  
  
  
  
  sea.scale=1.0;
  
  sea.x = sea.width/2;


   ship=createSprite(150,250,30,30);
  ship.addAnimation("ship",shipimage);
   ship.scale=0.3;

   
   
}

function draw() {
  
  background("blue");
  
  sea.velocityX=-2;
  
  
  if(sea.x<0)
  {
    sea.x = sea.width/2;
   
  }
   drawSprites();
 
}