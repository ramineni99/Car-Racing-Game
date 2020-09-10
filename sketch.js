var ball;
var position,database;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    var ballPositionLocation=database.ref("Ball/Position");
    ballPositionLocation.on("value",readPosition,showError);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        updatePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        updatePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updatePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updatePosition(0,+1);
    }
    drawSprites();
}

function updatePosition(x,y){
   database.ref("Ball/Position").set({
       x:position.x+x,
       y:position.y+y
   })
}


function readPosition(data){

position = data.val();
ball.x=position.x;
ball.y=position.y;

}

function showError(){
   
    alert("There is a connection error");

}