gameState="serve";
score1=0;
lives=5;
var bgServe,bgServeImg;
var mouthRules,mouthRulesImg;
var mouthbg,toothpasteGroup;
var next ,nextArrow;
var mgerm1Img,mgerm2Img,mgerm3Img,mgerm4Img;
var germGroup,boom1,boomImg;
var toothbrush,pasteImg,toothbrushImg;
var monstergerm,monstergermImg;
var win1,win1Img;
var stomachbg;
var b1,b2,b3,b4;
var c1,c2,c3,c4,c5,c6,cell;
var stomach,stomachImg;
var next1,nextArrow1;
var apple,a1,a2,a3;
var banana,ba1,ba2,ba3;
var carrot,ca1,ca2,ca3;
var broc,br1,br2,br3;
var pear,p1,p2,p3;


function preload(){
  //loading images
bgServeImg=loadImage("images/bg.jpg");
mouthRulesImg=loadImage("images/mouthStartBg.jpg")
nextArrow=loadImage("images/nextArrow1.png")
nextArrow1=loadImage("images/nextArrow.png")
mouthbg=loadImage("images/mouthbg.jpg")
toothbrushImg=loadImage("images/toothbrush.png")
pasteImg=loadImage("images/toothpaste.png")
monstergermImg=loadImage("images/monstergerm.png")
boomImg=loadImage("images/boom1.png");
win1Img=loadImage("images/win1.png")
stomachRules=loadImage("images/stomachRules.jpg")
stomachbg=loadImage("images/stomachbg.jpg")
stomachImg=loadImage("images/stomachPill.png")
apple=loadImage("images/apple.png")
carrot=loadImage("images/carrot.png")
pear=loadImage("images/pear.png")
banana=loadImage("images/banana.png")
broc=loadImage("images/broccoli.png")
cell= loadImage("images/cell.jfif")

  //loading animations
  mgerm1Img=loadAnimation('images/mg1a.png','images/mg1b.png','images/mg1a.png')
  mgerm2Img=loadAnimation('images/mg2a.png','images/mg2b.png','images/mg2a.png')
  mgerm3Img=loadAnimation('images/mg3a.png','images/mg3b.png','images/mg3a.png')
  mgerm4Img=loadAnimation('images/mg4b.png','images/mg4a.png','images/mg4c.png')
}

function setup() {
  createCanvas(1200, 800);
  // background of starting displaying game's name 
  bgServe=createSprite(600,400)
  bgServe.addImage(bgServeImg)
  bgServe.visible=false

  // mouthrules sprites
  mouthRules=createSprite(600,400)
  mouthRules.addImage(mouthRulesImg)
  mouthRules.scale=1.5
  mouthRules.visible=false

  next =createSprite(850,727) 
  next.addImage(nextArrow)
  next.scale=0.35
  next.visible=false

  // mouth bacteria fight game Stage 1 sprites and characters 
  germGroup = new Group();
  toothpasteGroup= new Group();

  toothbrush =createSprite(1100,427) 
  toothbrush.addImage(toothbrushImg)
  toothbrush.scale=2.55
  toothbrush.visible=false
          // toothbrush.debug=true
  toothbrush.setCollider("rectangle",0,0,15,toothbrush.height)

  monstergerm=createSprite(0,400,10,10)
  monstergerm.addImage(monstergermImg)
  monstergerm.visible=false
  
  boom1=createSprite(100,300,10,20)
  boom1.addImage(boomImg)
  boom1.scale=1.25
  boom1.visible=false    

// mouth win sprites 
win1=createSprite(130,480)
win1.addImage(win1Img)
win1.visible=false

// stage2 sprites
next1 =createSprite(950,727) 
next1.addImage(nextArrow1)
next1.scale=0.35
next1.visible=false

stomach=createSprite(100,400)
stomach.addImage(stomachImg)
stomach.scale=0.5
stomach.visible=false

b1=createSprite(1200,400,10,1200)
b1.visible=false
b2=createSprite(0,400,10,1200)
b2.visible=false
b3=createSprite(600,0,1200,10)
b3.visible=false
b4=createSprite(600,800,1200,10)
b4.visible=false

c1=createSprite(270,80,30,700);
c2=createSprite(270,690,30,230);
c3=createSprite(520,230,30,700);
c4=createSprite(760,630,30,400);
c5=createSprite(980,300,30,700);
c6=createSprite(760,-15,30,360);
c1.visible=false
c2.visible=false
c3.visible=false
c4.visible=false
c5.visible=false
c6.visible=false
c1.addImage(cell)

a1= createSprite(150,100)
a1.addImage(apple)
a2= createSprite(450,300)
a2.addImage(apple)
a3= createSprite(850,600)
a3.addImage(apple)

ba1=createSprite(150,200)
ba1.addImage(banana)
ba1.scale=0.25
ba2=createSprite(450,50)
ba2.addImage(banana)
ba2.scale=0.25
ba3=createSprite(650,700)
ba3.addImage(banana)
ba3.scale=0.25

p1=createSprite(150,750)
p1.addImage(pear)
p1.scale=0.25
p2=createSprite(450,150)
p2.addImage(pear)
p2.scale=0.25
p3=createSprite(850,450)
p3.addImage(pear)
p3.scale=0.25

ca1=createSprite(150,500)
ca1.addImage(carrot)
ca1.scale=0.25
ca2=createSprite(450,500)
ca2.addImage(carrot)
ca2.scale=0.25
ca3=createSprite(650,500)
ca3.addImage(carrot)
ca3.scale=0.25

br1=createSprite(850,150)
br1.addImage(broc)
br1.scale=0.25
br2=createSprite(150,650)
br2.addImage(broc)
br2.scale=0.25
br3=createSprite(650,250)
br3.addImage(broc)
br3.scale=0.25

a1.visible=false
a2.visible=false
a3.visible=false
ba1.visible=false
ba2.visible=false
ba3.visible=false
br1.visible=false
br2.visible=false
br3.visible=false
ca1.visible=false
ca2.visible=false
ca3.visible=false
p1.visible=false
p2.visible=false
p3.visible=false

}

function draw() {
   background(0);
   serve();
   stage1mouth();
   stage1();
   end();
   mouthWin()
   stage2stomach() ;
   stage2()

   if (gameState==="stage1" && lives <= 0 ){
    gameState="end"
  }
 
  drawSprites();
  textSize(40);
  fill("lightBlue")
text("Lives :  " + lives, 40, 80);

if (gameState==="play"){
  fill("red")
  textSize(48)
  text ("YAY!!! you killed all the bacteria in the mouth. ",20,140)
  text ("SO from now always remember to brush twice a day ",10,700)
}
}

function serve(){
if (gameState==="serve"){
  bgServe.visible=true
  lives=5
  score1=0
  if (keyDown("space") && gameState==="serve"){
    gameState="start"
    console.log("start")
  } 
 }
}
function stage1mouth(){
  if (gameState==="start"){
      bgServe.visible=false
      mouthRules.visible=true
      next.visible=true
    if (mousePressedOver(next)&& gameState==="start"){
      gameState="stage1"
      console.log("stage1")
    }
   }
}
function stage1(){
if (gameState==="stage1"){
  background(mouthbg)
   next.visible=false
   mouthRules.visible=false
   toothbrush.y = World.mouseY
   toothbrush.visible=true

   if (keyDown("space")) {
    toothpaste();
  }

  if (toothpasteGroup.isTouching(germGroup)) {
    score1= score1 + 1;
    console.log(score1)
    toothpasteGroup.destroyEach();
    germGroup.destroyEach();
   // blastSound.play();

  }

  if (germGroup.isTouching(toothbrush)){
    lives=lives-1
    toothpasteGroup.destroyEach();
    germGroup.destroyEach();
  }

  if (monstergerm.isTouching(toothbrush)){
    lives=0
    toothpasteGroup.destroyEach();
    germGroup.destroyEach();
  }

  if (toothpasteGroup.isTouching(monstergerm)) {
    score1= score1 + 1;
    boom1.x=monstergerm.x
    boom1.y=monstergerm.y
    boom1.visible=true    
    console.log(score1)
    toothpasteGroup.destroyEach();
    germGroup.destroyEach();
    monstergerm.velocityX=0
     }

  if (score1===1){
    console.log("monster's here")
    monstergerm.visible=true
    monstergerm.velocityX=15
  }

  if (World.frameCount % 80 == 0) {  
    var germ = createSprite(0, Math.round(random(30, 770)), 10, 10);
    //germ.debug=true
    germ.velocityX = (6 + score1/2);
    germ.lifetime = 1250;
    germGroup.add( germ);
    var randStone = Math.round(random(1, 4))
    switch (randStone) {
      case 1:germ.addAnimation("kill",mgerm1Img)
      germ.scale=0.3;
        break;
        case 2:germ.addAnimation("run",mgerm2Img)
        germ.scale=0.25;
        break;
      case 3: germ.addAnimation("hit",mgerm3Img)
      germ.scale=0.27;
        break;
        case 4: germ.addAnimation("play",mgerm4Img)
      germ.scale=0.32;
        break;
        default:
        break;
    }}
   if (score1===2 ){
  gameState="play"
  
}
    
}
}
function toothpaste() {
  var toothpaste= createSprite(1100, 1100, 60, 10);
  toothpaste.addImage(pasteImg);
  toothpaste.y = toothbrush.y-100;
  toothpaste.velocityX = -(9+score1/3);
  toothpaste.lifetime = 550;
  toothpaste.scale =0.21;
  toothpasteGroup.add(toothpaste);

}
 function mouthWin(){
  if (gameState==="play"){
     toothbrush.visible=false
     console.log("mouth win ")
     win1.visible=true
   background(255)
   next.visible=true
   if (mousePressedOver(next)&& gameState==="play"){
    gameState="playAgain"
    console.log("playAgain")
  }
  }
}
function stage2stomach(){
  if (gameState==="playAgain"){
background(stomachRules)
win1.visible=false
monstergerm.visible=false
boom1.visible=false
next.visible=false
next1.visible=true

if (mousePressedOver(next1) && gameState==="playAgain"){
  gameState="stage2"
  console.log("stage2")
}}}

function stage2(){
  if (gameState==="stage2"){
    next1.visible=false
    c1.visible=true
c2.visible=true
c3.visible=true
c4.visible=true
c5.visible=true
c6.visible=true
stomach.visible=true
    background(stomachbg)
    a1.visible=true
a2.visible=true
a3.visible=true
ba1.visible=true
ba2.visible=true
ba3.visible=true

br1.visible=true
br2.visible=true
br3.visible=true
ca1.visible=true
ca2.visible=true
ca3.visible=true
p1.visible=true
p2.visible=true
p3.visible=true
  }
}
function end(){
  if (gameState==="end"){
console.log("end")
  }
}



