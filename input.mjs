class inputHandler {
  constructor(paddle, game ) {
    
    document.addEventListener("keydown", (Event) => {
      switch (Event.code) {
        case 'ArrowLeft':
          paddle.moveLeft();
          break;

        case 'ArrowRight':
          paddle.moveRight();
          break;

        case 'Escape':
          game.togglePause();
          break;

        case "Space":
          game.start()
          break;
      }
    });

    document.addEventListener("keyup", (Event) => {
      switch (Event.code) {
        case 'ArrowLeft':
          if (paddle.speed < 0) paddle.stop();
          break;

        case 'ArrowRight':
          if (paddle.speed > 0) paddle.stop();
          break;
        
          
      }
    });
  }
}