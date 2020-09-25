class Game {
    getGameState(){
     database.ref("gameState").on("value",function (data){
         gameState=data.val();
     })
    }
    updateGameState(state){
     database.ref("/").update({
         gameState:state
     })
    }
     start(){
        if(gameState==0){
           form = new Form();
           player = new Player();
           form.display();
           player.getPlayerCount();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        carArray = [car1,car2,car3,car4]
    }
    play(){
        form.hide();
        Player.getAllPlayerInfo();
        text("Game Static",200,200);
        if(allPlayerInfo!=undefined){
            var x=0;
            var y=0;
            var index=0;
          for(var i in allPlayerInfo){
              index=index+1;
              x=x+200;
              y=displayHeight-allPlayerInfo[i].distance;
              carArray[index-1].x=x;
              carArray[index-1].y=y;
              if(index==player.playerIndex){
                  carArray[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y = carArray[index-1].y
              }
              else{
                  carArray[index-1].shapeColor="black";
              }
             
          }
          if(keyDown(UP_ARROW)&&player.playerIndex != null){
            player.distance=player.distance+20;
            player.updatePlayer();
          }
          drawSprites();
        }
    }
}