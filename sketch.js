var gamestate=0;
var playercount=0;

var form,player,game;

function setup(){
    createCanvas(400,400);
  
    database=firebase.database();

    game = new Game();
    game.getgamestate();
    game.start();

    
}

function draw(){

}