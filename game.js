const heart = '♡';
const GAMESTATE = {
    PAUSED : 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL : 4,
    WIN:5

}

class Game{
   

    constructor(gameWidth,gameHeight)
    {

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gamestate = GAMESTATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        this.gameObject = [];

        this.bricks= [];


        this.lives = 3;

        this.levels = [level1, level2,level3,level4,level5];
        this.currentLevel = 0;

        new inputHandler(this.paddle, this);


    }
    start(){

        if(this.gamestate !== GAMESTATE.MENU &&
            this.gamestate !== GAMESTATE.NEWLEVEL
        )
            return;
       
       
        this.bricks = buildLevel(this, this.levels[this.currentLevel]);
        this.ball.reset();
       
        this.gameObject =[
            this.ball,
            this.paddle,
            
        ];
        this.gamestate = GAMESTATE.RUNNING;

    }
    update(deltaTime){

        if(this.lives === 0)
            this.gamestate = GAMESTATE.GAMEOVER;
            
        if(this.gamestate === GAMESTATE.PAUSED || 
            this.gamestate === GAMESTATE.MENU||
            this.gamestate === GAMESTATE.GAMEOVER||
            this.gamestate === GAMESTATE.WIN)
            return;

                     

        if(this.bricks.length === 0){
             this.currentLevel++;
            if(this.currentLevel>= this.levels.length)
            {    this.gamestate = GAMESTATE.WIN;
                
            }
            else{
                this.gamestate = GAMESTATE.NEWLEVEL;
                 this.start();
            }
        }      
        
        
        

        [...this.gameObject, ...this.bricks].forEach(object =>
            object.update(deltaTime)
        );
            
    this.gameObject.forEach(object => object.update(deltaTime));

     this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);

     
    }

    draw(ctx){
        
    [...this.gameObject, ...this.bricks].forEach(object => object.draw(ctx));

    // to update life and level no
    ctx.font = "20px Arial";
    ctx.fillStyle = "black"; 
    ctx.textAlign = "left";
    ctx.fillText(`Life: ${heart.repeat(this.lives)}`, 10, 30);
    ctx.fillText(`Level: ${this.currentLevel + 1}`, 10, 60);


    if( this.gamestate === GAMESTATE.WIN)
    {
        ctx.rect(0,0,this.gameWidth,this.gameHeight);
        ctx.fillStyle= "rgba(0,0,0,0.5)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("You Win :)",this.gameWidth/2, this.gameHeight/2);
    }

    if(this.gamestate == GAMESTATE.PAUSED)
    {
        ctx.rect(0,0,this.gameWidth,this.gameHeight);
        ctx.fillStyle= "rgba(0,0,0,0.5)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Paused",this.gameWidth/2, this.gameHeight/2);
    }

    if(this.gamestate == GAMESTATE.MENU)
    {
        ctx.rect(0,0,this.gameWidth,this.gameHeight);
        ctx.fillStyle= "rgba(0,0,0,1)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("Press SPACEBAR To Start",this.gameWidth/2, this.gameHeight/2);
    }

    if(this.gamestate == GAMESTATE.GAMEOVER)
        {
            ctx.rect(0,0,this.gameWidth,this.gameHeight);
            ctx.fillStyle= "rgba(0,0,0,1)";
            ctx.fill();
    
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Gameover",this.gameWidth/2, this.gameHeight/2);
        }

    }

togglePause(){
    //
    if(this.gamestate == GAMESTATE.PAUSED)
    {
        this.gamestate = GAMESTATE.RUNNING;
    }
    else{
        this.gamestate = GAMESTATE.PAUSED;
    }
}
}

