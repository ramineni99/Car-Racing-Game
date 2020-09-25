class Player {
    constructor(){
     this.playerName = null;
     this.playerIndex = null;
     this.distance = null;
    }
    getPlayerCount(){
     database.ref("playerCount").on("value",function (data){
         playerCount=data.val();
     })

    }
    updatePlayerCount(count){
     database.ref("/").update({
         playerCount:count
     })
    }
    updatePlayer(){
        var playerReferenceName = "players/player"+this.playerIndex;
        database.ref(playerReferenceName).set({
            name:this.playerName,
            distance:this.distance
        })
    }
    static getAllPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayerInfo = data.val();
        })
    } 
}