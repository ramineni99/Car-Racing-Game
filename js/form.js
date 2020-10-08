class Form{
    constructor(){
        this.title = createElement("h1","Car Racing Game");
        this.input=createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h1");
        this.reset = createButton("reset");
    }
    display(){
      
        this.title.position(displayWidth/2,0);
        this.input.position(displayWidth/3,displayHeight/4);
        this.button.position(displayWidth/3+150,displayHeight/4);
        this.reset.position(displayWidth-300,30);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.playerName = this.input.value();
            playerCount = playerCount + 1;
            player.playerIndex=playerCount;
            player.updatePlayerCount(playerCount);
            player.updatePlayer();
            this.greeting.html("Hello "+player.playerName);
            this.greeting.position(displayWidth/3,displayHeight/4);

        })
        this.reset.mousePressed(()=>{
            player.updatePlayerRank(0);
            player.updatePlayerCount(0);
            game.updateGameState(0);
            database.ref("/").child("players").remove();
        }

        );
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}