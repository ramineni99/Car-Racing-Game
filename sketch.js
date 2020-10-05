var gameState=0;
var playerCount=0;
var game,form, player;
var database;
var allPlayerInfo;
var car1,car2,car3,car4,carArray;
var car1Image,car2Image,car3Image,car4Image,trackImage;
function preload(){
    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    trackImage = loadImage("images/track.jpg");

}
function setup(){
    createCanvas(displayWidth,displayHeight);
    console.log(displayWidth+","+displayHeight);
 
    database=firebase.database();
    carArray = [];
    game=new Game();
    game.getGameState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount==4){
     game.updateGameState(1);
    }
    if(gameState==1){
        game.play();
    }
}