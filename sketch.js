//Indentation - adding a tab space in the beginning of the line

//load animation, images and sound
function preload(){
  trexAni = loadAnimation("trex1.png", "trex3.png","trex4.png")
  groundimg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex = createSprite(50,180,15,10)
  trex.addAnimation("running",trexAni)
  trex.scale = 0.5

  ground = createSprite(300,190,600,20)
  ground.addImage(groundimg)

  ground2 = createSprite(300,200,600,20)
  ground2.visible = false 
}

function draw(){
  background("lightgrey")
  console.log(trex.y) 
  trex.collide(ground2)
  ground.velocityX = -3
  if(ground.x < 0){
    ground.x = 600
  }
  
  if(keyDown("space") && trex.y>166){
    trex.velocityY = -7
  }
  trex.velocityY = trex.velocityY +0.3
  drawSprites()
}
