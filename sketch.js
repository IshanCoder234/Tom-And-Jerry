var Cat,Mouse,Garden;
var CatImage,MouseImage,GardenImage;

function preload() {
    //load the images here
GardenImage = loadImage("images/garden.png")

 catImage1=loadImage("images/cat1.png")
 catImage2=loadAnimation("images/cat2.png","images/cat3.png")
// catImage3=loadImage("images/cat3.png")
 catImage4=loadAnimation("images/cat4.png")

 MouseImage1 = loadImage("images/mouse1.png")
 MouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
 //MouseImage3 = loadImage("images/mouse3.png")
 MouseImage4 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
    Garden = createSprite(600,400,100,100)
    Garden.addImage("garden.png",GardenImage)
    Garden.scale=1.5;

    // sprite.addImage("desc",GardenImage)
    // sprite.addImage(GardebImage)

    Cat = createSprite(940,680,10,10)
    Cat.addImage(catImage1);
    Cat.scale=0.2;

    Cat.setCollider("circle",0,0,40)

    Mouse = createSprite(250,680,1,10)
    Mouse.addImage(MouseImage1);
    Mouse.scale=0.15;
    Mouse.setCollider("circle",0,0,50)

    Cat.debug=true
        Mouse.debug=true
}
   
function draw() {
background(0)

    if(Cat.x - Mouse.x < (Cat.width - Mouse.width)/2)
{
    //console.log("here")
//For moving and changing animation write code here
Cat.velocityX=0
Cat.x=350
Cat.addAnimation("catStopped",catImage4)
Cat.changeAnimation("catStopped")

Mouse.addAnimation("mouse4.png",MouseImage4)
Mouse.changeAnimation("mouse4.png")

}
    
    drawSprites();

    text(mouseX+','+mouseY,mouseX,mouseY)
}


function keyPressed(){


if (keyCode === LEFT_ARROW){
    Cat.velocityX = -5
    Cat.addAnimation("catRunning",catImage2)
    Cat.changeAnimation("catRunning")

    Mouse.addAnimation("mouse2.png",MouseImage2)
    Mouse.changeAnimation("mouse2.png")
}
}