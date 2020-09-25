var gameState=0;
var playerCount=0;
var game,form, player;
var database;
var allPlayerInfo;
var car1,car2,car3,car4,carArray;
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