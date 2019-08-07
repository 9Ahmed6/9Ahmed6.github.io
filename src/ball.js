import { detectCollision } from './collisionDetection.js';

export default class Ball {
    constructor(game) {
        this.game = game;
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth;
        this.ball = document.getElementById("img-ball");
        this.size = 30;
        this.reset();
    }

    reset() {
        this.position = {
            x: 0,
            y: 400
        };
        this.speed = {
            x: 8,
            y: -8
        };
    }

    draw(context) {
        context.drawImage(
            this.ball, 
            this.position.x, 
            this.position.y, 
            this.size, 
            this.size * 1.29
            );
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        // wall on the right or left
        if (this.position.x < 0 || this.position.x > this.gameWidth - this.size) {
            this.speed.x = -this.speed.x;
        }
        // wall on top or bottom
        if (this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
        if (this.position.y > this.gameHeight - this.size) {
            this.game.tries--;
            this.reset();
        }
        // collision with paddle
        // let bottomBall = this.position.y + this.size - 15;
        // let topPaddle = this.game.paddle.position.y;
        // let leftSidePadle = this.game.paddle.position.x;
        // let rightSidePadle = this.game.paddle.position.x + this.game.paddle.width;
        if (detectCollision(this, this.game.paddle)) {
            this.speed.y = -this.speed.y;
            // this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}