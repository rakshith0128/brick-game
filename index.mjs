/* import "./styles.css";
import Paddle from '/src/paddle';
import inputHandler from '/src/input'; */


//images



//let imgBall = document.getElementById("img_ball");

let canvas =document.getElementById("gamescreen");
let ctx = canvas.getContext('2d');

const Game_width = 800;
const Game_height = 600;

ctx.clearRect(0,0,800,600);// clear screen

let game = new Game(Game_width,Game_height);






let LastTime = 0;
// game loop

function gameLoop(timeStamp){
    let deltaTime = timeStamp - LastTime;
    LastTime = timeStamp; 

    ctx.clearRect(0,0,Game_width,Game_height);// clear screen
   
    game.update(deltaTime);
    game.draw(ctx);
    

   

    requestAnimationFrame(gameLoop);

}
requestAnimationFrame(gameLoop);





