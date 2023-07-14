var tree, treeImage;

function preload(){
 treeImage = loadImage("tree.gif")
}

function setup(){
 createCanvas(1000,700);

 tree = createSprite(500,350);
 tree.addImage("save trees", treeImage);
 tree.scale = 0.5;
}

function draw(){
 background("black");

 drawSprites();
}