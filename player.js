class Player{
    constructor(){

    }
    getplayercount(){
        var getplayercountref = database.ref('PlayerCount');
        getplayercountref.on("value",function(data){
            playercount = data.val();
        })
    }
    updateplayercount(count){
        var person = database.ref('/');

        person.update({
             PlayerCount:count,
        })
    }
    updateDetails(name){
        var playerIndex = "player"+playercount;
        var noderef = database.ref(playerIndex);
        noderef.set({
            playerName = name,
        })
    }
}