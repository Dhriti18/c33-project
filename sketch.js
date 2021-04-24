var snow
function preload(){
  


  //snow aniamtion

snow_Animation=loadAnimation("pet0023_0001.png",
"pet0023_0002.png",
"pet0023_0004.png",
"pet0023_0005.png",
"pet0023_0007.png",
"pet0023_0008.png",
"pet0023_0010.png",
"pet0023_0011.png",
"pet0023_0013.png",
"pet0023_0014.png",
"pet0023_0016.png",
"pet0023_0017.png",
"pet0023_0019.png",
"pet0023_0020.png",
"pet0023_0022.png",
"pet0023_0023.png",
"pet0023_0025.png",
"pet0023_0026.png")





  //other images
 bg=loadImage("snow1.jpg") ;
 s1=loadImage("ezgif.com-gif-maker (3).png")
 s2=loadImage("ezgif.com-gif-maker (2).png")
 s3=loadImage("ezgif.com-gif-maker (1).png")
}
function setup() {
  createCanvas(1900,600);
  //createSprite(480, 490, 50, 50);



  santa1=loadAnimation(" ezgif.com-gif-maker__4_-removebg-preview.png",
"ezgif.com-gif-maker__5_-removebg-preview.png",
"ezgif.com-gif-maker__6_-removebg-preview.png",
"ezgif.com-gif-maker__7_-removebg-preview (1).png",
"ezgif.com-gif-maker__8_-removebg-preview (1).png",
"ezgif.com-gif-maker__9_-removebg-preview.png");

gifts=loadImage("ezgif.com-gif-maker__4_-removebg-preview (2).png");





  sprite1=createSprite(800,530,40,40);
  sprite1.addImage(s1);
  sprite1.scale=0.5

  sprite2=createSprite(250,530,40,40);
  sprite2.addImage(s2);
  sprite2.scale=0.5
  sprite3=createSprite(100,530,40,40);
  sprite3.addImage(s3);
  sprite3.scale=0.5


  santaSprite=createSprite(1200,530,40,40);
 santaSprite.addAnimation("christmas",santa1);
 santaSprite.scale=0.9


 presents1=createSprite(500,500,10,10);
presents1.addAnimation("christmas1happy",gifts);
presents1.scale=0.4

}

function draw() {
  background(bg); 

  //background(0);
  
    
 

  drawSprites();
  spawnSnow();}

  function spawnSnow() {
    
    if (frameCount % 5 === 0) {
      var snow1 = createSprite(Math.round(random(80,700)),10,90,10); 
      //snow1.x = Math.round(random(80,120));
      
      snow1.addAnimation("snowAnimation1",snow_Animation);
   snow1.scale = 0.2;
  
   snow1.velocityY=10;
  
      
     
      
   
    }
  }

