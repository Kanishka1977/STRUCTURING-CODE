class Game {
    constructor(){

    }
    getgamestate(){
        var gamestateref = database.ref('GameState');
        gamestateref.on("value",function(data){
            gamestate=data.val();
        })
    }
    updategamestate(state){
        var noderef = database.ref('/');

        noderef.update({
            GameState:state,
        })
    }
    start(){
        if(gamestate===0){
            player= new Player();
            player.getplayercount();
            form= new Form();
            form.display();
        }
    }
}
