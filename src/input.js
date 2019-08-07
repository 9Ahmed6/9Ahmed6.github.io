export default class InputHandler {
    constructor(paddle, game) {
        document.addEventListener("keydown", (event) => {
            switch(event.keyCode) {
                case 39:
                    paddle.moveLeft();
                    break;
                case 37:
                    paddle.moveRight();
                    break;
                case 32:
                    game.togglePause();
                    break;
                case 13:
                    game.start();
                    break;
            }
        });
        document.addEventListener("keyup", (event) => {
            switch(event.keyCode) {
                case 39:
                    if (paddle.speed > 0)
                        paddle.stop();
                    break;
                case 37:
                    if (paddle.speed < 0)
                        paddle.stop();
                    break;
            }
        });
    }
}