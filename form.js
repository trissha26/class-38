class Form{
    constructor(){
       
        this.button = createButton("play");
        this.input = createInput("name");
        this.greeting = createElement('h3');
        this.title = createElement('h2');

    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

    }

    display(){

        
        this.title.html("car racing game");
        this.title.position(displayWidth/2-50,20);

        this.input.position(displayWidth/2-40,displayHeight/2-80);

        this.button.position(displayWidth/2+30, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            

            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70,diaplayHeight/4);
        })
     }
}