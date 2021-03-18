var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(95,550,175,50)
surface1.shapeColor = "blue"
surface2 = createSprite(300,550,175,50)
surface2.shapeColor = "orange"
surface3 = createSprite(505,550,175,50)
surface3.shapeColor = "magenta"
surface4 = createSprite(700,550,175,50)
surface4.shapeColor = "green"
    //create box sprite and give velocity
box = createSprite(random(20,750),50,50,50)
box.shapeColor = 'white'
box.velocityX = random(3,10)
box.velocityY = random(5,10)
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = 'blue'
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = 'orange'
        box.velocityX = 0
        box.velocityY = 0
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = 'magenta'
        music.play();
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = 'green'
    }
}
