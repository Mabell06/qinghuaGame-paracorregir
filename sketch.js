//personaje
var qinghua, qinghuaImg;
var qinghuaRun, qinghuarunImg;
var qinghuaJump, qinghuajumpImg;
var qinghuaDie, qinghuaDieImg;
//fondo
var paisaje;
//extras
var pergaminos, pergaminosImg;
var roca, rocaImg;
var gameState = "play";
//sonido
var jumpSound, collidedSound;

function preload(){
qinghuaRunImg = loadAnimation("qinghuarun.png","qinghuajump.png","qinghuarun.png")
qinghuaDieImg = loadImage("qinghuadie.png")
paisajeImg = loadImage("paisaje.png")
jumpSound = loadSound("sonidodesalto.mp3")
collidedSound = loadSound("sonidodemuerte.mp3")
rocaImg = loadImage("rocaa.png")
}

function setup() {
createCanvas(600,600);

/*
paisaje = createSprite(300,300);
  paisaje.addImage("paisaje",paisajeImg);
  paisaje.velocityX = 0;
  */
//pergaminosImg = new Group();
//rocaImg = new Group ();

qinghua = createSprite(200,200,50,50);
//qinghua.addImage("qinghuarun", qinghuaDieImg);
qinghua.addAnimation("running", qinghuaRun);
  //qinghua.addAnimation("die", qinghuaDie);
  //qinghua.setCollider('circle',0,0,350)
  qinghua.scale = 0.08
}

function draw() {
 background(0);
 /*
  if (gameState === "play") {
  
    if((touches.length > 0 || keyDown("SPACE")) && qinghua.y  >= height-120) {
      jumpSound.play( )
      qinghua.velocityY = -10;
       touches = [];
    }
    
    qinghua.velocityY = qinghua.velocityY + 0.8
    
    if(paisajeImg.y > 400){
      paisajeImg.y = 300
    }
    
    if(rocaImgGroup.isTouching(qinghua) || qinghua.y > 600){
      qinghua.destroy();
      gameState = "end"
    }
    

  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Se murio Qinghua ):", 230,250)
  }
  */
  drawSprites();
}