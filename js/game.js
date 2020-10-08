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

        car1.addImage("car1Image",car1Image);
    
        car2 = createSprite(300,200);
       car2.addImage("car2Image",car2Image);

        car3 = createSprite(500,200);
        car3.addImage("car3Image",car3Image);
        car4 = createSprite(700,200);
        car4.addImage("car4Image",car4Image);
        carArray = [car1,car2,car3,car4]
    }
    play(){
        form.hide();
        Player.getAllPlayerInfo();
        Player.getPlayerRank();
        text("Game Static",200,200);
        if(allPlayerInfo!=undefined){
            background(220);
            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            var x=275;
            var y=0;
            var index=0;
          for(var i in allPlayerInfo){
         
              index=index+1;
              x=x+275;
              y=displayHeight-allPlayerInfo[i].distance;
              carArray[index-1].x=x;
              carArray[index-1].y=y;
              if(index==player.playerIndex){
                  carArray[index-1].shapeColor="red";
                  camera.position.x=displayWidth/2;
                  camera.position.y = carArray[index-1].y
                  fill("black");
                  ellipse(x,y,75,75);

              }
              else{
                  carArray[index-1].shapeColor="black";
              }
             
          }
          if(keyDown(UP_ARROW)&&player.playerIndex != null){
            player.distance=player.distance+20;
            console.log(player.distance);
            player.updatePlayer();
          }
          if(player.distance>=5280){
            gameState=2;
            rank=rank+1;
            player.updatePlayerRank(rank);
            player.playerRank=rank;
          }
          drawSprites();
        }
       
    }
    end(){
      alert("Your Rank ="+player.playerRank);
    }
}