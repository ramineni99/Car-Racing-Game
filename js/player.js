class Player {
    constructor(){
     this.playerName = null;
     this.playerIndex = null;
     this.distance = 0;
     this.playerRank=0;
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
    static getPlayerRank(){
        database.ref("playerRanks").on("value",function (data){
            rank=data.val();
        });
        
    }
    updatePlayerRank(r){
        database.ref("/").update({
            playerRanks:r
        })

        
    }
}