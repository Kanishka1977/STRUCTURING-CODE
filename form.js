class Form{
     
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Car Racing");
        title.position(130,0);

        var inputBox = createInput("name");
        inputBox.position(130,160);

        var button = createButton("submit");
        button.position(250,200);
        
        var greeting = createElement("h3");

        button.mousePressed(function(){
            inputBox.hide();
            button.hide();

            var name = inputBox.value();

            playercount = playercount+1;
            player.updateDetails(name);
            player.updateplayercount(playercount);

            greeting.html("Hello"+name);
            greeting.position(130,160);
        })
        
    }
}